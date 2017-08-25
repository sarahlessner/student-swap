const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname, "..", "models"));

module.exports = function(app) {
  //to check if user is in the database
  app.post("/user/check", function(req, res) {

    var new_user = req.body;
    db.User.findOne({
      where:{
        google_id: new_user.guid
      }
    }).then(data =>  {
      if(data === null){
        db.User.create({
          google_id: new_user.guid,
          name: new_user.name,
          email: new_user.email,
          photo: new_user.picture
        }).then(result => {
          console.log("successfully wrote new user to database");
          // returns object with route and data
          console.log(result);
          res.send({redirect: "signin",
                  user_data : result.dataValues});
        });
      } else {
        console.log(data.dataValues);
        //redirect stuff still not working
          res.send(
            {redirect: "homepage",
            user_data: data.dataValues}
          );
      }
    });
  });
};
