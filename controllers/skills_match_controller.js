const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));
//var displayMatch = require("../assets/js/matchDisplay.js");

module.exports = function(app) {

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
                // var skillwanted = paymentfound[k].SkillId;

                db.Wanted.findAll({
                  where: {
                    OfferedId: paymentfound[k].id,
                    SkillId: myCurrentOffer
                  },
                  include: [
                  { 
                    model: db.User
                  },
                  {
                    model: db.Skill,
                    where: {
                      id: myCurrentOffer
                  },
                  //   model: db.Skill,
                  //   where: {
                  //     id: paymentfound[k].OfferedId.SkillId
                  // }
                  
                  }]
                }).then(function(matchfound){
                  // var matchFound = matchfound;
                  // for (var l = 0; l < matchfound.length; l++) {
                  //   db.Offered.findAll({
                  //     where: {
                  //       id: matchfound[l].OfferedId
                  //     }
                  //   }).then(function(offermatchfound) {
                  //     for (var m = 0; m < offermatchfound.length; m++) {
                  //       db.Skill.findAll({
                  //         where: {
                  //           id: offermatchfound[m].SkillId
                  //         }
                  //       }).then(function(finalobjectfound){
                  //         res.json(finalobjectfound);
                  //       });
                  //     }
                  //   });
                  // }
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

  app.get("/homepage/perfectmatchoffer/:OfferedId", function(req, res) {
    // console.log("get route is happening");
    db.Offered.findAll({
      where: {
        id: req.params.OfferedId
      }
    }).then(function(offerfound){
      // console.log("offerfound", offerfound);
      db.Skill.findAll({
        where: {
          id: offerfound[0].SkillId
        }
      }).then(function(skillofferedfound){
        res.json(skillofferedfound);
      })
    });
  });

//end of module.export(app)
};


