const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { findEmail, create } = require("../models/custommer");
const commonHelper = require("../helper/common");
const authHelper = require("../helper/auth");

const UserController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const { rowCount } = await findEmail(email);
      const passwordHash = bcrypt.hashSync(password);
      const id = uuidv4();
      if (rowCount) {
        return next(createError(403, "Email is already used"));
      }
      const data = {
        id: uuidv4(),
        name,
        email,
        passwordHash,
        role: "custommer",
      };
      create(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 201, "Register succes")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const {
        rows: [user],
      } = await findEmail(email);
      if (!user) {
        return commonHelper.response(res, null, 403, "Email is invalid");
      }
      const isValidPassword = bcrypt.compareSync(password, user.password);
      console.log(isValidPassword);

      if (!isValidPassword) {
        return commonHelper.response(res, null, 403, "Password is invalid");
      }
      delete user.password;
      const payload = {
        email: user.email,
        role: user.role,
      };
      user.token = authHelper.generateToken(payload);
      commonHelper.response(res, user, 201, "login is successful");
    } catch (error) {
      console.log(error);
    }
  },
  profile: async (req, res, next) => {
    const email = req.payload.email;
    const {
      rows: [user],
    } = await findEmail(email);
    delete user.password;
    commonHelper.response(res, user, 200);
  },
  refreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRETE_KEY_JWT);
    const payload = {
      email: decoded.email,
      role: decoded.role,
    };
    console.log(payload);
    const result = {
      token: authHelper.generateToken(payload),
    };
    commonHelper.response(res, result, 200);
  },
};

module.exports = UserController;
