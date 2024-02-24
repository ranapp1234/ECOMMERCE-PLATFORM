const mysql = require("mysql");
// import mysql from "mysql";
const express = require("express");
// import express from "express";
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/css", express.static("css"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "rana",
  password: "ratna3350@rana",
  database: "nodejs",
});

//  connect to the database
connection.connect(function (error) {
  if (error) throw error;
  else console.log("connected to the database successfully!");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

// by post method   we authenticate the application with the  databse
app.post("/", encoder, function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query(
    "select * from nodejs.loginuser where user_name = ? and user_pass = ?",
    [username, password],
    function (error, results, fields) {
      if (results.length > 0) {
        res.redirect("/index");
      } else {
        res.redirect("/");
      }
      res.end();
    });
});
// when  login is success
app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// set app port
app.listen(3000);
