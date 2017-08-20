const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  //all app.gets, post, etc need to live here

app.get("/signin", function(req, res) {


  db.Skill.findAll ({}).then(function(data) {

    var allskills = {
      skills: data
    };

    res.render("../views/signin", allskills);

      });
});

};
