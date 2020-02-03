import React from "react";
import "./header.style.scss";
const Header = props => {
  return (
    <div className="header">
      <h1 className="logo-box animate-pop-in">
        <a to="/">Nickapic</a>
      </h1>
      <div className="nav-items animate-pop-in">
        <a to=".about-container" className="nav-item">
          {" "}
          About Me
        </a>
        <a to=".contact_me-container" className="nav-item">
          {" "}
          Contact Me
        </a>
      </div>
    </div>
  );
};
export default Header;