
//-------------
//yo for now this existing code is just copied from the burger sequelized project as a start
//----------

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;
//require models to sync
var db = require("./models");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: true }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// var routes = require('./controllers/burgers_controller.js');
// app.use("/", routes);

// Syncing our sequelize models and then starting our Express app
//{ force: true }
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});