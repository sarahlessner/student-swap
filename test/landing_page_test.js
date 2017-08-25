var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

require('nightmare-wait-for-url')

nightmare
  .goto("https://student-skill-swap.herokuapp.com")
  // .click("form[action*='/search'] [name=btnK]")
  .wait("#iron_box")
  .click("#iron_box")
  .wait(3000)
  .evaluate(function() {
    return ("clicked svg on landing page!");
  })
  .end()
  .then(function(result) {
    console.log("Search success: " + result);
  })
  .catch(function(error) {
    console.error("Search failed: ", error);
  });
