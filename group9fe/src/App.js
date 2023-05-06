
 

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home"


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
