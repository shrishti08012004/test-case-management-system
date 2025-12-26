const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get(
  "/admin-only",
  authMiddleware,
  roleMiddleware(["admin"]),
  (req, res) => {
    res.json({ message: "Welcome Admin 👑" });
  }
);

module.exports = router;

