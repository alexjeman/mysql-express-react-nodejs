const express = require("express");
const connection = require("./config/db");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to home page" });
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/projects", require("./routes/api/projects"));

// Node connection
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;

app.listen(PORT, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${PORT} 
Server started.`);
});
