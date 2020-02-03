import React from "react";
import "./hero-section.style.scss";
export default function HeroSection({ maintext, subtext }) {
  return (
    <div className="hero-section">
      <h1 className="maintext animate-pop-in">{maintext}</h1>
      <span className="subtext animate-pop-in">{subtext}</span>
    </div>
  );
}
