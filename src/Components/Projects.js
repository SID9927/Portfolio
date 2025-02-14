import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import newsVideo from "../media/NewsWebsite.mp4";
import loginVideo from "../media/login.mp4";
import farmerMarketvideo from "../media/Farmermarket.mp4";
import authservicevideo from "../media/AuthService.mp4";
import airbnbVideo from "../media/Airbnb.mp4";
import BlogPlatformVideo from "../media/BlogPlatform.mp4";
import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";
import project4 from "../media/project4.webp"; 
import Airbnb from "../media/Airbnb.png";
import BlogPlatform from "../media/BlogPlateform.png"

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
      category: "Frontend",
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
      category: "Frontend",
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
    {
      title: "Authentication and Authorization Service",
      description: `The Authentication and Authorization Service is a robust backend project that provides secure user management and access control for web applications. This project demonstrates my proficiency in developing secure, scalable backend services using modern technologies and best practices in authentication and authorization.
        \n**Key features include:**\n

        • User registration with email and password
        • Secure authentication using JWT (JSON Web Tokens)
        • Role-based authorization for different user types
        • Password encryption using BCrypt
        • Stateless session management
        • RESTful API endpoints for authentication and user management
        • Database integration for user persistence
        • Custom JWT filter for request authentication
        • Configurable JWT expiration and secret key

        \n**Tech stack:**\n

        • Backend: Java with Spring Boot
        • Security: Spring Security
        • Database: MySQL with Spring Data JPA
        • JWT: JJWT (Java JWT) library
        • Build Tool: Maven or Gradle (based on project structure)

        This project showcases my skills in backend development, security implementation, and creating reusable services that can be integrated into larger applications. It demonstrates my understanding of authentication flows, secure coding practices, and the ability to work with modern Java frameworks and libraries.`,

      video: authservicevideo,
      image: project4,
      link: "",
      category: "Backend",
      gitLink:
        "https://github.com/SID9927/JWT_Authentication_Authorization_Service.git",
    },
    {
      title: "Airbnb Landing Page Clone",
      description: `A responsive and modern Airbnb landing page clone that showcases property listings and categories. This project demonstrates my frontend development skills and ability to create pixel-perfect, responsive user interfaces.
  
      \n**Key features include:**\n
  
      • Responsive navigation bar with search functionality
      • Dynamic property listings and categories
      • Hero section with background image
      • Mobile-first responsive design
      • Interactive UI elements and hover effects
      • Footer with multiple sections
      • Dynamic content rendering using JavaScript
      • Custom CSS animations and transitions
      • Mobile search bar for smaller screens
      • Flexible grid layouts for listings and categories
  
      \n**Tech stack:**\n
  
      • HTML5 for semantic markup
      • CSS3 with modern features like Grid and Flexbox
      • Vanilla JavaScript for dynamic content
      • Font Awesome for icons
      • Google Fonts integration
      • Mobile-first responsive design principles
  
      This project showcases my frontend development capabilities, including responsive design implementation, modern CSS practices, and JavaScript DOM manipulation. It demonstrates my attention to detail in recreating complex UI components and ensuring cross-device compatibility.`,

      video: airbnbVideo,
      image: Airbnb,
      link: "",
      category: "Frontend",
      gitLink: "https://github.com/SID9927/Brainwave_Matrix_Intern",
    },
    {
      "title": "Blog Platform",
      "description": `A modern and feature-rich blogging platform built with the MERN stack that enables users to create, manage, and interact with blog content. This project demonstrates full-stack development capabilities with secure user authentication and real-time interactions.
  
      \n**Key features include:**\n
  
      • User authentication with JWT and secure password hashing
      • Create, edit, and delete blog posts
      • Comment system with real-time updates
      • User profiles and authorization
      • Responsive design for all devices
      • RESTful API architecture
      • MongoDB database integration
      • Protected routes and middleware
      • Error handling and validation
      • Populate relationships between models
  
      \n**Tech stack:**\n
  
      • MongoDB for database management
      • Express.js for backend API development
      • React.js for frontend user interface
      • Node.js for server-side runtime
      • JWT for secure authentication
      • Bcrypt for password encryption
      • Mongoose for database modeling
      • RESTful API principles
      • CORS for cross-origin resource sharing
      • Environment variables for configuration
  
      This project showcases full-stack development expertise, including database design, API development, authentication implementation, and frontend user interface creation. It demonstrates the ability to build secure, scalable, and user-friendly web applications using modern web technologies.`,
  
      "video": BlogPlatformVideo,
      "image": BlogPlatform,
      "link": "",
      "category": "Full Stack",
      "gitLink": "https://github.com/SID9927/Brainwave_Matrix_Intern"
  }
  ];

  const renderDescription = (description) => {
    if (!description) return null;
    return description.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
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
        <div className="project-filters mb-4 block-left">
          <button
            onClick={() => setFilter("all")}
            className={`btn btn-neumorphism ${
              filter === "all" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Frontend")}
            className={`btn btn-neumorphism ${
              filter === "Frontend" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("Backend")}
            className={`btn btn-neumorphism ${
              filter === "Backend" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("Full Stack")}
            className={`btn btn-neumorphism ${
              filter === "Full Stack" ? "btn-primary" : "btn-outline-primary"
            } me-2`}
          >
            Full Stack
          </button>
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-3 mb-5 project-view">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                </div>
                <div className="button-container">
                  <Button
                    onClick={() => openModal(project)}
                    className="btn btn-small btn-neumorphism me-2"
                  >
                    View Details
                  </Button>
                  {project.link ? ( 
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-small btn-neumorphism"
                    >
                      Live Demo
                    </a>
                  ) : project.gitLink ? ( 
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-small btn-neumorphism"
                    >
                      GitHub
                    </a>
                  ) : null} 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="s"
        className={`themed-modal ${theme} `}
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
          <div
            style={{ maxHeight: "250px", overflowY: "auto" }}
            className="model-description"
          >
            {renderDescription(selectedProject?.description)}
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            className="btn-neumorphism"
          >
            Close
          </Button>
          <a
            href={selectedProject?.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neumorphism"
          >
            GitHub
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;
