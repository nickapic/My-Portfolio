import React from "react";
import "./about.style.scss";
export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text-box">
        <h1 className="about-me-title">About me</h1>
        <br />
        <p className="about-me-paragraph">
          My name is Aniket Chauhan. I study Bachelors information Systems and
          Cyber Security at Vilnius University Lithuania. I have been always
          very intrested in the field of Ethical hacking and Web development i
          have been self studying these for the past few years and trying to
          solve problems and ctfs in sites like TryHackMe and HackTheBox.
          <br />
          <br />I have experience in the technologies Javascript, Html, Css,
          Node Js, React, C# and I also have experience in the design field. My
          main goal is to gain more and more experience in front end development
          and then move on to full stack development i am very enthusiastic
          about learning new technologies and make amazing websites come to
          life.
        </p>
      </div>
      <div className="image-box">
        <img
          src="https://i.ibb.co/2vpLzFQ/christopher-gower-m-HRf-Lhg-ABo-unsplash-1-min.jpg"
          alt=""
          className="image"
        />
      </div>
    </div>
  );
}
