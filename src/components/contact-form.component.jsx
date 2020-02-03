import React from "react";
import "./contact-form.style.scss";
export default function ContactForm() {
  return (
    <div className="contact-form">
      <div className="text-content">
        <h1 className="contact-title">Contact Me</h1>
        <p>
          If you have any inquiries or just wanna chat feel free to message me
          on here.
        </p>
      </div>

      <form action="POST" data-netlify="true" className="contact-form-form">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" className="fname" />

        <label htmlFor="lname">Last Name</label>
        <input type="text" className="lastname" id="lname" />

        <label htmlFor="email">Email</label>
        <input type="text" className="email" id="email" />
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your inquiry here"
        ></textarea>
        <label htmlFor="submit"></label>
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
}
