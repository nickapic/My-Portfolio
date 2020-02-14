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
        <a
          href="https://drive.google.com/file/d/1UbBAwjLvlEnYK1ozTyE4D-I4vxrHdicS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item h"
          sbgaksgmakmg
        >
          Resume
        </a>
      </div>
    </header>
  );
};
export default Header;
