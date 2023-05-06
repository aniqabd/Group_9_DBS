
 

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import CreateNewClaim from "./Pages/Transactions/CreateNewClaim";


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/create-new-claim-record" element={<CreateNewClaim />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
