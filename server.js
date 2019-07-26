var express = require("express");
var exphbs = require("express-handlebars");
// var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);


// Import routes and give the server access to them.
// var routes = require("./controllers/burgerControl.js");
// app.use(routes);

//============================================================

  // Start our server so that it can begin listening to client requests.
  // app.listen(PORT, function() {
  //   // Log (server-side) when our server has started
  //   console.log("Server listening on: http://localhost:" + PORT);

    
  
  db.sequelize.sync({ force: false }).then(function() {
      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });

  });