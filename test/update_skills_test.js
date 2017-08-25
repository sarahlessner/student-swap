var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

require('nightmare-wait-for-url')

nightmare
  .goto("https://student-skill-swap.herokuapp.com/update-skills")
  // .click("form[action*='/search'] [name=btnK]")
  .wait("#done_deleting")
  .click("#done_deleting")
  .evaluate(function() {
    // return window.location.;
    return ("clicked button on update-skills");
  })
  .end()
  .then(function(result) {
    console.log("Search success: " + result);
  })
  .catch(function(error) {
    console.error("Search failed: ", error);
  });
