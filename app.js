const express = require('express');

const app = express();

var cors = require('cors')

const index = require('./routes/index');
app.use("/", index);

app.use(express.static("public"))

app.listen(process.env.PORT, () => console.log("My project is running"));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

// Seting up cors
app.use(cors({
  origin: true,
  credentials: true
}));