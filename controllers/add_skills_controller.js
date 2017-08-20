const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));
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


});

app.post("/wantedskills", function(req, res) {


    console.log(req.body);
	var temp = req.body;

	wanted_skill_ids = Object.values(temp);

	console.log("wanted skills ids are "+wanted_skill_ids);

});

};
