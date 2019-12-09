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
    let sql = `SELECT user, project_name, project_description, project_link FROM projects`;
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
router.post("/", (req, res) => {
  res.send("Add project");
});

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
