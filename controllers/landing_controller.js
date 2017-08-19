const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

const router = express.Router();

router.get("/", function(req, res) {
  var hbsObject = {};
    res.render("index", hbsObject);
});

router.get("/signin", function(req, res) {


  db.Skill.findAll ({}).then(function(data) {

    var allskills = {
      skills: data
    };
    console.log(allskills);

  // for (i=0; i<data.length; i++) {
  //   allskills.push(data[i].dataValues.skill_name)
  // }

  // console.log(allskills);
    // var allskills = {
    //   skills: data.Skill.dataValues.skill_name
    // };
    // console.log(allskills);

//TALI DOES THIS:

  // Find all skils
  // Get the skill list out of there and run it through
  // the signin handlebar like so:

  // var hbsObject = {};
    res.render("signin", allskills);

      });
});


router.get("/homepage", function(req, res) {
    
    db.User.findOne({
      where: {
      	id: 1
      }
    }).then(function(dbUser) {
    	console.log(dbUser);
/*    	
	  var hbsObject = {
	  	name: db.User.name,
	  	userimg: "/img/dp-placeholder.gif"
	  };
*/
		var hbsObject = {
			results: dbUser
		}
	  res.render("homepage", hbsObject);
    });


	//actual user info from db will populate name
});



module.exports = router;
