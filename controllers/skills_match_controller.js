const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));
//var displayMatch = require("../assets/js/matchDisplay.js");

module.exports = function(app) {

  //TODO: figure out where UserId param ought to come from when full app is together
  app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    // console.log(req);
    db.Offered.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(useroffers) {
      // console.log("req body skillid", req.body.SkillId);
      for (var i = 0; i < useroffers.length; i++) {
        var myCurrentOffer = useroffers[i].SkillId;
        db.Wanted.findAll({
          where: {
            OfferedId: useroffers[i].id
          }
        }).then(function(paymentwanted){
           // console.log(paymentwanted);
          for (var j = 0; j < paymentwanted.length; j++) {
            db.Offered.findAll({
              where: {
                SkillId: paymentwanted[j].SkillId
              }
            }).then(function(paymentfound){
                  // console.log("payment found!", paymentfound);
              for (var k = 0; k < paymentfound.length; k++) {
                db.Wanted.findAll({
                  where: {
                    OfferedId: paymentfound[k].id,
                    SkillId: myCurrentOffer
                  },
                  include: [{model: db.User, where:{id: paymentfound[k].UserId}}]
                }).then(function(matchfound){
                  // console.log("MATCH FOUND BITCHES", matchfound);
                  res.json(matchfound);
                });
              }
            });
          }
        });
      }
    });
  });



//end of module.export(app)
};


