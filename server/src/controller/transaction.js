const createError = require("http-errors");
const {
  selectAll,
  select,
  countData,
  findId,
  insert,
  update,
  deleteData,
} = require("../models/transaction");
const commonHelper = require("../helper/common");

const transactionsController = {
  getAllTransactions: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 5;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "adress";
      const sort = req.query.sort || "ASC";
      const result = await selectAll({ limit, offset, sort, sortby });
      const {
        rows: [count],
      } = await countData();
      const totalData = parseInt(count.count);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit: limit,
        totalData: totalData,
        totalPage: totalPage,
      };
      commonHelper.response(
        res,
        result.rows,
        200,
        "get data success",
        pagination
      );
    } catch (error) {
      console.log(error);
    }
  },
  getTransaction: (req, res, next) => {
    const id = Number(req.params.id);
    select(id)
      .then((result) =>
        commonHelper.response(res, result.rows, 200, "get data success")
      )
      .catch((err) => res.send(err));
  },
  insertTransaction: async (req, res, next) => {
    const { adress, transaksi_detail_id } = req.body;
    const {
      rows: [count],
    } = await countData();
    const id = Number(count.count) + 1;
    insert(id, adress, transaksi_detail_id)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "Transaction created")
      )
      .catch((err) => res.send(err));
  },
  updateTransaction: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const { adress, transaksi_detail_id } = req.body;
      const { rowCount } = await findId(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      const data = {
        id,
        adress,
        transaksi_detail_id,
      };
      update(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Transaction updated")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deleteTransaction: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const { rowCount } = await findId(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      deleteData(id)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Transaction deleted")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = transactionsController;
