const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  //all app.gets, post, etc need to live here

	app.get("/update-skills/:currentUser", function(req, res) {
	  db.Offered
	    .findAll({
	      where: {
	        UserId: req.params.currentUser
	      },
	      include: [{ model: db.Skill }]
	    })
	    .then(function(useroffers) {
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
	        )).then(wanted => {
	        // TODO Math `useroffers` with `values` (combining 2 arrays)
	        res.json({useroffers: useroffers, wanted:wanted});
	        // console.log(JSON.stringify({useroffers: useroffers, values:values}))
	      });
	    });
	//end of app.get
	});

	app.delete("/update-skills/offers/:offerId", function(req, res) {
		db.Offered.destroy({
			where: {id: req.params.offerId}
		}).then(function(deleteoffer) {
			res.json(deleteoffer);
		});
	});

	app.delete("/update-skills/wanteds/:wantedId", function(req, res) {
		db.Wanted.destroy({
			where: {id: req.params.wantedId}
		}).then(function(deletewanted) {
			res.json(deletewanted);
		});
	});

//end of modeul.exports	
};

