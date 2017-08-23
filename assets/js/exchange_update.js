$(document).ready(function() {

	var currentUser = localStorage.userid

	$("#update_button").on("click", function(){

		$.get("/update-skills/" + currentUser ,function(data) {

			console.log("RETURNED DATA FROM UPDATE CONTROLLER", data);
		});
	});




























//end of document.ready
});
