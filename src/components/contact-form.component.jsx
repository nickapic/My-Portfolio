import React from "react";
import "./contact-form.style.scss";
export default function ContactForm() {
  return (
    <div className="contact-form" id="form">
      <div className="text-content">
        <h1 className="contact-title">Contact Me</h1>
        <p>
          If you have any inquiries or just wanna chat feel free to message me
          on here.
        </p>
      </div>

      <form action="POST" data-netlify="true" className="form">
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
