import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">EcoAware 🌱</Link>

      <div className="nav-buttons">
        <Link to="/dashboard" className="nav-btn">Home</Link>
         <Link to="/register" className="nav-btn">Register</Link>
         <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/calculator" className="nav-btn">Calculator</Link>
        <Link to="/challenges" className="nav-btn">Challenges</Link>
        <Link to="/CleanupDrive" className="nav-btn">CleanupDrive</Link>
      </div>

    </nav>
  );
}

export default Navbar;