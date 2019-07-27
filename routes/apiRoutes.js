var express = require("express");
var router = express.Router();
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
   // GET route for getting all of the posts
  app.get("/", function(req, res) {    
    db.Burger.findAll({}).then(function(data) {
      res.render("index", { all: data });
      // res.json(data);
    });
  });

  app.post("/api/order", function(req, res) {    
    db.Burger.create({
      name: req.body.burger
    }).then(function(result) {
      // res.json(result);
      res.redirect("/")
    });
  });

  app.put("/api/devour/:id", function(req, res) {    
    db.Burger.update({
      devoured: true
    },
      {
        where: {
          id: req.params.id
        }
      }
      ).then(function(dbPost) {
      // res.json(dbPost);
      res.status(200).end()
    });
  });
}