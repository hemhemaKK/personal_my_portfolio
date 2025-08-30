import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython, FaJs } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiPostman } from "react-icons/si";

const projects = [
  {
    title: "Personal Finance P2P Payment System",
    description:
      `- A secure peer-to-peer payment platform designed for real-time transactions.
- Features: user authentication, Razorpay integration, dashboards, transaction history, and notifications.
- Demo Flow: 
   1. Start with user registration and login.
   2. Send a payment between two accounts.
   3. Show how dashboards and notifications update instantly.
- Tech Stack: React, Node.js, Firebase, Razorpay
    `,
    video: "/assets/payment.mp4", // 👈 use video instead of image
    liveLink: "https://financemanageentp2p.netlify.app/",
    githubLink: "https://github.com/hemhemaKK/personal-finance",
    techIcons: [<FaReact />, <FaNodeJs />, <SiFirebase />,<FaJs />, <SiPostman />],
  },
  {
    title: "Virtual Event Platform",
    description:
      `
- Responsive platform for managing and attending online events.
- Features: event registration, reminders, premium content and real-time notifications.
- Demo Flow: 
   1. Display list of events.
   2. Register for an event.
   3. Shows reminders and notification triggers.
- Tech Stack: React, Firebase
    `, video: "/assets/online.mp4",
    liveLink: "https://hemhemakk.github.io/online_managment_app/",
    githubLink: "https://github.com/hemhemaKK/online_managment_app",
    techIcons: [<FaReact />, <SiFirebase />,<FaJs />, <SiPostman />],
  },
  {
    title: "E-Commerce Web Application",
    description:
      `
- A full-stack online shopping platform with user and admin modules.
- Features: authentication, product browsing, cart, checkout, inventory tracking, and dashboards.
- Demo Flow:
   1. Browse products and add to cart.
   2. Complete checkout.
   3. Switch to admin dashboard to manage products and orders.
- Tech Stack: React, Node.js, MongoDB
    `,
    video: "/assets/ecommerce.mp4",
    liveLink: "https://hemhemakk.github.io/E_commerce_project/",
    githubLink: "https://github.com/hemhemaKK/E_commerce_project",
    techIcons: [<FaReact />, <FaNodeJs />, <SiMongodb />,<FaJs />, <SiPostman />],
  },
  {
    title: "Thyroid Disease Prediction (ML)",
    description:
      `
- Machine learning project predicting thyroid disease using medical datasets.
- Features: data preprocessing, classification algorithms, and health-based predictions.
- Demo Flow:
   1. Run predictions with sample test cases.
   2. Display prediction results clearly.
- Tech Stack: Python, Django (UI), DB-Browser, ML classification models
    `,
    video: "https://res.cloudinary.com/dbftgtgs9/video/upload/v1756538980/thyroid_zavtay.mp4",
    githubLink: "https://github.com/hemhemaK/ThyroidDisease-Check",
    techIcons: [<FaPython />, <FaJs />, <SiPostman />],
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-video">
              {/* 👇 replace img with video */}
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", borderRadius: "12px" }}
              />
              <div className="overlay1">
                <h3>{project.title}</h3>
                <pre
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "rgba(255, 255, 255,1)",
                    padding: "5px",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.4",
                    fontSize:"0.9rem",
                    textAlign: "left",
                  }}
                >{project.description}</pre>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
                <div className="tech-icons">
                  {project.techIcons.map((icon, idx) => (
                    <span key={idx} className="tech-icon">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
