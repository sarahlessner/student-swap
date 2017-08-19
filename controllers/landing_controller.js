const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require("../models");

// const router = express.Router();

module.exports = function(app) {

  app.get("/", function(req, res) {
  var hbsObject = {};
    res.render("../views/index", hbsObject);
  });



  // app.get("/homepage", function(req, res) {
  //   var dbUser;
  //   var skillsDB;

  //   db.User.findOne({
  //     where: {
  //     	id: 1
  //     }
  //   }).then(function(dbUserStuff) {

  //   	console.log(dbUserStuff);
  //     dbUser = dbUserStuff;
  //   });


   



// 		var hbsObject = {
//       //user info
// 			results: dbUser,
//       //skills
//       skillsMatch: skillsDB

// 		}
// 	  res.render("homepage", hbsObject);
//     });


// 	//actual user info from db will populate name
// });


};
