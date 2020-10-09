//Variables
require("dotenv").config();
//Requiring MySQL
const mysql = require("mysql");

//Setting up connection on Heroku or locally
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    connection =
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASS,
        database: "pizzas_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
//Export to use with ORM.
module.exports = connection;