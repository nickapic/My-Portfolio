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
          githubUrl: "https://github.com/nickapic/TheDivision2Tracker",
          hostedUrl: "https://ancient-springs-87914.herokuapp.com/"
        },
        {
          title: "ABCofIR",
          id: 2,
          info:
            "A blog website for stuff related to the subject of International Relations managed by students who study that field",
          stack: "Gatsby.js , React Spring",
          githubUrl: "https://github.com/nickapic/ABCofIR-Blog-Wbsite",
          hostedUrl: "https://epic-joliot-a6a354.netlify.com/"
        },
        {
          title: "Project Never Pass",
          id: 3,
          info:
            "A Desktop Application which help you manage your passwords in a very secure way with text encryption,salting and file encryption methodologies implemented",
          stack: "  C#",
          githubUrl: "https://github.com/nickapic/ProjectNeverPassSolution",
          hostedUrl: "https://github.com/nickapic/ProjectNeverPassSolution"
        },
        {
          title: "HackerNews Resdesigned",
          id: 4,
          info:
            "A  website to get latest news articles/posts related to technology and hacking from all around the web using the Hackernews API.",
          stack: "React",
          githubUrl: "https://github.com/nickapic/Hacker-News-Redisgn",
          hostedUrl: "https://stoic-meitner-ecd069.netlify.com/"
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
          <div className="project-display-card">
            {this.state.projects.map(({ id, ...otherProps }) => (
              <Card key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
