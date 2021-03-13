const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");

const app = express();

const PORT = process.env.PORT || 3001;

var corsOptions = {
  origin: "http://localhost:3002",
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// Simple response
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

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

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'admin' to roles collection");
      });
    }
  });
}

// Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
