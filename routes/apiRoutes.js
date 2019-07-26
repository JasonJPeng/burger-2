// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
   // GET route for getting all of the posts
  app.get("/", function(req, res) {    
    console.log("==========",res)
    db.Burger.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/order", function(req, res) {    
    db.Burger.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/devour/:id", function(req, res) {    
    db.Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
      ).then(function(dbPost) {
      res.json(dbPost);
    });
  });


}