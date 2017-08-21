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
    }).then(data => {
      if(data === null){
        db.User.create({
          google_id: new_user.guid,
          name: new_user.name,
          email: new_user.email,
          photo: new_user.picture
        }).then(result => {
          console.log("successfully wrote new user to database");
          // redirect stuff still not working
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

// NOTE: a reminder of how complicated I was making this logic:-
    // db.User.findAll({}).then(data => {
    //   // console.log(data.length);
    //   for (var i = 0; i < data.length; i++) {
    //     // console.log(`this is the ${i} element`);
    //     // console.log(data[i].dataValues);
    //     // console.log("--------------------------");
    //
    //     if (data[i].dataValues.google_id === new_user.guid) {
    //       console.log(`guid user ${new_user.guid} exists in the database`);
    //       res.redirect("/homepage");
    //     }
    //     if (i === data.length - 1 && data[i].dataValues.google_id !==new_user.guid){
    //       console.log("this is the last element and the user doesn't exist in the db");
    //       db.User.create({
    //         google_id: new_user.guid,
    //         name: new_user.name,
    //         email: new_user.email,
    //         photo: new_user.picture
    //       }).then(result => {
    //         console.log("successfully wrote new user to database");
    //         res.redirect("/signin");
    //       });
    //     }
    //   }
    // });
  });


};
