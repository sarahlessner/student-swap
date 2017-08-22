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
		$("#main_results").append("<p>"+"Loading Results"+"<p>");
		console.log("running displayPerfect");
		//var userid = localStorage.userid;
		var userid = 1;
		  //TODO: figure out where UserId param ought to come 
		  //from the page redirect/data
		$.get("/homepage/perfectmatch/" + userid, function(data) {
			$("#main_results").empty();
	      	console.log("PERFECT MATCH", data);
	      	for (var i = 0; i < data.length; i++) {
	      		var email = data[i][0].User.email;
	      		var $perfectmatch = $('<div>');
	      		$perfectmatch.css('border', '1px solid black');
	      		var userimg = $('<img>');
	      		userimg.attr('src', data[i][0].User.photo);
	      		userimg.css({width: '50px'});
	      		$perfectmatch.append(userimg);
		      	$perfectmatch.append(data[i][0].User.name+ " is interested in your offer to ");
		      	$perfectmatch.append(data[i][0].Skill.skill_name);
		      	$perfectmatch.append(" contact them at "+data[i][0].User.email+" if you're interested in their offer to ");
		      	$perfectmatch.append(data[i][1].skill_name+'<br>');
		      	$perfectmatch.append('<button>Negotiate<a class="mailto" href="mailto:'+email+'Mail</a></button>');
		      	$("#main_results").append($perfectmatch);
	      	}
	    });
	};

	function displayOfferMatch() {
		$("#main_results").empty();
		$("#main_results").append("<p>"+"Loading Results"+"<p>");
		console.log("running displayOfferMatch");
		var userid = 1;
		$.get("/homepage/offermatch/" + userid, function(data) {
			$("#main_results").empty();
	      	console.log("OK Match", data);
	      	for (var i = 0; i < data.length; i++) {
	      		for (var j = 0; j < data[i].length; j++) {
	      			var email = data[i][j].User.email;
	      			var $offermatch = $('<div>');
		      		$offermatch.css('border', '1px solid black');
		      		var userimg = $('<img>');
		      		userimg.attr('src', data[i][j].User.photo);
		      		userimg.css({width: '50px'});
		      		$offermatch.append(userimg);
		      		$offermatch.append(data[i][j].User.name+ " has got what you want! ");
		      		$offermatch.append("they're offering to "+data[i][j].Skill.skill_name+"<br>");
		      		// var mailto = $('<button>');
		   			$offermatch.append('<button>Negotiate<a class="mailto" href="mailto:'+email+'Mail</a></button>');
		   			// console.log(mailto);
		   			// $offermatch.on("click", "button", function(){

		   			// })
		      		$("#main_results").append($offermatch);
	      		}
	      	}


	    });
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