const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser");
const db = require(path.join(__dirname,".." ,"models"));


//app.post to create user object from google authentication will live in this file

//app.get to pass user object to landing controller /homepage route

//may also pass user object for name of match

//app.get 