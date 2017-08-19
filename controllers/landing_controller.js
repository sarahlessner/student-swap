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
