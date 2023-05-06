const express = require("express"); //import express
const cors = require("cors"); 
const app = express();
app.use(express.json());
app.use(cors());

// connect to db
const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ExpenseClaimsData",
});

// check db connection
db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected");
});

// check server connection
app.listen(5000, () => {
  console.log("Connected to port 5000");
});