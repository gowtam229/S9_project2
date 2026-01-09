import { Link } from "react-router-dom"
import React from "react";
import "./Contact.css";
import profile from "/gpt.1.png"

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <img src={profile} alt="my oic" width="150" height="110" style={{borderRadius: "50%"}}/>
        <h1>📞 Contact Me</h1>
        <p>We’d love to hear from you! Fill out the form below.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message ✨</button>
        </form>

        <div className="contact-info">
          <p>📧 email: support@example.com</p>
          <p>📱 phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
