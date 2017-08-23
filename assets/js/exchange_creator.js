$(document).ready(function() {
      console.log("exchange_creator loading");
      $("#signin").on("click", function(event) {
      event.preventDefault();
      console.log("submitted");
      var wanted_skills = [];
      var userID = parseInt(localStorage.userid);
      var offered_skill = {offer: $("#offer").val().trim(),
      userid: userID}

      for (i=0; i<18; i++) {

         if($("#"+i).is(':checked')) {
            wanted_skills.push(i);
              }
      }

      console.log("ARRAY "+wanted_skills);


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
            })

      });




      });
