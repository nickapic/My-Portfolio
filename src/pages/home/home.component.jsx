import React, { Component } from "react";
import HeroSection from "../../components/hero-section.component";
import "./home.style.scss";
import Cards from "../../components/cards.component";
import About from "../../components/about.component";
import ContactForm from "../../components/contact-form.component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      home: {
        title: "Hello, I am Aniket Chauhan",
        subTitle: "Full Stack Developer and a Penetration Tester",
      },
    };
  }
  render() {
    return (
      <div className="home-page">
        <HeroSection
          maintext={this.state.home.title}
          subtext={this.state.home.subTitle}
        />
        <div id="projects">
          <Cards />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div className="contact-me">
          <ContactForm />
        </div>
      </div>
    );
  }
}
