const express = require('express');

const app = express();

const index = require('./routes/index');
app.use("/", index);

app.listen(process.env.PORT, () => console.log("My Exhibition project is running"));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});