// server/index.js

const { default: axios } = require("axios");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  axios.get(`https://rickandmortyapi.com/api/character`).then((response) => {
    res.json(response.data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
