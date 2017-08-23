const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));


module.exports = function(app) {
  //all app.gets, post, etc need to live here
  // app.get("/update-skills", function(req,res){
  //   var dummyObject = {};
  //
  //   res.render("../views/updateSkills", dummyObject);
  // });

};

//get route to pass skills wherever skills need to be displayed

// Displaying the skills for the dropdown / checkbox
// Will also do update routing logic

// module.exports = function(app) {

// 	app.get("/", function(req, res) {
// 	  var hbsObject = {};
// 	    res.render("index", hbsObject);
// 	});

// };

// router.get("/signin", function(req, res) {


// router.get("/signin", function(req, res) {



//   var hbsObject = {};
//     res.render("signin", hbsObject);

//   var hbsObject = {};
//     res.render("signin", hbsObject);

//   // db.Skill.findAll ({}).then(function(data) {

//   //   console.log(data);

// //TALI DOES THIS:

//   // Find all skils
//   // Get the skill list out of there and run it through
//   // the signin handlebar like so:

//   // var hbsObject = {};
//   //   res.render("signin", data);

//   // db.Skill.findAll ({}).then(function(data) {

//   //   console.log(data);

// //TALI DOES THIS:

//   // Find all skils
//   // Get the skill list out of there and run it through
//   // the signin handlebar like so:

//   // var hbsObject = {};
//   //   res.render("signin", data);

//       // });
// });
