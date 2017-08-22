const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {

  app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    var data = [];

    // console.log(req);
    db.Offered.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(useroffers) {
      // console.log("req body skillid", req.body.SkillId);

      console.log("#i: " + useroffers.length);
      for (var i = 0; i < useroffers.length; i++) {
        console.log(i);

        var myCurrentOffer = useroffers[i].SkillId;
        db.Wanted.findAll({
          where: {
            OfferedId: useroffers[i].id
          }
        }).then(function(paymentwanted){

           // console.log("payment wanted"+i, paymentwanted);
          console.log("#j: " + paymentwanted.length);
          for (var j = 0; j < paymentwanted.length; j++) {
            console.log(j);

            db.Offered.findAll({
              where: {
                SkillId: paymentwanted[j].SkillId
              }
            }).then(function(paymentfound){

                  // console.log("payment found!", paymentfound);
              console.log("#k: " + paymentfound.length);
              for (var k = 0; k < paymentfound.length; k++) {
                // var skillwanted = paymentfound[k].SkillId;
                console.log(k);

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
                  }
                  }]
                }).then(function(matchfound){

                  //console.log("MATCH FOUND BITCHES", matchfound);
                  // data.push(matchfound);

                  console.log("#l: " + matchfound.length);
                  for (var l = 0; l < matchfound.length; l++) {
                    console.log(l);

                    var matchData = [];
                    //console.log("matchfound", matchfound[l]);
                    matchData.push(matchfound[l]);
                    db.Offered.findOne({
                      where: {
                        id: matchfound[l].OfferedId
                      }
                    }).then(function(offermatchfound) {
                      //console.log(offermatchfound);
                        db.Skill.findOne({
                          where: {
                            id: offermatchfound.SkillId
                          }
                        }).then(function(finalobjectfound){
                          matchData.push(finalobjectfound);
                          data.push(matchData);
                          
                          // console.log ("final object for skills", finalobjectfound);
                          // data.push(finalobjectfound);
                          // console.log(data);
                      
                          
                          
                           
                        });
                    });
                  }
                });
              }
            });
          }
        });
      } 

    });
    setTimeout(function(){ res.json(data); }, 1000);
    
  });

  // app.get("/homepage/perfectmatchoffer/:OfferedId", function(req, res) {
  //   // console.log("get route is happening");
  //   db.Offered.findAll({
  //     where: {
  //       id: req.params.OfferedId
  //     }
  //   }).then(function(offerfound){
  //     // console.log("offerfound", offerfound);

  //     db.Skill.findAll({
  //       where: {
  //         id: offerfound[0].SkillId
  //       }
  //     }).then(function(skillofferedfound){
  //       res.json(skillofferedfound);
  //     })
  //   });
  // });

//end of module.export(app)
};


