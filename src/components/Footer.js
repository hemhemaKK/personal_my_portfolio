import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Send data to your SMTP backend
    fetch("https://smtp-mail-xcpz.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormStatus(data.message);
        form.reset();
        setTimeout(() => setFormStatus(""), 3000);
      })
      .catch((err) => {
        setFormStatus("Failed to send message. Please try again.");
        console.error(err);
      });
  };

  return (
    <footer>
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Me</h3>
          <p>
            <FaEnvelope /> &nbsp;
            <a href="mailto:hemavathikrishnan2627@gmail.com">
              hemavathikrishnan2627@gmail.com
            </a>
          </p>
          <div className="social-icons">
            <a href="https://github.com/hemhemaKK" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hemavathi-k-a8475924b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.hackerrank.com/profile/hemavathikrishn1" target="_blank" rel="noreferrer"><FaHackerrank /></a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
          <center><h3>Hemavathi K</h3></center>
          <p>Aspiring Full-Stack Developer | Passionate About Web Development & Clean Code</p>
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

        {/* Contact Form */}
        <div className="footer-section">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
          {formStatus && (
            <p style={{ marginTop: "10px", color: "#00f7ff" }}>{formStatus}</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Hemavathi K. All Rights Reserved.
      </div>
    </footer>
  );
}
