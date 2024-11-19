const express = require("express");
const router = express.Router();
const project = require("../controllers/project");
const auth = require("../middleware/auth");

router.post("/create", auth.charityAuthMiddleware, project.createProject);
router.get("/projects", auth.charityAuthMiddleware, project.getAllProjects);
router.get("/projects/:id", auth.charityAuthMiddleware, project.getProjectById);
router.patch("/update/:id", auth.charityAuthMiddleware, project.updateProject);

module.exports = router;