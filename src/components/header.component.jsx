import React from "react";
import "./header.style.scss";
const Header = props => {
  return (
    <header className="header">
      <h1 className="logo-box animate-pop-in">
        <a href="/">Nickapic</a>
      </h1>
      <div className="nav-items animate-pop-in">
        <a href="#about" className="nav-item">
          About Me
        </a>
        <a href="#form" className="nav-item">
          Contact Me
        </a>
      </div>
    </header>
  );
};
export default Header;
