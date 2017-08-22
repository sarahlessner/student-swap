// const express = require("express");
// const path = require("path");
// const body = require("body-parser");
// const db = require(path.join(__dirname,".." ,"models"));
//Sarah will be using this file to do the display of skills match
$(document).ready(function() {
//	console.log("matchDisplay loading");

	displayPerfect();
	// getSkillOffered();
	//get all the users offers and receive their perfect matches back as data
	function displayPerfect() {
		$("#main_results").empty();
		$("#main_results").append("<p>"+"calculating perfect matches..."+"<p>");
		console.log("running displayPerfect");
		//TODO: Enable ID from local storage for 'production' 
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
	      		$perfectmatch.css('text-align','left');
	      		var userimg = $('<img>');
	      		userimg.attr('src', data[i][0].User.photo);
	      		userimg.css({width: '50px'});
	      		$perfectmatch.append(userimg);
		      	$perfectmatch.append(data[i][0].User.name);
		      	// $perfectmatch.append(" contact them at "+data[i][0].User.email+" if you're interested in their offer to ");
		      	$perfectmatch.append(" is offering to: "+data[i][1].skill_name);
		      	$perfectmatch.append(" in exchange for your offer to: "+data[i][0].Skill.skill_name+" ");

		      	$perfectmatch.append('<button>Contact<a class="mailto" href="mailto:'+email+'Mail</a></button>'+'<br>');
		      	$("#main_results").append($perfectmatch);
	      	}
	    });
	};

	function displayOfferMatch() {
		$("#main_results").empty();
		$("#main_results").append("<p>"+"brb getting something from the back..."+"<p>");
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
		      		$offermatch.css('text-align','left');
		      		var userimg = $('<img>');
		      		userimg.attr('src', data[i][j].User.photo);
		      		userimg.css({width: '50px'});
		      		$offermatch.append(userimg);
		      		$offermatch.append(data[i][j].User.name);
		      		$offermatch.append(" is offering to: "+data[i][j].Skill.skill_name+" ");
		      		// var mailto = $('<button>');
		   			$offermatch.append('<button>Contact<a class="mailto" href="mailto:'+email+'Mail</a></button>'+"<br>");
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
		$("#main_results").empty();
		$("#main_results").append("<p>"+"loading mad skills..."+"<p>");

		$.get("/alloffersbyskill", function(data) {
			$("#main_results").empty();
	      	console.log("All Skills Joined w Offers", data);
	      	//create a button for each skill
	      	for (var i = 0; i < data.length; i++) {
	      		var $skills = $('<div>');
	      		if (data[i][0]) {
	      			$skills.append($('<button>'+data[i][0].Skill.skill_name+'</button>'+'<br>'));
	      			for (var j = 0; j < data[i].length; j++) {
		      			var userimg = $('<img>');
			      		userimg.attr('src', data[i][j].User.photo);
			      		userimg.css({width: '50px'});
		      			$skills.append(userimg);
		      			$skills.append(data[i][j].User.name);
		      		}
		      		$("#main_results").append($skills);
		      	}
	      		
	      	}

	    });
	};

	$("#perfectmatch").on("click", displayPerfect);
	$("#offermatch").on("click", displayOfferMatch);
	$("#offersbyskill").on("click", displayOffersBySkill);
	




//document.ready end
});

// module.exports = perfectMatchDisplay;