$(document).ready(function() {

	var currentUser = localStorage.userid

	displayUserOffers();
	//
	function displayUserOffers(){

		$.get("/update-skills/" + currentUser ,function(data) {
			console.log("useroffers", data.useroffers);
			console.log("wanteds", data.wanted);
			var offers = data.useroffers;
			var wanteds = data.wanted;
			var wantedId = "";
			// $("#update_stuff").append(data.useroffers[0].Skill.skill_name);
			for (i = 0; i < offers.length; i++) {
				var offerId = offers[i].id;
				console.log(offerId);
				$offerDiv = $('<div>');
				$offerDiv.append('<button class="offerbtn">'+offers[i].Skill.skill_name+'</button>')
				.addClass("offer-div")
				.css('border', '1px solid black')
				.css('text-align', 'left')
				.attr("value", offerId);
				$wantedList = $("<ul>");
				$wantedList.addClass("wanted-list");
				// $(".wanted-list").hide();

				//loop through wanteds and pair all wanteds with offer
				for (j = 0; j < wanteds[i].length; j++) {
					wantedId = wanteds[i][j].id;
					$wantedOptions = $("<li>");
					$wantedOptions.addClass("wanted-list")
					.text(wanteds[i][j].Skill.skill_name)
					.attr("value", wantedId)
					$wantedList.append($wantedOptions);
				}
				$offerDiv.append($wantedList);

				$("#update_stuff").append($offerDiv);

			}

		});
	};

//by adding the click event to the document, we don't have to worry about
// the click event getting messed up.(I have no clue why, haha!)
	$(document).on("click", '.offerbtn', function(){
		// $(".wanted-list").toggle();
		// NOTE: this is how we selected the ul list:
			//target the button
			//target the buttons parent, which is the div
			//target the div's children (a.k.a. the button and the ul list)
			//p.s. ^ returns all the children as an array
			//then we select the element at the 2nd element in the array
			//and add the toggle method to that.

		$($(this).parent().children()[1]).toggle();
	});


//updates will load when navigating to update by clicking button but
//also need to function on page load so on click is one of 2 ways to reach info
//will change after testing is done and clicking this redirectsex
$("#offersbyskill").on("click", displayUserOffers);






















//end of document.ready
});
