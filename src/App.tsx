import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import { EventCard } from "./Components/EventCard";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";

function App() {
  return (
    <NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </Router>
    </NavBar>
  );
}

export default App;
