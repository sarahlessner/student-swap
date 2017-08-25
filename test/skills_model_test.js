
var expect = require("chai").expect;
var Skill  = require("../models/skills.js");

//object like my users/skills model object
var testSkill = {
	skill_name: "skill"
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