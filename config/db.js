const mysql = require("mysql");
const config = require("config");
const db = config.get("mysqlURI");

const connection = mysql.createConnection(db);
connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("MySQL connected.")
  }
})

module.exports = connection;
