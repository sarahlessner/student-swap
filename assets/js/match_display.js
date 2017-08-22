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
		$("#main_results").empty();
		// $("#main_results").append("<p>"+"Loading Results"+"<p>");
		console.log("running displayPerfect");
		var userid = 1;
		  //TODO: figure out where UserId param ought to come 
		  //from the page redirect/data
		$.get("/homepage/perfectmatch/" + userid, function(data) {
	      	console.log("PERFECT MATCH", data);
	      	for (var i = 0; i < data.length; i++) {
		      	$("#main_results").append(data[i][0].User.name+ " is interested in your offer to ");
		      	$("#main_results").append(data[i][0].Skill.skill_name);
		      	$("#main_results").append(" contact them at "+data[i][0].User.email+" if you're interested in their offer to ");
		      	$("#main_results").append(data[i][1].skill_name+'<br>');
		      	//calls to get skill offered data for the offeredId 
		      	// getSkillOffered(data[i].OfferedId);
		      	// console.log(data[i].OfferedId);
	      	}
	      	data = [];
	      	
	    });
	    //.then(function(data){
	    // 	getSkillOffered(data[0].OfferedId);
	    // });
	};
	// function getSkillOffered(offerid) {
	// 				console.log("SKILL OFFER DATA");

	// 	$.get("/homepage/perfectmatchoffer/" + offerid, function(data) {
	// 		for (var i = 0; i < data.length; i++) {
	// 			console.log("SKILL OFFER DATA");
	// 			$("#main_results").append(data[i].skill_name);
	// 		}
	// 	});
	// };
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