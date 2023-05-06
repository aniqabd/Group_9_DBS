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


//insert claims

const sql = `SELECT * FROM ProjectExpenseClaims WHERE ClaimID = '${ClaimID}' AND EmployeeID = '${EmployeeID}'`;
db.query(sql. (err, result) => {
    if(err) {
        throw err;
    }
    const updateQuery = `UPDATE ProjectExpenseClaims
                      WHERE ProjectExpenseClaims.ClaimID == ProjectExpenseClaims.EmployeeID`;
}
    });