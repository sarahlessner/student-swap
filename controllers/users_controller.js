const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname, "..", "models"));

module.exports = function(app) {
  console.log("listening for post");
  //all app.gets, post, etc need to live here
  app.post("/user/check", function(req, res) {

    var new_user = req.body;

    db.User.findAll({}).then(data => {
      data.map(dataValues => {
        if (dataValues.google_id === new_user.guid) {
          console.log("exists in database");
          // var hbsObject = {};
          // res.render("../views/homepage", hbsObject);
        } else {
          console.log("doesn't exist in database");
          // db.User.create({
          //     google_id: new_user.guid,
          //     name: new_user.name,
          //     email: new_user.email,
          //     photo: new_user.picture
          // }).then(result =>{
          //   console.log("successfully wrote new user to database");
          // res.render("../views/signin", hbsObject);
        }
      });
    });

  });

};

//app.get to pass user object to landing controller /homepage route

//may also pass user object for name of match

//app.get
