import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        Portfolio
      </div>
    </Router>
  );
};

export default App;
