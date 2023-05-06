import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import CreateNewClaim from "./Pages/Transactions/CreateNewClaim";

import { Login } from "./Pages/Login/Login";
import React, { useState, useEffect } from "react";

function App() {
  // To change the state to default false later!!
  const [loginStatus, setLoginStatus] = useState(true);

  // To enable later!
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setLoginStatus(true);
  //   } else {
  //     setLoginStatus(false);
  //   }
  // }, []);

  return (
    <div className="App">
      <Router>
        {loginStatus === false ? (
          <Login />
        ) : (
          <>
            <NavBar />
            <Routes></Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
