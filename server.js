var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");



var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

require("./routes/api-routes.js")(app);

app.use(express.static("public"));

app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");



db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT,
        function () {
            console.log("App listening on PORT " + PORT);
        });
});
