
var expect = require("chai").expect;
var Skill  = require("../models/users.js");

// console.log(Skill().skill_name);
var testUser = {
	name: "skill",
	email: "email@email.com",
	photo: "www.mypicture.com"
}

describe("skill", function() {
  
  it("should have a skill name", function(){
  	expect(testSkill.skill_name).to.equal("skill");

  });

  it("should be a string", function(){
  	expect(typeof testSkill.skill_name).to.equal("string");
  });

  it("should not be null", function(){
  	expect(testSkill.skill_name).to.not.equal(null);
  });

  it("to be a type of function", function() {
  	
  	expect(typeof Skill).to.equal("function");
  });

});