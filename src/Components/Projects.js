import React from "react";
import newsVideo from "../media/NewsWebsite.mp4";
import loginVideo from "../media/login.mp4";

function Projects() {
  const projects = [
    {
      title: "News Website",
      description:
        "It’s a news website that uses HTML, Bootstrap, CSS, and JavaScript to display news data from the NewsAPI. The website is designed to be user-friendly and intuitive, with a search button that allows you to easily find news related to your keyword of interest.In this project, I have learned to fetch data through third party axios method and display the data on the website.",
      video: newsVideo,
      link: "https://news-website-project.netlify.app/",
    },
    {
      title: "Login Page",
      description:
        "Design a login page with a hacker-inspired theme featuring a dark, animated background and neon-green accents. The central login form includes sleek, retro-styled fields. Hover effects make interactive elements glow or change color, while subtle animations like code streams add to the immersive tech aesthetic, ensuring a modern, engaging experience.",
      video: loginVideo,
      link: "https://main--bespoke-custard-240aa6.netlify.app/",
    },
    // {
    //   title: "Project 3",
    //   description:
    //     "Highlighting the main aspects and technologies used in project 3.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   link: "https://project3.example.com",
    // },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="project-card">
                {project.video ? (
                  <video 
                  src={project.video} 
                  alt={project.title}
                  className="img-fluid"
                  style={{ height: "300px", width: "500px" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                    style={{ height: "300px", width: "500px" }}
                  />
                )}
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
