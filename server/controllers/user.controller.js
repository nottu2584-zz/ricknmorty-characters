const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userAccess = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminAccess = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.addFavorite = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) return res.status(404).send({ message: "User Not found." });

    if (user.favorites && req.body.favorite) {
      User.find({
        username: req.body.username,
        favorites: { $not: {$elemMatch: req.body.favorite} },
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.favorites.push(req.body.favorite);
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Favorite was registered successfully!" });
        });
      });
    } else return res.status(404).send({ message: "Favorites Not found." });
  });
};

exports.removeFavorite = (req, res) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
};
