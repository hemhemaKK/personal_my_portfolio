import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { ReactTyped } from "react-typed"; 
import AboutMe from "./About";
import Showcase from "./Certifications";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleResumeDownload = () => {
    const fileUrl = "/Hemavathi-K.pdf";
    window.open(fileUrl, "_blank");

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // --- ScrollSpy ---
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // --- Prevent body scroll and blur when menu open ---
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // --- Close menu if clicked outside ---
  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".hamburger");
      if (menuOpen && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="page-wrapper">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/assets/port.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blur overlay */}
      <div className={`blur-overlay ${menuOpen ? "active" : ""}`}></div>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Navbar */}
        <nav className="Navbar">
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a 
                  href="#home" 
                  className={activeSection === "home" ? "active-nav" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === "about" ? "active-nav" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={activeSection === "skills" ? "active-nav" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === "projects" ? "active-nav" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === "contact" ? "active-nav" : ""}
                  onClick={() => { handleContactClick(); setMenuOpen(false); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        {/* Overlay Text */}
        <div className="overlay">
          <h1>Hi, I’m <span style={{ color: "skyblue" }}>Hemavathi K</span></h1>
          <h2>Aspiring Software Developer</h2>

          <h3>
            <ReactTyped
              strings={[
                "Passionate about Development",
                "Full Stack Developer",
                "Future-Focused Software Engineer",
                "Lifelong Learner"
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1200}
              loop
            />
          </h3>

          <button onClick={handleResumeDownload}>Check on Resume</button>

          <div className="hero-social-buttons">
            <a href="https://www.linkedin.com/in/hemavathi-k-a8475924b" target="_blank" rel="noreferrer" className="social-btn linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hemhemaKK" target="_blank" rel="noreferrer" className="social-btn github">
              <FaGithub /> 
            </a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about"><AboutMe /></section>
      <section id="projects"><Projects /></section>
      <section id="showcase"><Showcase /></section>
      <Footer />
    </div>
  );
}
