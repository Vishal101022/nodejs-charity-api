const express = require("express");
const router = express.Router();
const report = require("../controllers/impactReport");
const auth = require("../middleware/auth");

router.post("/create", auth.charityAuthMiddleware, report.createReport);
router.get("/fetch", report.getReport);

module.exports = router;