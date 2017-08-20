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

  app.get("/signin", function(req, res) {


  db.Skill.findAll ({}).then(function(data) {

    var allskills = {
      skills: data
    };
    console.log(allskills);

    res.render("../views/signin", allskills);

      });
});

  app.get("/homepage", function(req, res) {

    db.User.findOne({
      where: {
        id: 1
      }
    }).then(function(dbUser) {
      console.log(dbUser);
/*
    var hbsObject = {
      name: db.User.name,
      userimg: "/img/dp-placeholder.gif"
    };
*/
    var hbsObject = {
      results: dbUser
    }
    res.render("../views/homepage", hbsObject);
    });


  //actual user info from db will populate name
});


};

















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






// router.get("/signin", function(req, res) {


//   db.Skill.findAll ({}).then(function(data) {

//     var allskills = {
//       skills: data
//     };
//     console.log(allskills);

//   // for (i=0; i<data.length; i++) {
//   //   allskills.push(data[i].dataValues.skill_name)
//   // }

//   // console.log(allskills);
//     // var allskills = {
//     //   skills: data.Skill.dataValues.skill_name
//     // };
//     // console.log(allskills);

// //TALI DOES THIS:

//   // Find all skils
//   // Get the skill list out of there and run it through
//   // the signin handlebar like so:

//   // var hbsObject = {};
//     res.render("signin", allskills);

//       });
// });


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
