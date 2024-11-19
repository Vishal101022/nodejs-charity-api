const express = require("express");
const router = express.Router();
const donation = require("../controllers/donation");
const auth = require("../middleware/auth");
const e = require("express");

router.get("/donations", auth.authMiddleware, donation.getDonation);

module.exports = router;