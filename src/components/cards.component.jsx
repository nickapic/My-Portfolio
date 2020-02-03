import React, { Component } from "react";
import "./card.style.scss";
import Card from "./card-info.component";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "The Division 2 Stat Tracker",
          id: 1,
          info:
            "An application to track your in game stats for the game The Division 2 to track your progress on the go much easily.",
          stack: "Vue, Express, Node Js",
          image: "https://i.ibb.co/g93WFpM/division2.png",
          githubUrl: "https://github.com/nickapic/TheDivision2Tracker",
          hostedUrl: "https://ancient-springs-87914.herokuapp.com/"
        },
        {
          title: "ABCofIR",
          id: 2,
          info:
            "A blog website for stuff related to the subject of International Relations managed by students who study that field",
          stack: "Gatsby.js , React Spring",
          image: "https://i.ibb.co/QDc4SCV/pic1.png",
          githubUrl: "https://github.com/nickapic/ABCofIR-Blog-Wbsite",
          hostedUrl: "https://epic-joliot-a6a354.netlify.com/"
        },
        {
          title: "Josiah Portfolio",
          id: 3,
          info:
            "A blog website for stuff related to the subject of International Relations managed by students who study that field",
          stack: "Gatsby.js , React Spring",
          image: "https://i.ibb.co/g93WFpM/division2.png",
          githubUrl: "https://github.com/nickapic/ABCofIR-Blog-Wbsite",
          hostedUrl: "https://epic-joliot-a6a354.netlify.com/"
        },
        {
          title: "HackerNews Resdesigned",
          id: 3,
          info:
            "A  website to get latest news articles/posts related to technology and hacking from all around the web using the Hackernews API.",
          stack: "React",
          image: "https://i.ibb.co/g93WFpM/division2.png",
          githubUrl: "https://github.com/nickapic/ABCofIR-Blog-Wbsite",
          hostedUrl: "https://epic-joliot-a6a354.netlify.com/"
        }
      ]
    };
  }
  componentDidMount() {
    document.body.className += " js-loading";
    // Listen for when everything has loaded
    window.addEventListener("load", showPage, false);

    function showPage() {
      // Remove the "js-paused" class
      document.body.className = document.body.className.replace(
        "js-loading",
        ""
      );
    }
  }
  render() {
    return (
      <div className="maincontainer">
        <h1 className="heading">Work</h1>
        <div className="container">
          {this.state.projects.map(({ id, ...otherProps }) => (
            <div className="project-display-card">
              <Card key={id} {...otherProps} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
