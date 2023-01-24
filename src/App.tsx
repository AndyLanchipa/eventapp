import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import { EventCard } from "./Components/EventCard";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";
import { SignUp } from "./Pages/SignIn";
import { User } from "./Types/User";
import { AddEvents } from "./Pages/AddEvents";

function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <NavBar
      user={user}
      onSignOut={() => setUser(null)}
      onTitleClick={(user) => setUser(user)}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignUp onSubmit={setUser} />} />
        <Route path="/addEvents" element={<AddEvents user={user} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </NavBar>
  );
}

export default App;
