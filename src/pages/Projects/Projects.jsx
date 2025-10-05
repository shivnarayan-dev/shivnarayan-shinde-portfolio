import React from "react";
import "./Projects.css";

export default function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React, CSS, showcasing my skills, projects, and contact information.",
      link: "",
    },
    // {
    //   title: "AI Voice Assistant (LEO)",
    //   description: "A JARVIS-like AI assistant built with Python capable of speech recognition and system control.",
    //   link: "https://github.com/yourusername/ai-assistant",
    // },
    // {
    //   title: "Weather App",
    //   description: "A weather forecasting app using real-time OpenWeather API and dynamic UI updates.",
    //   link: "https://your-weather-app-link.com",
    // },
    // {
    //   title: "E-Commerce Website",
    //   description: "A full-stack online shopping platform built with React, Node.js, and MongoDB.",
    //   link: "https://your-ecommerce-link.com",
    // },
  ];

  return (
    <div className="main-div-03">
      <h1 className="h1-03">My Projects</h1>
      <div className="projects-container-03">
        {projectData.map((project, index) => (
          <div className="project-card-03" key={index}>
            <h2 className="project-title-03">{project.title}</h2>
            <p className="project-description-03">{project.description}</p>
            <a
              href={project.link}
              className="project-link-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
