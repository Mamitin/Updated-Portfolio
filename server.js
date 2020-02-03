var express = require ("express");
var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static("./app/public"));

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("listening ib port " + PORT);
});