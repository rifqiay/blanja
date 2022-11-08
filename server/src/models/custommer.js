const Pool = require("../config/db");
const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM custommer WHERE email='${email}'`,
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
  const { id, name, email, passwordHash, role } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO custommer(id, name,email,password,role) VALUES('${id}','${name}','${email}','${passwordHash}','${role}')`,
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

const selectAll = () => {
  return Pool.query(`select * from custommer`);
};

const findRole = (role) => {
  return Pool.query(`select * from custommer where role='${role}'`);
};

module.exports = {
  findEmail,
  create,
  selectAll,
  findRole,
};
