const createError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const {
  selectAll,
  select,
  countData,
  findId,
  insert,
  update,
  deleteData,
  searching,
} = require("../models/products");
const commonHelper = require("../helper/common");
const client = require("../config/redis");

const productController = {
  getAllProduct: async (req, res) => {
    try {
      const key = req.query.key || "";
      console.log(key);
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 100;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "name";
      const sort = req.query.sort || "ASC";
      const result = await selectAll({ key, limit, offset, sort, sortby });
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
  getProduct: (req, res) => {
    const id = req.params.id;
    select(id)
      .then((result) => {
        // client.setEx(`products/${id}`, 60 * 60, JSON.stringify(result.rows));
        commonHelper.response(
          res,
          result.rows,
          200,
          "get data success from database"
        );
      })
      .catch((err) => res.send(err));
  },

  searching: (req, res) => {
    const key = req.query.key || "";
    searching(key)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },

  insertProduct: async (req, res) => {
    const PGHOST = process.env.URL;
    const photo = req.file.filename;
    const { name, price, merk, stock, description } = req.body;
    const id = uuidv4();
    const data = {
      id,
      name,
      price,
      merk,
      stock,
      photo: `${PGHOST}/img/${photo}`,
      description,
    };
    insert(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "Product created")
      )
      .catch((err) => res.send(err));
  },
  updateProduct: async (req, res, next) => {
    try {
      const DB_HOST = process.env.URL;
      const id = req.params.id;
      const photo = req.file.filename;
      const { name, price, merk, stock, description } = req.body;
      const { rowCount } = await findId(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      const data = {
        id,
        name,
        price,
        merk,
        stock,
        photo: `${DB_HOST}/img/${photo}`,
        description,
      };
      update(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Product updated")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const id = req.params.id;
      // const id = Number(req.params.id);
      const { rowCount } = await findId(id);
      console.log(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      deleteData(id)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Product deleted")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;
