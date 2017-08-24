const express = require("express");
const path = require("path");
const body = require("body-parser");
var db = require(path.join(__dirname, "..", "models"));
var SAVED_OFFER_ID;
var wanted_skill_ids;

module.exports = function(app) {

  app.get("/signin", function(req, res) {

    db.Skill.findAll({}).then(function(data) {

      var allskills = {
        skills: data
      };
      res.render("../views/signin", allskills);

    });
  });


  app.post("/newexchange", function(req, res) {

    var temp = req.body.offereds.offer;
    offered_skill_id = temp;
    console.log("Offered skill ids is " + temp);

    db.Offered.create({
      SkillId: parseInt(temp),
      UserId: parseInt(req.body.offereds.userid)

    }).then(function(offerskill) {
      // INSERT THE 2ND THINGY THAT CREATED THE WANTEDS
      console.log("added offered skill", offerskill);
      SAVED_OFFER_ID = offerskill.dataValues.id;
      console.log("WE CAPTURED THE ID OMG " + SAVED_OFFER_ID);


      var temp2 = req.body.wanteds.wantedskills;
      console.log("HEY HEY HEY " + SAVED_OFFER_ID);
      console.log("wanted skill ids are " + temp2);

      for (i = 0; i < temp2.length; i++) {
        db.Wanted.create({
          OfferedId: SAVED_OFFER_ID,
          UserId: req.body.wanteds.userid,
          SkillId: temp2[i]
        }).then(function() {
          // res.redirect("/");
          // console.log("added wanted skills");
        });
      }
      res.send({direction: "homepage"});
    });
  });
};
