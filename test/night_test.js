var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://student-skill-swap.herokuapp.com/")
  // .click("form[action*='/search'] [name=btnK]")
  .wait("#iron_box")
  .click("#iron_box")
  .wait(3000)
  .click("#broom")
  .wait(3000)
  .evaluate(function() {
    //search through page to get actual details.
    // you can also use .innerText to get the innerHTML
    return ("you clicked the iron box svg!");
  })
  .end()
  .then(function(result) {
    console.log("Search success: " + result);
  })
  .catch(function(error) {
    console.error("Search failed: ", error);
  });
