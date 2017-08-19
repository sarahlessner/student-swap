
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;
//require models to sync
var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: true }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//new controller for that serves the landing page
var routes = require('./controllers/landing_controller.js');
app.use("/", routes);

// require('./controllers/skills_offered_controller.js')(app);
// require('./controllers/skills_wanted_controller.js')(app);
// require('./controllers/skills_controller.js')(app);
// require('./controllers/users_controller.js')(app);


// Syncing our sequelize models and then starting our Express app
//{ force: true }
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


