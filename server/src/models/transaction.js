const Pool = require("../config/db");

const selectAll = ({ limit, offset, sort, sortby }) => {
  return Pool.query(
    `SELECT * FROM transaksi ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};
const select = (id) => {
  return Pool.query(`SELECT * FROM transaksi WHERE id=${id}`);
};
const insert = (id, adress, transaksi_detail_id) => {
  return Pool.query(
    `INSERT INTO transaksi VALUES('${id}','${adress}',${transaksi_detail_id})`
  );
};
const update = (data) => {
  const { id, adress, transaksi_detail_id } = data;
  return Pool.query(
    `UPDATE transaksi SET adress='${adress}', transaksi_detail_id=${transaksi_detail_id} WHERE id=${id}`
  );
};
const deleteData = (id) => {
  return Pool.query(`DELETE FROM transaksi WHERE id=${id}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM transaksi");
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM transaksi WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
