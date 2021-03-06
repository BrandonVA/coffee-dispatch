// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

const car = {
  paint: "yellow",
  wheels: "two",
  seating: 4,
  topSpeed: 120,
};

module.exports = function (app) {
  app.get("/api/getData", function (req, res) {
    res.json(car);
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
    console.log(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};
