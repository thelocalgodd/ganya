const express = require("express"),
  router = express.Router(),
  User = require("../models/User"),
  authCheck = require("../middleware/authCheck"),
  { JWT_SECRET } = process.env;

module.exports = router;
