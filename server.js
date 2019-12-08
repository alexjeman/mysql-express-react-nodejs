const express = require("express");
const connection = require("./config/db");

const app = express();


app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to home page'})
})

// Node connection
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;

app.listen(PORT, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${PORT} 
Server started.`);
});
