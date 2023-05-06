const express = require("express"); //import express
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// token
const jwt = require("jsonwebtoken");

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
app.listen(5001, () => {
  console.log("Connected to port 5001");
});

// Create endpoint for user authentication
app.post("/authenticate", (req, res) => {
  const { EmployeeId, Password } = req.body;

  // Validate user credentials against database
  const sql = `SELECT * FROM Employee WHERE EmployeeId = '${EmployeeId}' AND Password = '${Password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      // User is authenticated
      const payload = { EmployeeId: EmployeeId };
      const secret = "mySecretKey";
      const token = jwt.sign(payload, secret);
      res.json({ EmployeeId: EmployeeId, token: token });
    } else {
      res.json({ message: "unsucessful login" });
    }
  });
});

// Get all claims by EmployeeId
app.get(`/getAllClaims`, (req, res) => {
  const EmployeeId = req.params.EmployeeId;
  const hardCode = [{
    EmployeeId: EmployeeId,
    Status: "Pending",
    ProjectID: 10001,
    ClaimID: 11147,
    CurrencyID: "SGD",
  }];
  res.json(hardCode)
});