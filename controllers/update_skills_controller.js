const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  //all app.gets, post, etc need to live here
  //get all the users current offers and then the things they want for those offers
	app.get("/update-skills/:currentUser", function(req, res) {
	  db.Offered
	    .findAll({
	      where: {
	        UserId: req.params.currentUser
	      },
	      include: [{ model: db.Skill }]
	    })
	    .then(function(useroffers) { // returns all the users offers
	      // console.log("USER OFFERS FROM UPDATE", useroffers);
	      // console.log("SKILLZ", useroffers[0].Skill.skill_name);
	      Promise.all(
	        useroffers.map(offer =>
	          // console.log(useroffers);
	          // var currentOffer = offer.Skill.skill_name;
	          db.Wanted.findAll({
	            where: {
	              OfferedId: offer.id
	            },
	            include: [{ model: db.Skill }]
	          })
	        )).then(wanted => { // returns all the things they want per each offer
	        // TODO Math `useroffers` with `values` (combining 2 arrays)
	        res.json({useroffers: useroffers, wanted:wanted}); // send over 2 arrays of objects
	        // console.log(JSON.stringify({useroffers: useroffers, values:values}))
	      });
	    });
	//end of app.get
	});
	//delete offer route
	app.delete("/update-skills/offers/:offerId", function(req, res) {
		db.Offered.destroy({
			where: {id: req.params.offerId}
		}).then(function(deleteoffer) {
			res.json(deleteoffer);
		});
	});
	//delete wanted route
	app.delete("/update-skills/wanteds/:wantedId", function(req, res) {
		db.Wanted.destroy({
			where: {id: req.params.wantedId}
		}).then(function(deletewanted) {
			res.json(deletewanted);
		});
	});

//end of modeul.exports	
};

