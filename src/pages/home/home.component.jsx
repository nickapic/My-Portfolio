import React, { Component } from "react";
import HeroSection from "../../components/hero-section.component";
import { ReactComponent as DownArrow } from "../../assets/down.svg";
import "./home.style.scss";
import Cards from "../../components/cards.component";
import About from "../../components/about.component";
import ContactForm from "../../components/contact-form.component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      home: {
        title: "Hello, My name is Aniket Chauhan",
        subTitle:
          "I am a Front End Developer with experience and a eye for UI/UX"
      }
    };
  }
  render() {
    return (
      <div className="home-page">
        <HeroSection
          maintext={this.state.home.title}
          subtext={this.state.home.subTitle}
        />
        <a href="#projects">
          <DownArrow className="down-arrow" />
        </a>
        <div id="about-section">
          <About />
        </div>
        <div id="projects">
          <Cards />
        </div>
        <div className="contact-me">
          <ContactForm />
        </div>
      </div>
    );
  }
}
