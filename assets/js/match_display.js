// const express = require("express");
// const path = require("path");
// const body = require("body-parser");
// const db = require(path.join(__dirname,".." ,"models"));
//Sarah will be using this file to do the display of skills match
$(document).ready(function() {

//	console.log("matchDisplay loading");

  displayPerfect();
  //get all the users offers and receive their perfect matches back as data
  function displayPerfect() {
    // $(".da_tabs").removeClass("active");
    // $(this).addClass("active");
    $("#main_results").empty();
    // add some sort of loader here?
    // $("#main_results").append("<p>" + "calculating perfect matches..." + "<p>");
		 $("#main_results").append('<img src="https://loading.io/spinners/color-bar/lg.colorful-progress-loader.gif"/>');
    console.log("running displayPerfect");
    var userid = localStorage.userid;
   
    $.get("/homepage/perfectmatch/" + userid, function(data) {
      $("#main_results").empty();
      console.log("PERFECT MATCH", data);
      if (data.length === 0) {
        // console.log("sorry, no matches here");
        //if there aren't any matches - display images
				$("#main_results").append('<img id="no_matches" src="../img/sorry.png"/>')
													.append('<h3 style="color:#4e638a">No Matches Found. Adding more skills can help!</h3>')
													.append('<button id="add_button2">Add another skill?</button>')
      } else {
        //match display logic - put match name/skills matching to the page
        //include email for sending and photo for user
				for (var i = 0; i < data.length; i++) {
            //block user from seeing their own matches
      				if (data[i][0].User.id != localStorage.userid) {


						var email = data[i][0].User.email;
						var perfect_match_html = '<div class="row perfect_matches">' +
							'<div class="col-md-4 user_deets">' +
							' <h3>' + data[i][0].User.name + '</h3>' +
							'<img class="user_photos" src="' +
							data[i][0].User.photo + '"/>' +
							'</div>' +
							'<div class="col-md-6 offer_n_exchange">' +
							'<h3> Offer: </h3>' +
							'<h4>' + data[i][1].skill_name + '</h4>' +
							'<h3>Exchange: </h3>' +
							'<h4>' + data[i][0].Skill.skill_name + '</h4>' +
							'</div>' +
							'<div class="col-md-2">' +
              '<a href="mailto:'+email+'?Subject=Wanna%20Swap?" target="_top" class="mailto"><button class="match_buttons">Contact</button></a>' +
							'</div>';

						$("#main_results").append(perfect_match_html);
					}
				}
			}
    });
  };
  //function to display offer matches to the user - those offering what the user wants
  //regardless of if the user is offering something they want in return
  function displayOfferMatch() {
    // $(".da_tabs").removeClass("active");
    // $(this).addClass("active");
    $("#main_results").empty();
    $("#main_results").append("<p>" + "brb getting something from the back..." + "<p>");
    // console.log("running displayOfferMatch");
    var userid = localStorage.userid;
    $.get("/homepage/offermatch/" + userid, function(data) {
      $("#main_results").empty();
      //if no offer matches
      // console.log("OK Match", data);
      if(data.length === 0){
        $("#main_results").append('<img id="no_matches" src="../img/sorry.png"/>')
													.append('<h3 style="color:#4e638a">No Matches Found. Adding more skills can help!</h3>')
													.append('<button id="add_button2">Add another skill?</button>')
      } else{
        //display offer matches - name, photo, skills, etc
        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
            //block user from seeing their own matches
            if (data[i][j].User.id != userid) {

              var email = data[i][j].User.email;
              var offer_match_html = '<div class="row offer_matches">' +
                '<div class="col-md-2 user_deets">' +
                '<h3>' + data[i][j].User.name + '</h3>' +
                '<img class="offer_photos" src="' + data[i][j].User.photo + '">' +
                '</div>' +
                '<div class="col-md-8 offer_element">' +
                '<div class="offer_text">' +
                '<h3> Offer: </h3> ' +
                '<h4>' + data[i][j].Skill.skill_name + '</h4>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-2 offer_element">' +
                // '<br><br>' +
                '<a href="mailto:'+email+'?Subject=Wanna%20Swap?" target="_top" class="mailto"><button class="match_buttons">Contact</button></a>' +
                '</div>' +
                '</div>';
                //append matches to page
              $("#main_results").append(offer_match_html);
            }
          }
        }
      }
    });
  };

  function displayOffersBySkill() {
    // console.log("running displayOffersBySkill");
    // $(".da_tabs").removeClass("active");
    // $(this).addClass("active");
    $("#main_results").empty();
    $("#main_results").append("<p>" + "loading mad skills..." + "<p>");

    $.get("/alloffersbyskill", function(data) {
      $("#main_results").empty();
      
      // console.log("All Skills Joined w Offers", data);
      //create a button for each skill
      for (var i = 0; i < data.length; i++) {
        console.log("data", data[i]);
        //set added div to false for each offer
        var addedDiv = false;
        var $skills;

        for (var j = 0; j < data[i].length; j++) {
          //get each users email
          var email = data[i][j].User.email;
          // console.log(data[i]);
          //make sure use doesn't see their own matches
      		if (data[i][j].User.id != localStorage.userid) {
            //check if no div was already added for the skill
            if (!addedDiv) {
              $skills = $('<div class="all_skills"></div>');
              $skills.append($('<h3>' + data[i][0].Skill.skill_name + '</h3>'));
              addedDiv = true;
            }
            //display users offering that skill
            var user_html = '<div class="all_users">' +
              '<h4>' + data[i][j].User.name + '</h4>' +
              '<img class="all_users_pics" src="' + data[i][j].User.photo + '"/>' +
              '<a href="mailto:'+email+'?Subject=Wanna%20Swap?" target="_top" class="mailto"><button class="all_users_buttons">Contact</button></a>' +
              '</div>';
              //append each user offering the skill to div for that skill
            $skills.append(user_html);
          }
        }
        //append skills div to page
        $("#main_results").append($skills);


      }

    });
  };
  //on clicks that also trigger each function
  $("#perfectmatch").on("click", displayPerfect);
  $("#offermatch").on("click", displayOfferMatch);
  $("#offersbyskill").on("click", displayOffersBySkill);

  function set_tab_active() {
    $(".da_tabs").removeClass("active");
  }




});
