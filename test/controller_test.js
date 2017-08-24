"use strict";
var should = require("chai").should();

//trying to get the controllers to work with their functions
// var express = require("express");
// var app = express();
//getting all the controller files
// var controllers = require("../controllers");
//getting just the landing page
var controllers = require('../controllers/landing_controller.js');


//viewing the code in the controller file
console.log(controllers.toString());

// NOTE: comment out line 3 to 14 and then run "mocha controller_test.js"
// to run tests for the code below:

const titleize = ((str) => {
  return str.split(" ")
            .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
            .join(" ");
});

titleize("mr jones");

describe("titleize", function(){
  it("should change first letters to uppercase", function(){
    titleize("mr jones").should.equal("Mr Jones");
  });

});
