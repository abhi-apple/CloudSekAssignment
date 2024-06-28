const express = require("express");
const {
  createComment,
  getCommentsByPostId,
  updateComment,
} = require("../controllers/commentController");
const router = express.Router();

router.post("/", createComment);
router.get("/", getCommentsByPostId);
router.put("/:id", updateComment);

module.exports = router;
