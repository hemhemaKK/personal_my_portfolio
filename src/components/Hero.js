import { useState } from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaBars, FaTimes } from "react-icons/fa";
import AboutMe from "./About";
import Showcase from "./Certifications";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    const fileUrl = "/Hemavathi-K.pdf";

    // Open PDF in new tab
    window.open(fileUrl, "_blank");

    // Trigger automatic download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "HemavathiK_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const to = "hemavathikrishnan2627@gmail.com";
    const subject = encodeURIComponent("Welcome!");
    const body = encodeURIComponent(
      "Hello Hemavathi,\n\nThank you for visiting your portfolio! I’m delighted to connect with you and explore your projects, certificates, and achievements.\n\nWarm regards,\n[Your Name]"
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className="page-wrapper">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/assets/port.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Background Video */}


        {/* Navbar */}
        <nav className="Navbar">
          <div className="logo">
            <h2>Hemavathi K</h2>
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => { handleContactClick(); setMenuOpen(false); }}>Contact</a></li>
            </ul>
          </div>

          <div className="hero-social-icons">
            <a href="https://github.com/hemhemaKK" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hemavathi-k-a8475924b" target="_blank"><FaLinkedin /></a>
            <a href="https://www.hackerrank.com/profile/hemavathikrishn1" target="_blank"><FaHackerrank /></a>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        {/* Profile Image */}
        <img src="/assets/profile.png" alt="Profile" className="profile-img" />

        {/* Overlay */}
        <div className="overlay">
          <h1>Hello, I'm <span style={{ color: "skyblue" }}>Hemavathi K</span></h1><br />
          <h3>
            MCA Graduate | Aspiring Full-Stack Developer | <br />
            Future-Focused Software Developer | Passionate About Web Development, Clean Code & Real-World Problem Solving
          </h3><br />
          <button onClick={handleResumeDownload}>Check on Resume</button>
        </div>
      </section>

      <section id="about"><AboutMe /></section>
      <section id="showcase"><Showcase /></section>
      <section id="projects"><Projects /></section>
      <Footer />
      </div>
    </>
  );
}
