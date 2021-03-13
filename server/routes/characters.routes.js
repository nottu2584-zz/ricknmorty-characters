const axios = require("axios");

module.exports = function (app) {
  // Get characters
  app.get("/api/character", (req, res) => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((response) => {
      res.json(response.data);
    });
  });

  // Get characters page
  app.get("/api/character/:page", (req, res) => {
    axios
      .get(`https://rickandmortyapi.com/api/character`, {
        params: {
          page: req.params.page,
        },
      })
      .then((response) => {
        res.json(response.data);
      });
  });
};
