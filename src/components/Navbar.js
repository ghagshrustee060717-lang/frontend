import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, role } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">EcoAware 🌱</Link>

      <div className="nav-buttons">
        <Link to="/dashboard" className="nav-btn">Home</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/register" className="nav-btn">Register</Link>
            <Link to="/login" className="nav-btn">Login</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="nav-btn logout-btn">Logout</button>
        )}
        {isLoggedIn && role === 'user' && (
          <Link to="/calculator" className="nav-btn">Calculator</Link>
        )}
        <Link to="/challenges" className="nav-btn">Challenges</Link>
        <Link to="/CleanupDrive" className="nav-btn">CleanupDrive</Link>
      </div>

    </nav>
  );
}

export default Navbar;