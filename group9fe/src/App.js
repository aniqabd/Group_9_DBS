
 

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
