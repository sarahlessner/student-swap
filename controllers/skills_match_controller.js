const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {

  app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    var data = [];

    // console.log(req);
    //look up the current users offers
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
        //find all in wanted database that user is willing to exchange per offer

        db.Wanted.findAll({
          where: {
            OfferedId: useroffers[i].id
          }
        }).then(function(paymentwanted){

           // console.log("payment wanted"+i, paymentwanted);
          console.log("#j: " + paymentwanted.length);
          for (var j = 0; j < paymentwanted.length; j++) {
            console.log(j);
            //look up the things the user wants in in exchange for their offer
            // and get results for who is offering what they want
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
                //of the users who are offering what I want, look up what they want in return
                //include only results with a skill id matching my offer to find perfect match
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
                  console.log("#l: " + matchfound.length);
                  //loop through each of my matches
                  for (var l = 0; l < matchfound.length; l++) {
                    console.log(l);
                    //array to store match/skill data per offer match
                    var matchData = [];
                    //console.log("matchfound", matchfound[l]);
                    matchData.push(matchfound[l]);
                    //lookup offerid of perfect match
                    db.Offered.findOne({
                      where: {
                        id: matchfound[l].OfferedId
                      }
                    }).then(function(offermatchfound) {
                      //lookup skill by id associated with offer to get the 
                      //skill info the user is offering for your offer
                      //console.log(offermatchfound);
                        db.Skill.findOne({
                          where: {
                            id: offermatchfound.SkillId
                          }
                        }).then(function(finalobjectfound){
                          //push skill object to its match
                          matchData.push(finalobjectfound);
                          //push match data and skill offered to main data array
                          //this will be pushed to match_display.js in res.json below
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
    //sending data on a short delay to ensure queries all run
    //TODO: THIS PROMISE.ALL() STUFF MAKES ME WANT TO DIE PLEASE SEND HELP
    //I know it's the better solution sorry about it
    setTimeout(function(){ res.json(data); }, 5000);  
  });

  //function for offer match - find people offering what you want

  app.get("/homepage/offermatch/:UserId", function(req, res) {
    // console.log("get route is happening");
    //find all the things I want
    offerMatchArr = [];
    db.Wanted.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(wanted){
      //find out who is offering what I want
        wanted.forEach(function(skillwanted) {
          var skillWantedArr = [];
        console.log("skillwanted", skillwanted);
          db.Offered.findAll({
            where: {
            SkillId: skillwanted.SkillId
            },
            include: [{
              model: db.User
            },
            {
              model: db.Skill,
              where: {
                id: skillwanted.SkillId
            }
            }]
          }).then(function(offermatch){
            offermatch.forEach(function(offer){
              skillWantedArr.push(offer);
            })
            offerMatchArr.push(skillWantedArr);

          });
      });
    setTimeout(function(){ res.json(offerMatchArr); }, 5000);    });
  });

  app.get("/alloffersbyskill", function(req, res){
    offersBySkillArr = [];
    db.Skill.findAll({})
    .then(function(allskills){
      // console.log(allskills);
      // res.json(allskills);
        allskills.forEach(function(skill){
          // console.log(skill);
          offerArr = [];
          db.Offered.findAll({
            where: {
              SkillId: skill.id
            },
            include: [{model: db.User}, {model: db.Skill}]
          }).then(function(offeringskill){
            console.log("offering", offeringskill);
            offersBySkillArr.push(offeringskill);

          });
        });
    });
        setTimeout(function(){ res.json(offersBySkillArr); }, 5000);

  });

//end of module.export(app)
};


