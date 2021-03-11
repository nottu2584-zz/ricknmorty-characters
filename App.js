// App.js

import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT | 3001;

app.use(express.json());
// app.use("/", authRouter);

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
        page: req.params.page
      },
    })
    .then((response) => {
      res.json(response.data);
    });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
