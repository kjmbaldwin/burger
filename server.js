//dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var mathodOverride = reqiure("method-override");

var PORT = process.env.PORT || 3000;

//express
var app = express();
app.use(express.static("public"));

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//css
app.use(express.static(__dirname + '/public'));


//listen for webserver
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
