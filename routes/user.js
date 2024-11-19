const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/users", auth.authMiddleware, user.getUser);
router.get("/users/:id", auth.authMiddleware, user.getUserById);
router.patch("/user", auth.authMiddleware, user.updateUser);

module.exports = router;