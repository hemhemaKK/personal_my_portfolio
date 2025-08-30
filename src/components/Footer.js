import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Me</h3>
          <p>
            <FaEnvelope /> &nbsp;
            <a href="mailto:hemavathikrishnan2627@gmail.com">hemavathikrishnan2627@gmail.com</a>
          </p>
          <div className="social-icons">
            <a href="https://github.com/hemhemaKK" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hemavathi-k-a8475924b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.hackerrank.com/profile/hemavathikrishn1" target="_blank" rel="noreferrer"><FaHackerrank /></a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Home", "About", "Projects", "Contact"].map((item, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding */}
        <div className="footer-section">
          <h3>Hemavathi K</h3>
          <p>Aspiring Full-Stack Developer | Passionate About Web Development & Clean Code</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Hemavathi K. All Rights Reserved.
      </div>
    </footer>
  );
}
