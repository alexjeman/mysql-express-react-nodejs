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
    let sql = `SELECT id, user, project_name, project_description, project_sample, project_link, project_img, project_img_pages FROM projects`;
    connection.query(sql, async (err, projects) => {
      if (err) throw err;
      res.json(projects);
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
      project_sample,
      project_link,
      project_img,
      project_img_pages
    } = req.body;
    // Build project object
    const project = {
      user: req.user.email,
      id: 99,
      project_name,
      project_description,
      project_sample,
      project_link,
      project_img,
      project_img_pages
    };
    try {
      let sqlInsert = `INSERT INTO projects (user, project_name, project_description, project_sample, project_link, project_img, project_img_pages) VALUES ("${project.user}", "${project.project_name}", "${project.project_description}", "${project.project_sample}", "${project.project_link}", "${project.project_img}", "${project.project_img_pages}")`;
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
router.put("/:id", auth, async (req, res) => {
  const {
    user,
    project_name,
    project_description,
    project_sample,
    project_link,
    project_img,
    project_img_pages
  } = req.body;
  // Build project object
  const projectFields = {};
  if (user) projectFields.user = user;
  if (project_name) projectFields.project_name = project_name;
  if (project_description) projectFields.project_description = project_description;
  if (project_sample) projectFields.project_sample = project_sample;
  if (project_link) projectFields.project_link = project_link;
  if (project_img) projectFields.project_img = project_img;
  if (project_img_pages) projectFields.project_img_pages = project_img_pages;

  try {
    let sql = `SELECT * FROM projects WHERE id = "${req.params.id}"`;
    await connection.query(sql, async (err, project) => {
      if (err) throw err;
      if (typeof project === "undefined" || !project.length) {
        return res.status(404).json({ msg: "Project not found" });
      }
      // Make sure user owns project
      if (project[0].user.toString() !== req.user.email) {
        return res.status(401).json({ msg: "Not authorized" });
      }
      // Update project
      let sql = `UPDATE projects SET project_name = "${projectFields.project_name}", project_description = "${projectFields.project_description}", project_sample= "${projectFields.project_sample}", project_link = "${projectFields.project_link}", project_img = "${projectFields.project_img}", project_img_pages = "${projectFields.project_img_pages}" WHERE id = "${req.params.id}"`;
      await connection.query(sql, async (err, project) => {
        if (err) throw err;
        // Return new project
        res.json(projectFields);
      });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/projects/:id
// @desc Delete project
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let sql = `SELECT * FROM projects WHERE id = "${req.params.id}"`;
    await connection.query(sql, async (err, project) => {
      if (err) throw err;
      if (typeof project === "undefined" || !project.length) {
        return res.status(404).json({ msg: "Project not found" });
      }
      // Make sure user owns project
      if (project[0].user.toString() !== req.user.email) {
        return res.status(401).json({ msg: "Not authorized" });
      }
      // Delete project
      let sql = `DELETE FROM projects WHERE id = "${req.params.id}"`;
      await connection.query(sql, async (err, project) => {
        if (err) throw err;
        // Return new project
        res.json({ msg: "Project removed" });
      });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
