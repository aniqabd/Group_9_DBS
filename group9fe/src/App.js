import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import CreateNewClaim from "./Pages/Transactions/CreateNewClaim";

import { Login } from "./Pages/Login/Login";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home"
import ClaimDetail from "./Pages/ClaimDetail/ClaimDetail";

function App() {
  // To change the state to default false later!!
  const [loginStatus, setLoginStatus] = useState(false);

  // To enable later!
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    } else { 
      setLoginStatus(false);
    }
  }, []);

  return (
    <div className="App">
      <Router>

        {loginStatus === false ? (
          <Login />
        ) : (
          <>
            <NavBar />
            <Routes>
                <Route path="/claimdetail" element={<ClaimDetail />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create-new-claim-record" element={<CreateNewClaim />}></Route>
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
