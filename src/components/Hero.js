import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import AboutMe from "./About";
import Showcase from "./Certifications";
import Projects from "./Projects";
import Footer from "./Footer";


export default function Hero() {
  const handleResumeDownload = () => {
    const fileUrl = "/Hemavathi-K.pdf";

    // Open PDF in new tab
    window.open(fileUrl, "_blank");

    // Trigger automatic download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "HemavathiK_Resume.pdf"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const to = "hemavathikrishnan2627@gmail.com"; // your email
    const subject = encodeURIComponent("Welcome!");
    const body = encodeURIComponent(
      "Hello Hemavathi,\n\nThank you for visiting your portfolio! I’m delighted to connect with you and explore your projects, certificates, and achievements.\n\nWarm regards,\n[Your Name]"
    );

    // Gmail URL with pre-filled "To", subject, and body
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };


  return (
    <>
      <section id="home" className="hero">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/port.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        <nav className="Navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>

          </ul>
          <ul>
            <li><a href="https://github.com/hemhemaKK" target="_blank"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/hemavathi-k-a8475924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a></li>
            <li><a href="https://www.hackerrank.com/profile/hemavathikrishn1" target="_blank"><FaHackerrank /></a></li>
          </ul>
        </nav>

        {/* Content Overlay */}
        <img
          src="/assets/profile3.png"
          alt="Profile"
          className="profile-img"
        />
        <div className="overlay">

          <h1>Hello, I'm<span><font color="skyblue"> Hemavathi K</font></span></h1>
          <h3>MCA Graduate | Aspiring Full-Stack Developer | <br />Future-Focused Software Developer |
            Passionate About Web Development, Clean Code & Real-World Problem Solving</h3>
          <button onClick={handleResumeDownload}>Check on Resume</button>
        </div>

        <AboutMe />
        <Showcase />
        <Projects/>
        <Footer/>
      </section>
    </>
  );
}
