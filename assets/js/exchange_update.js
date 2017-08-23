$(document).ready(function() {

	var currentUser = localStorage.userid

	$("#update_button").on("click", function(){

		$.get("/update-skills/" + currentUser ,function(data) {

			console.log("RETURNED DATA FROM UPDATE CONTROLLER", data);
			
			$("update_stuff_goes_here").append(data);
		});
	});




























//end of document.ready
});
