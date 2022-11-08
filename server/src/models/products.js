const Pool = require("../config/db");

const selectAll = ({ key, limit, offset, sort, sortby }) => {
  return Pool.query(
    `select * from products where name ilike '%${key}%' order by ${sortby} ${sort} limit ${limit} offset ${offset}`
  );
};

const select = (id) => {
  return Pool.query(`SELECT * FROM products WHERE id='${id}'`);
};
const insert = (data) => {
  const { id, name, price, merk, stock, photo, description } = data;
  return Pool.query(
    `INSERT INTO products(id,name,price,merk,stock,photo,description) VALUES('${id}','${name}',${price},'${merk}',${stock},'${photo}','${description}')`
  );
};
const update = (data) => {
  const { id, name, price, merk, stock, photo, description } = data;
  return Pool.query(
    `UPDATE products SET name='${name}', price=${price},merk='${merk}', stock=${stock},photo='${photo}', description='${description}'   WHERE id='${id}'`
  );
};
const deleteData = (id) => {
  return Pool.query(`DELETE FROM products WHERE id='${id}'`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM products");
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM products WHERE id='${id}'`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  // searching,
  selectAll,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
