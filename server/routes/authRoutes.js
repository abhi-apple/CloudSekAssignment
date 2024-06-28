const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerUser,
  loginUser,
  addPostToUser,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/auth");
const registerValidation = [
  body("email").isEmail().withMessage("Invalid email"),
];

router.post("/register", registerValidation, registerUser);
router.post("/login", loginUser);

router.post("/addpost", function (req, res) {
  authMiddleware(req, res, function (err) {
    if (err) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      console.log("running");
      addPostToUser(req, res);
    }
  });
});

module.exports = router;
