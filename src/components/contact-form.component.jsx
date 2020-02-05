import React from "react";
import "./contact-form.style.scss";
export default function ContactForm() {
  return (
    <div className="contact-form" id="form">
      <div className="text-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-paragraph">
          <br />
          Are you looking for a professional, communicative and punctual
          software engineer with FrontEnd web development skills? <br />
          <br />
          Or do you have an application you are interested in developing, a
          problem that needs solving or a project that needs rescuing, feel free
          to drop a message I would love to help you with it or send me a email.
          <br />
          <br />
          Email: aniket6401@gmail.com
        </p>
      </div>

      <form name="form" method="post" netlify className="form">
        <label htmlFor="fname" className="label">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your First Name Here"
          className="input-section"
        />

        <label htmlFor="lname" className="label">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your Last Name Here"
          className="input-section"
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email Here"
          className="input-section"
          required
        />
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <textarea
          name="subject"
          className="input-section"
          id="subject"
          cols="70"
          rows="10"
          required
          res
        ></textarea>
        <input type="submit" id="submit" value="submit" />
      </form>
    </div>
  );
}
