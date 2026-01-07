import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "./styles.css";

const Contact = () => {
  return (
    <>
    <div className="head">
      <Link to="/">Main</Link> 
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <br></br>
    </div>
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Feel free to contact us anytime!
      </p>

      <div className="contact-container">
        {/* Profile Card */}
        <div className="contact-card profile-card">
          <img
            src=""
            alt="Profile"
            className="profile-img"
          />
          <h2>Gowtham</h2>
          <p className="role">Computer Science Student</p>
        </div>

        {/* Contact Info */}
        <div className="contact-card info-card">
          <h2>Contact Information</h2>

          <div className="info-item">
            <span>📧</span>
            <p>gowthamy@gmail.com</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 9347988988</p>
          </div>

          <div className="info-item">
            <span>🆔</span>
            <p>ID: ECE2025</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p> vizag, andhrpradesh, India</p>
          </div>
        </div>

        {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;