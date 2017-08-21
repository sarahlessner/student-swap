// const express = require("express");
// const path = require("path");
// const body = require("body-parser");
// const db = require(path.join(__dirname,".." ,"models"));
//Sarah will be using this file to do the display of skills match
$(document).ready(function() {
//	console.log("matchDisplay loading");

	displayPerfect();
	// getSkillOffered();

	function displayPerfect() {
		console.log("running displayPerfect");
		var userid = 1;
		  //TODO: figure out where UserId param ought to come 
		  //from the page redirect/data
		$.get("/homepage/perfectmatch/" + userid, function(data) {
	      	// console.log("PERFECT MATCH", data);
	      	for (var i = 0; i < data.length; i++) {
		      	$("#main_results").append(data[i].User.name+ " is interested in your offer to ");
		      	$("#main_results").append(data[i].Skill.skill_name);
		      	$("#main_results").append(" contact her at "+data[i].User.email+" if you're interested her her offer to ");
		      	
		      	getSkillOffered(data[i].OfferedId);
		      	console.log(data[i].OfferedId);
	      	}
	    });
	    //.then(function(data){
	    // 	getSkillOffered(data[0].OfferedId);
	    // });
	};
	function getSkillOffered(offerid) {
					console.log("SKILL OFFER DATA");

		$.get("/homepage/perfectmatchoffer/" + offerid, function(data) {
			for (var i = 0; i < data.length; i++) {
				console.log("SKILL OFFER DATA");
				$("#main_results").append(data[0].skill_name);
			}
		});
	};
	function displayOfferMatch() {
		console.log("running displayOfferMatch");
		var userid = 1;
		// $.get("/perfectmatch" + userid, function(data) {
	 //      	console.log("PERFECT MATCH", data);
	 //    });
	};
	function displayOffersBySkill() {
		console.log("running displayOffersBySkill");
		var userid = 1;
		// $.get("/perfectmatch" + userid, function(data) {
	 //      	console.log("PERFECT MATCH", data);
	 //    });
	};

	$("#perfectmatch").on("click", displayPerfect);
	$("#offermatch").on("click", displayOfferMatch);
	$("#offersbyskill").on("click", displayOffersBySkill);
	// perfectMatchDisplay(1);

	// var perfectMatchDisplay = function(userid){
	// //	console.log("perfectMatchDisplay running: ", userid);
	// console.log("match_display loading");
	// console.log("match_display loading");

	// console.log("match_display loading");
	// console.log("match_display loading");
	// console.log("match_display loading");
	// 	$.get("/homepage/perfectmatch" + userid, function(data) {
	//       	console.log("PERFECT MATCH", data);
	//     });
	// };
//route for getting all users

//TODO: Have Ashish call perfectMatchDisplay and pass it user id as argument
/*
	perfectMatchDisplay(1);

	function perfectMatchDisplay(userid){
		console.log("perfectMatchDisplay");
		$.get("/homepage/perfectmatch" + userid function(data) {
	      	console.log("PERFECT MATCH", data);
	    });
	};

*/




//document.ready end
});

// module.exports = perfectMatchDisplay;