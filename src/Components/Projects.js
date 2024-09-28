/**
 * The `Projects` component displays a section showcasing the user's projects. It allows filtering projects by category (web or full-stack) and provides a modal for displaying detailed information about each project.
 *
 * The component uses the `ThemeContext` to apply the appropriate theme styles to the modal.
 *
 * @returns {JSX.Element} The rendered `Projects` component.
 */

import React, { useState, useContext } from "react";
import { Modal, Button} from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import newsVideo from "../media/NewsWebsite.mp4";
import loginVideo from "../media/login.mp4";
import farmerMarketvideo from "../media/Farmermarket.mp4";
import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "News Website",
      description: `This dynamic news website showcases my proficiency in front-end web development and API integration. Built with HTML, Bootstrap, CSS, and JavaScript, it offers a seamless user experience for accessing up-to-date news from various sources.

                    \n**Key features include:**\n
                    • Responsive design using Bootstrap for optimal viewing across devices
                    • Integration with NewsAPI to fetch real-time news data
                    • User-friendly search functionality for finding news by keywords
                    • Dynamic content rendering with JavaScript
                    • Sleek and intuitive user interface with modern design principles
                    • Implementation of Axios for efficient API requests
                    • Category-based news filtering for personalized content exploration

                    Through this project, I demonstrated my ability to create interactive web applications, work with external APIs, and implement core front-end technologies to deliver a polished, functional news platform.`,
      video: newsVideo,
      image: project1,
      link: "https://news-website-project.netlify.app/",
      category: "web",
      gitLink: "https://github.com/SID9927/GraduationProject.git",
    },
    {
      title: "Login Page",
      description: `This visually striking login page showcases my creativity and front-end development skills, featuring a captivating hacker-inspired theme. The project demonstrates my ability to create immersive user interfaces with advanced CSS techniques and animations.

        \n**Key features include:**\n
        • Dark, animated background with dynamic code streams for an authentic hacker aesthetic
        • Neon-green accents and glow effects for interactive elements
        • Sleek, retro-styled input fields with custom animations
        • Responsive design ensuring compatibility across various devices
        • Clever use of CSS animations to enhance user engagement
        • Custom checkbox design integrated seamlessly with the overall theme
        • Attention to detail in typography and layout for maximum visual impact

        This project highlights my proficiency in creating unique, themed user interfaces and my understanding of modern web design principles, showcasing the perfect blend of functionality and visual appeal.`,
      video: loginVideo,
      image: project2,
      link: "https://main--bespoke-custard-240aa6.netlify.app/",
      category: "web",
      gitLink: "https://github.com/SID9927/LoginPage_HackerDesign.git",
    },
    {
      title: "Farmer MarketPlace",
      description: `The Farmer's Marketplace is a comprehensive full-stack e-commerce platform that revolutionizes the agricultural supply chain by directly connecting farmers with consumers. This project showcases my ability to develop complex, multi-faceted web applications using a diverse tech stack and implementing a wide range of features.
        \n**Key features include:**\n
        • User authentication and authorization for farmers, customers, and admins
        • Product management system for farmers to list and manage their produce
        • Intuitive shopping cart functionality for customers
        • Robust order processing and management system
        • Secure payment integration for seamless transactions
        • User profile management with customizable settings
        • Admin dashboard for overseeing marketplace operations
        • Responsive design for optimal user experience across devices

        \n**Tech stack:**\n
        • Frontend: React.js with Redux for state management
        • Backend: Java (Spring Boot) and ASP.NET Core
        • Database: MySQL
        • Additional technologies: Bootstrap

        This project demonstrates my proficiency in full-stack development, database design, API integration, and creating scalable, user-centric web applications.`,
      video: farmerMarketvideo,
      image: project3,
      link: "",
      category: "Full Stack",
      gitLink: "https://github.com/SID9927/CDAC_Project",
    },
  ];

  const renderDescription = (description) => {
    if (!description) return null;
    return description.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <strong key={index}>{paragraph.slice(2, -2)}</strong>;
      }
      return <p key={index}>{paragraph}</p>;
    });
  };
  

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-filters mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`btn ${
              filter === "all" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`btn ${
              filter === "web" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter("Full Stack")}
            className={`btn ${
              filter === "Full Stack" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Full Stack
          </button>
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                  style={{ height: "250px", width: "100%" }}
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <Button
                    onClick={() => openModal(project)}
                    className="btn btn-primary me-2"
                  >
                    View Details
                  </Button>
                  {project.category === "Full Stack" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      GitHub
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        className={`themed-modal ${theme}`}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject?.video && (
            <video
              src={selectedProject.video}
              className="img-fluid mb-3"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
          <div style={{ maxHeight: "250px", overflowY: "auto" }}>
            {renderDescription(selectedProject?.description)}
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <a
            href={selectedProject?.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;
