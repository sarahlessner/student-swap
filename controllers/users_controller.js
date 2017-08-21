const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname, "..", "models"));

module.exports = function(app) {
  //to check if user is in the database
  app.post("/user/check", function(req, res) {

    var new_user = req.body;

    db.User.findAll({}).then(data => {
      // console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        // console.log(`this is the ${i} element`);
        // console.log(data[i].dataValues);
        // console.log("--------------------------");

        if (data[i].dataValues.google_id === new_user.guid) {
          console.log(`guid user ${new_user.guid} exists in the database`);
          res.redirect("/homepage");
        }
        else if (i === data.length - 1 && data[i].dataValues.google_id !==new_user.guid){
          console.log("this is the last element and the user doesn't exist in the db");
          db.User.create({
            google_id: new_user.guid,
            name: new_user.name,
            email: new_user.email,
            photo: new_user.picture
          }).then(result => {
            console.log("successfully wrote new user to database");
            res.redirect("../views/signin");
          });
        }
      }

    });
  });


};
