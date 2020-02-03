var express = require("express");
var path = require("path");

var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.get("/portfolio", function() {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
});

module.exports = app;