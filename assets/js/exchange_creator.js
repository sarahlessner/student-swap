$(document).ready(function() {
      // console.log("exchange_creator loading");
      $("#signin").on("click", function(event) {
            event.preventDefault();
            // console.log("submitted");
            var wanted_skills = [];
            var userID = parseInt(localStorage.userid);
            var offered_skill = {offer: $("#offer").val().trim(),
            userid: userID}
            var isChecked = false;
            for (i=0; i<18; i++) {
                  if($("#"+i).is(':checked')) {
                        wanted_skills.push(i);
                        isChecked = true;
                  }
            }
            if (isChecked) {
                  var wanted_skills_object = {
                        wantedskills: wanted_skills,
                        userid: userID
                  };

                  var newExchange = {
                        wanteds: wanted_skills_object,
                        offereds: offered_skill
                  };

                  $.post("/newexchange", newExchange).then(function(response){
                        console.log(response);
                        var direction = "/" + response.direction;
                        window.location.href = window.origin + direction;
                  });
            } else {
                  bootbox.alert("you must select at least one thing you want in return for your offer");
            }

            // console.log("ARRAY "+wanted_skills);


           
      });



//end document.ready
});
