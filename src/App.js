import React from "react";
import Homescreen from "./pages/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/home" element={<Homescreen/> } />
      </Routes>
    </Router>
  );
};

export default App;
