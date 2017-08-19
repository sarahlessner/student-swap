$(document).ready(function() {

      $("#signin").on("click", function(event) {
      event.preventDefault();
      console.log("submitted");
      var wanted_skills = [];
      var offered_skill = ($("#offer").val().trim());

      for (i=0; i<18; i++) {

         if($("#"+i).is(':checked')) {
            wanted_skills.push(i);
              }
      }

      console.log(wanted_skills);
            console.log("offered"+offered_skill);


      });



      });


      // Here we grab the form elements
      // var newSubmission = {
      //   name: ($("#name").val().trim()),
      //   photo: ($("#photo").val().trim()),
      //   q1: parseInt($("#q1").val().trim()),
      //   q2: parseInt($("#q2").val().trim()),
      //   q3: parseInt($("#q3").val().trim()),
      //   q4: parseInt($("#q4").val().trim()),
      //   q5: parseInt($("#q5").val().trim())
      // };

      // console.log(newSubmission);

      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.

      // $.post("/api/skills", newSubmission).then(function(response){

      //     $('#modal_name').text("name: "+response.name+ " ");
      //     $('#modal_photo').text("photo: "+response.photo);
      //     $('#myModal').modal('show');

      // })

//       sarahlessner [3:50 PM] 
// $(“#submit”).on(“click”, function(){
//        event.preventDefault();
//        var name = $(“#name”).val().trim();
//        var photo = $(“#photo”).val().trim();
//        var aArray = [];
//        //check for name and photo url
//        if ((name === “”) || (photo ===“”)) {
//          bootbox.alert(“must enter your name and photo URL”);
//          return;
//        }
//        for (var q = 0; q < qArray.length; q++) {
//          var answers = document.getElementsByName(“choice”+q);
//          //loop answer radio buttons to find selected
//          var isChecked = false;
//          for (var ans = 0; ans < answers.length; ans++) {
//            if (answers[ans].checked) {
//              // answer = ans+1;
//              isChecked = true;
//              aArray.push(ans+1);  
//            }
//          }
//          //check that all survey questions have been answered
//          if (!isChecked) {
//            bootbox.alert(“must select an answer for each question before submitting!“);
//            return;
//          }
//       }
 
//        var newFriend = {
//        name: name,
//        photo: photo,
//        survey: aArray
//        };
//        // console.log(newFriend);

//        var currentURL = window.location.origin;
//        $.post(currentURL + “/api/friends”, newFriend, function(data){
//              bootbox.alert(“Your best friend is “+data.name+“<hr><img class=‘bfimg’ src=‘” + data.photo + “‘>“)
             
//        });
//        $(“#name”).val(‘’);
//        $(“#photo”).val(‘’);
//        //clear radio buttons
//        // $(‘input[type=“radio”]‘).each((index, element) => $(element).attr(“checked” , false ));
//        for (var q = 0; q < qArray.length; q++) {
//          var answers = document.getElementsByName(“choice”+q);
//          for (var ans = 0; ans < answers.length; ans++) {
//            answers[ans].checked = false;
//            }
//          }
  