const express = require("express");
const router = express.Router();
const {
  getAllTransactions,
  getTransaction,
  insertTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controller/transaction");
// const { protect } = require("../middlewares/auth");

router
  // .get("/", protect, getAllTransactions)
  // .get("/:id", protect, getTransaction)
  // .post("/", protect, insertTransaction)
  // .put("/:id", protect, updateTransaction)
  // .delete("/:id", protect, deleteTransaction);
  .get("/", getAllTransactions)
  .get("/:id", getTransaction)
  .post("/", insertTransaction)
  .put("/:id", updateTransaction)
  .delete("/:id", deleteTransaction);
module.exports = router;
