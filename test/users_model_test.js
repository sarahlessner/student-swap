
var expect = require("chai").expect;
var User  = require("../models/users.js");

//object like my users/skills model object
var testUser = {
	name: "name",
	email: "email@email.com"
}

describe("user", function() {
  
  it("should have a name", function(){
  	expect(testUser.name).to.equal("name");
  });

  it("should have the name as a string", function(){
  	expect(typeof testUser.name).to.equal("string");
  });

  it("should not permit null in the name field", function(){
  	expect(testUser.name).to.not.equal(null);
  });

  // it("should check for valid email format", function(){
  // 	expect(testUser.email).to.equal();
  // });

  it("should have an email", function(){
  	expect(testUser.email).to.equal("email@email.com");
  });

  it("should have the email as a string", function(){
  	expect(typeof testUser.email).to.equal("string");
  });

  it("should not permit null in the email field", function(){
  	expect(testUser.email).to.not.equal(null);
  });

  it("the model, should be a type of function", function() {
  	expect(typeof User).to.equal("function");
  });

});