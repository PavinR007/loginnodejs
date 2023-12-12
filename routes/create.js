var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/createuser", function (req, res) {
  res.render("createuser");
});
module.exports = router;

router.post("/login");
