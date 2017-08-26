const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {

//COMMENTED OUT WORKING ON GETTING PROMISE ALL SET UP INSTEAD OF TIMER
//CURRENT WORKING VERSION OF PERFECT MATCH LOGIC / OTHER MATCHES BELOW
  // app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    // var data = [];
    // console.log(req);
    // console.log(req.params.UserId);
    // //look up the current users offers
    
    // db.Offered.findAll({
    //   where: {
    //     UserId: req.params.UserId
    //   }
    // }).then(function(useroffers) {
    //   console.log("#i: " + useroffers.length);
    //   Promise.all(useroffers.map(offer =>
    //     db.Wanted.findAll({
    //       where: {
    //         OfferedId: offer.id
    //       }
    //     })
    //     )).then(paymentwanteds => {
    //       console.log(useroffers);
    //       console.log(paymentwanteds.length);
    //       console.log(paymentwanteds[0].length);
    //       console.log(paymentwanteds[0]);
          
    //       var wantedPromises = [];
    //       for(var i = 0; i < paymentwanteds.length; i++) {
    //         var newPromise = paymentwanteds[i].map(wanted =>
    //         db.Offered.findAll({
    //           where: {
    //             SkillId: wanted.SkillId
    //           }
    //         }));
    //         wantedPromises.push(newPromise);
    //       }

    //       Promise.all(wantedPromises).then(counteroffers => {
    //         console.log(counteroffers[0]);
    //       })
          
    //       Promise.all(paymentwanteds[0].map(wanted =>
    //         db.Offered.findAll({
    //           where: {
    //             SkillId: wanted.SkillId
    //           },
    //           include: [{ model: db.Skill }]

    //         })
    //         )).then(counteroffers => {
    //         console.log(counteroffers.length);
    //         console.log(counteroffers[1].length);
    //         console.log(counteroffers[1]);
    //       });
    //     });
       //WE LEFT OFF HERE TRYING TO MAKE PROMISES WE CANNOT KEEP 
        
/*
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
*/
    // });

    //sending data on a short delay to ensure queries all run
  //   setTimeout(function(){ res.json(data); }, 2000);  
  // });



  // OLD PERFECT MATCH GET - WORKS PERFECTLY BUT HAS A TIMER
  app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    var data = [];
    console.log("req.params", req.params);
    //look up the current users offers

    var myRootOffers = [];
    var myUserId = parseInt(req.params.UserId);

    db.Offered.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(useroffers) {
      console.log("#i: " + useroffers.length);
      // console.log("useroffers", useroffers);
      for (var i = 0; i < useroffers.length; i++) {
        console.log(i);

        var myCurrentOffer = useroffers[i].SkillId;
        // Add the skills offered to our records (with empty array for the wanteds)
        myRootOffers.push([useroffers[i].id,useroffers[i].SkillId,[]]);
        //find all in wanted database that user is willing to exchange per offer

        db.Wanted.findAll({
          where: {
            OfferedId: useroffers[i].id
          }
        }).then(function(paymentwanted){

           // console.log("payment wanted"+i, paymentwanted);
          console.log("#j: " + paymentwanted.length);
          //console.log("paymentwanted", paymentwanted);
          for (var j = 0; j < paymentwanted.length; j++) {
            // Add the skills wanted as payment for each offer to our records
            for(var rootOfferIdx = 0; rootOfferIdx < myRootOffers.length; rootOfferIdx++)
            {
              if(myRootOffers[rootOfferIdx][0] === paymentwanted[j].OfferedId)
                myRootOffers[rootOfferIdx][2].push(paymentwanted[j].SkillId);
            }

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
              // console.log("paymentfound", paymentfound);
              for (var k = 0; k < paymentfound.length; k++) {
                // var skillwanted = paymentfound[k].SkillId;
                console.log(k);

                if(paymentfound[k].UserId === myUserId)
                  continue;

                console.log("paymentfound[k].id", paymentfound[k].id);
                console.log("paymentfound[k].UserId", paymentfound[k].UserId);
                console.log("paymentfound[k].SkillId", paymentfound[k].SkillId);
                console.log("myRootOffers", myRootOffers);

                // Search our myRootOffers[?][2] arrays for wanted skills that
                //   match the paymentfound[k].SkillId
                for(var rootOfferIdx = 0; rootOfferIdx < myRootOffers.length; rootOfferIdx++)
                {
                  var myOfferId = myRootOffers[rootOfferIdx][0];
                  var myOfferSkill = myRootOffers[rootOfferIdx][1];
                  console.log("myOfferId: " + myOfferId + ", myOfferSkill: " + myOfferSkill);
                  for(var rootWantedIdx = 0; rootWantedIdx < myRootOffers[rootOfferIdx][2].length; rootWantedIdx++)
                  {
                    var myWanted = myRootOffers[rootOfferIdx][2][rootWantedIdx];

                    console.log("myOfferId: " + myOfferId + ", myOfferSkill: " + myOfferSkill + ", myWanted: " + myWanted);
                    if(paymentfound[k].SkillId === myWanted)
                    {
                      console.log("do db.Wanted.findAll: OfferId: " + paymentfound[k].id + ", SkillId: " + myOfferSkill);

                      // console.log("paymentfound[k].id", paymentfound[k].id);
                      //of the users who are offering what I want, look up what they want in return
                      //include only results with a skill id matching my offer to find perfect match
                      db.Wanted.findAll({
                        where: {
                          OfferedId: paymentfound[k].id,
                          SkillId: myOfferSkill
                        },
                        include: [
                        { 
                          model: db.User
                        },
                        {
                          model: db.Skill,
                          where: {
                            id: myOfferSkill
                        }
                        }]
                      }).then(function(matchfound){
                        //console.log("MATCH FOUND BITCHES", matchfound);
                        console.log("#l: " + matchfound.length);
                        // console.log("matchfound", matchfound);
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


                  }
                }

              }
            });
          }
        });
      } 
    });
    //sending data on a short delay to ensure queries all run
    setTimeout(function(){ res.json(data); }, 2000);  
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
      Promise.all(wanted.map(function(skillwanted) {
        return db.Offered.findAll({
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
        });
      })).then(function(values){
          res.json(values);
      });
    });
    // setTimeout(function(){ res.json(offerMatchArr); }, 5000);    });
  });

  app.get("/alloffersbyskill", function(req, res){
    // offersBySkillArr = [];
    db.Skill.findAll({})
    .then(function(allskills){
      // console.log(allskills);
      // res.json(allskills);

      var getskills = Promise.all(allskills.map(skill =>
        db.Offered.findAll({
          where: {
            SkillId: skill.id
          },
          include: [{model: db.User}, {model: db.Skill}]
        })
      )).then(values => {
        res.json(values.filter(value => !!value.length))
      });
      // console.log('temp', temp);

    });
        // setTimeout(function(){ res.json(offersBySkillArr); }, 5000);

  });

  

//end of module.export(app)
};


