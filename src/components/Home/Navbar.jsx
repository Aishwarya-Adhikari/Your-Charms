import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Your Charms</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/explore-items">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li className="login-btn">
          <Link to="/register">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
