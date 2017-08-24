"use strict";

var expect = require("chai").expect;
var match = require("../assets/js/match_display.js");

describe("match", function() {
  it("to return true if the numbers do not match", function() {
    expect(4).to.equal(4);
  });

  it("to return true even if the types do not match", function() {
    expect(4).to.equal("4");
  });

});
