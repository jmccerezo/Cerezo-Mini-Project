import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./modules/Navbar/Navbar";
import Dashboard from "./modules/Dashboard/container/Dashboard";
import Scores from "./modules/Scores/container/Scores";
import Popular from "./modules/Popular/container/Popular";
import Contact from "./modules/Contact/container/Contact";
import About from "./modules/About/container/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
