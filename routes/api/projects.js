const express = require("express");
const router = express.Router();
const connection = require("../../config/db");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route GET api/projects
// @desc Get all user's projects
// @access Public
router.get("/", async (req, res) => {
  try {
    let sql = `SELECT user, project_name, project_description, project_link, project_img FROM projects`;
    connection.query(sql, async (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/projects
// @desc Add new project
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("project_name", "Project name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      project_name,
      project_description,
      project_link,
      project_img
    } = req.body;
    const project = {
      user: req.user.email,
      project_name,
      project_description,
      project_link,
      project_img
    };
    try {
      let sqlInsert = `INSERT INTO projects (user, project_name, project_description, project_link, project_img) VALUES ("${project.user}", "${project.project_name}", "${project.project_description}", "${project.project_link}", "${project.project_img}")`;
      await connection.query(sqlInsert, (err, results) => {
        if (err) throw err;
        res.json(project);
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT api/projects/:id
// @desc Update project
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update project");
});

// @route DELETE api/projects/:id
// @desc Delete project
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete project");
});

module.exports = router;
