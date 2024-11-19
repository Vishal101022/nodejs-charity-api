const express = require("express");
const router = express.Router();
const charity = require("../controllers/charity");
const auth = require("../middleware/auth");

router.post("/register", charity.register);
router.post("/approve/:id", auth.adminMiddleware, charity.approveCharity);
router.post("/login", charity.login);
router.get("/charity", auth.adminMiddleware, charity.getCharity);
router.get("/charity/:id", auth.adminMiddleware, charity.getCharityById);
router.patch("/charity", auth.charityAuthMiddleware, charity.updateCharity);


module.exports = router;