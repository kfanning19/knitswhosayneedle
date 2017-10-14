// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 3000;
// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("./public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes.js")(app);


app.listen(port, function() {
  console.log("App running on port 3000!");
});