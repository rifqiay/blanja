const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  getAllCategory,
  getCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
  searching,
} = require("../controller/category");
// const { protect } = require("../middlewares/auth");

router
  // .get("/search", protect, searching)
  // .get("/", protect, getAllCategory)
  // .get("/:id", protect, getCategory)
  // .post("/", protect, insertCategory)
  // .put("/:id", protect, updateCategory)
  // .delete("/:id", protect, deleteCategory);
  .get("/search", searching)
  .get("/", getAllCategory)
  .get("/:id", getCategory)
  .post("/", upload.single("photo"), insertCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);

module.exports = router;
