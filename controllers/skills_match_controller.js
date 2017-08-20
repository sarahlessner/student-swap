const express = require("express");
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));

module.exports = function(app) {
  //all app.gets, post, etc need to live here


};

//get route - basic example below
//either will get every offer OR every offer per particular user id

  // app.get("/offers", function(req, res) {
  //   var query = {};
  //   if (req.query.author_id) {
  //     query.AuthorId = req.query.author_id;
  //   }
  //   db.Post.findAll({
  //     where: query
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

//app.get match - complex matching logic
//query all other databases from here

//need a destroy for users to remove skills offered
	//will also delete any skills wanted automatically
