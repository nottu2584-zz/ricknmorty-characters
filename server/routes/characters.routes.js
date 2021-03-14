const axios = require("axios");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  // Get characters
  app.get(
    "/api/character",
    [
      authJwt.verifyToken,
      (req, res) => {
        axios
          .get(`https://rickandmortyapi.com/api/character`)
          .then((response) => {
            res.json(response.data);
          });
      },
    ],
    controller.userAccess
  );

  // Get characters page
  app.get(
    "/api/character/:page",
    [
      authJwt.verifyToken,
      (req, res) => {
        axios
          .get(`https://rickandmortyapi.com/api/character`, {
            params: {
              page: req.params.page,
            },
          })
          .then((response) => {
            res.json(response.data);
          });
      },
    ],
    controller.userAccess
  );
};
