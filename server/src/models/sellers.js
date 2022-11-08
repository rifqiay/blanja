const Pool = require("../config/db");
const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM sellers WHERE email='${email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};
const create = (data) => {
  const { id, name, email, phoneNumber, storeName, passwordHash, role } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO sellers(id, name,email,phoneNumber,storeName,password,role) VALUES('${id}','${name}','${email}','${phoneNumber}','${storeName}','${passwordHash}','${role}')`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const findRole = (role) => {
  return Pool.query(`select * from sellers where role='${role}'`);
};

const select = (id) => {
  return Pool.query(`SELECT * FROM sellers WHERE id='${id}'`);
};

module.exports = {
  findEmail,
  create,
  findRole,
  select,
};
