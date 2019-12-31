db = require("../models");

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    db.Products.findAll().then(function(response) {
      res.json(response);
    });
  });

  app.post("/api/products", function(req, res) {
    console.log(req.body);
    db.Products.batchUpdate({where:})
  });
};
