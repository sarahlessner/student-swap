const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  //all app.gets, post, etc need to live here


};


//get route to pass skills wherever skills need to be displayed


// module.exports = function(app) {

// 	app.get("/", function(req, res) {
// 	  var hbsObject = {};
// 	    res.render("index", hbsObject);
// 	});

// }/