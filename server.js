var express = require ("express");
var app = express();
var cors = require("cors");
// var nodemailer = require("nodemiler");

var PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("./app/public"));

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("listening on port " + PORT);
});