var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

require('nightmare-wait-for-url')

nightmare
  .goto("https://student-skill-swap.herokuapp.com/homepage")
  // .click("form[action*='/search'] [name=btnK]")
  .wait("#add_button")
  .click("#add_button")
  .wait(3000)
  .url()
  .evaluate(function() {
    return ("clicked button on homepage!");
  })
  .end()
  .then(function(result) {
    console.log("Search success: " + result);
  })
  .catch(function(error) {
    console.error("Search failed: ", error);
  });
