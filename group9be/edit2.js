const express = require("express"); //import express
const cors = require("cors"); 
const app = express();
app.use(express.json());
app.use(cors());

// token
const jwt = require('jsonwebtoken');


// connect to db
const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  Password: "",
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


//edit claims

const sql = `SELECT * FROM ProjectExpenseClaims`
db.query(sql, (err, result) => {
    if (err) {
        throw err;
    }
    const claim = edit.find((claim) => claim.id === req.params.id);
    console.log(`Claims editted`)
});
