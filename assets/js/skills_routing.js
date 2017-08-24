$(document).ready(function(){
  $(document).on("click", "#done_deleting, #add_button, #add_button2, #go_to_update",
  function(){
    var button = $(this).attr("id");
    if(button === "add_button" || button === "add_button2" ){
      console.log("you clicked add skill");
      window.location.href = window.origin + "/signin";
    } else if(button === "done_deleting"){
      console.log("you clicked done deleting!");
      window.location.href = window.origin + "/homepage";
    } else if(button === "go_to_update"){
      console.log("going to updates page!");
      window.location.href = window.origin + "/update-skills";
    }
  });
})
