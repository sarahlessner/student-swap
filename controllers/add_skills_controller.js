const express = require("express");
const path = require("path");
const body = require("body-parser");
var db = require(path.join(__dirname,".." ,"models"));
var offered_skill_id;
var wanted_skill_ids;

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



app.post("/offeredskill", function(req, res) {
    	
    	var temp = req.body;

    	offered_skill_id = (Object.keys(temp)[0]);

	console.log("Offered skill ids is "+offered_skill_id);


db.Offered.create({

// NEED TO CREATE A NEW OFFERED SKILL WITH THE ABOVE ID
SkillId: offered_skill_id,
UserId: 1234

}).then(function() {
      console.log("added offered skill");
    });


});



app.post("/wantedskills", function(req, res) {


    console.log(req.body);
	var temp = req.body;

	wanted_skill_ids = Object.values(temp);

	console.log("wanted skills ids are "+wanted_skill_ids);

});

// db.Offered.create({
// for (var key in wanted_skill_ids) {

// 	db.Wanted.create({

// skillId: wanted_skill_ids[0],
// OfferedId: offered_skill_id,
// UserId: 12345

// }).then(function() {
//       res.redirect("/");
//     });

// db.Wanted.create({
// // NEED TO CREATE NEW WANTED SKILLS WITH THE ABOVE IDS AND MAKE SURE 
// // THEY MATH THE USER AND THE OFFERED SKILL
// }).then(function() {
//       res.redirect("/");
//     });
// }

};
   


