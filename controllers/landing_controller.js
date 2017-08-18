const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

const router = express.Router();

router.get("/", function(req, res) {
  var hbsObject = {};
    res.render("index", hbsObject);
});

router.get("/signin", function(req, res) {
  var hbsObject = {};
    res.render("signin", hbsObject);
});

router.get("/homepage", function(req, res) {
  var hbsObject = {};
    res.render("homepage", hbsObject);
});



module.exports = router;
