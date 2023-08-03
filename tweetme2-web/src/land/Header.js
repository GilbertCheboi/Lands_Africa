import React, { useState} from "react";
import "./Header.css";

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };


  return (
    <nav>
      <div className="logo">Lands In Africa</div>
      <div className={`nav-items ${isActive ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/About/">About</a></li>
        <li><a href="/login/">Sell Land</a></li>
        <li><a href="/Contact/">Contact</a></li>
        <li><a href="/login/">Login</a></li>
        <li><a href="/register/">Register</a></li>
      </div>
      <div className={`menu-icon ${isActive ? 'hide' : ''}`} onClick={toggleMenu}>
        <span className="fas fa-bars"></span>
      </div>
      
    </nav>
  );
};

export default Header;