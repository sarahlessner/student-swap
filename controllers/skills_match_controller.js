const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  var countdown;// = 100;
  var running;// = true;
  resetTimer();

  app.get("/homepage/perfectmatch/:UserId", function(req, res) {
    var data = [];
    resetTimer();

    // console.log(req);
    db.Offered.findAll({
      where: {
        UserId: req.params.UserId
      }
    }).then(function(useroffers) {
      // console.log("req body skillid", req.body.SkillId);
      resetTimer();

      console.log("#i: " + useroffers.length);
      for (var i = 0; i < useroffers.length; i++) {
        console.log(i);

        var myCurrentOffer = useroffers[i].SkillId;
        db.Wanted.findAll({
          where: {
            OfferedId: useroffers[i].id
          }
        }).then(function(paymentwanted){

          resetTimer();

           // console.log("payment wanted"+i, paymentwanted);
          console.log("#j: " + paymentwanted.length);
          for (var j = 0; j < paymentwanted.length; j++) {
            console.log(j);

            db.Offered.findAll({
              where: {
                SkillId: paymentwanted[j].SkillId
              }
            }).then(function(paymentfound){

              resetTimer();

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

                  resetTimer();

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

                      resetTimer();

                      //console.log(offermatchfound);
                        db.Skill.findOne({
                          where: {
                            id: offermatchfound.SkillId
                          }
                        }).then(function(finalobjectfound){

                          resetTimer();

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
    //setTimeout(function(){ res.json(data); }, 5000);
    setInterval(function() {
      if (!running)
        return;
      countdown -= 1;
      if(countdown % 10 === 0)
        console.log(countdown);
      if(countdown <= 0) {
        res.json(data);
        running = false;

      }
    }, 10);
  });


  function resetTimer() {
    countdown = 100;
    running = true;
  };

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


