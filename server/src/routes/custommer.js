const express = require("express");
const router = express.Router();
const {
  register,
  login,
  profile,
  refreshToken,
} = require("../controller/custommer");
const { protect, admin } = require("../middlewares/auth");

router
  .post("/signup", register)
  .post("/login", login)
  .post("/refersh-token", refreshToken)
  .get("/profile", protect, profile);

module.exports = router;
