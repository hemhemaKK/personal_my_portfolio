import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerStyle = {
    background: "#032c2cff",
    color: "#fff",
    padding: "40px 20px 20px 20px",
    fontFamily: "'Poppins', sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
  };

  const sectionStyle = {
    flex: "1 1 250px",
  };

  const h3Style = {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#00f7ff",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const socialStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
    flexWrap: "wrap",
  };

  const socialIconStyle = {
    color: "#fff",
    fontSize: "20px",
    transition: "color 0.3s, transform 0.3s",
  };

  const footerBottomStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "13px",
    color: "#ccc",
    borderTop: "1px solid #444",
    paddingTop: "15px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Contact */}
        <div style={sectionStyle}>
          <h3 style={h3Style}>Contact Me</h3>
          <p>
            <FaEnvelope /> &nbsp;
            <a href="mailto:yourmail@example.com" style={linkStyle}>hemavathikrishnan2627@gmail.com.com</a>
          </p>
          <div style={socialStyle}>
            <a href="https://github.com/hemhemaKK" target="_blank" rel="noreferrer" style={socialIconStyle}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hemavathi-k-a8475924b/" target="_blank" rel="noreferrer" style={socialIconStyle}><FaLinkedin /></a>
            <a href="https://www.hackerrank.com/profile/hemavathikrishn1" target="_blank" rel="noreferrer" style={socialIconStyle}><FaHackerrank /></a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" style={socialIconStyle}><FaFacebook /></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" style={socialIconStyle}><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={sectionStyle}>
          <h3 style={h3Style}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Home", "About", "Projects", "Contact"].map((item, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <a href={`#${item.toLowerCase()}`} style={linkStyle}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding */}
        <div style={sectionStyle}>
          <h3 style={h3Style}>Hemavathi K</h3>
          <p>Aspiring Full-Stack Developer | Passionate About Web Development & Clean Code</p>
        </div>
      </div>

      <div style={footerBottomStyle}>
        &copy; {new Date().getFullYear()} Hemavathi K. All Rights Reserved.
      </div>
    </footer>
  );
}
