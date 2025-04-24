import React from "react";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Profile from "./routes/profile/Profile";
import Header from "./components/header/Header";
import Favorites from "./routes/favorites/Favorites";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
