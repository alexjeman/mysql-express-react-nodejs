const mysql = require("mysql");
const config = require("config");
const db = config.get("mysqlURI");

const connection = mysql.createPool(db)

connection.on("error", err => {
    console.log("MySQL error: " + err.toString());
});

module.exports = connection;
