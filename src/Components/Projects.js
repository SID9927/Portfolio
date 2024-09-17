/**
 * The `Projects` component renders a section displaying a list of projects, with the ability to filter by category and view project details in a modal.
 *
 * The component uses the `useState` and `useContext` hooks to manage the state of the component, including the visibility of the modal, the selected project, and the current filter.
 *
 * The `projects` array contains the data for each project, including the title, description, video or image, link, and category. The `filteredProjects` array is created by filtering the `projects` array based on the current filter.
 *
 * The `openModal` function is called when the "View Details" button is clicked for a project, which sets the `selectedProject` state and shows the modal.
 *
 * The component renders a section with a title, a set of filter buttons, and a grid of project cards. Each project card displays the project's video or image, title, and a brief description, as well as "View Details" and "Live Demo" buttons.
 *
 * When the "View Details" button is clicked, a modal is displayed with the full project description and a link to the live demo.
 */
import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import newsVideo from "../media/NewsWebsite.mp4";
import loginVideo from "../media/login.mp4";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "News Website",
      description:
        "It's a news website that uses HTML, Bootstrap, CSS, and JavaScript to display news data from the NewsAPI. The website is designed to be user-friendly and intuitive, with a search button that allows you to easily find news related to your keyword of interest. In this project, I have learned to fetch data through third party axios method and display the data on the website.",
      video: newsVideo,
      link: "https://news-website-project.netlify.app/",
      category: "web",
    },
    {
      title: "Login Page",
      description:
        "Design a login page with a hacker-inspired theme featuring a dark, animated background and neon-green accents. The central login form includes sleek, retro-styled fields. Hover effects make interactive elements glow or change color, while subtle animations like code streams add to the immersive tech aesthetic, ensuring a modern, engaging experience.",
      video: loginVideo,
      link: "https://main--bespoke-custard-240aa6.netlify.app/",
      category: "web",
    },
  ];

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
            onClick={() => setFilter("mobile")}
            className={`btn ${
              filter === "mobile" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Full Stack
          </button>
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                {project.video ? (
                  <video
                    src={project.video}
                    alt={project.title}
                    className="img-fluid"
                    style={{ height: "300px", width: "100%" }}
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
                    style={{ height: "300px", width: "100%" }}
                  />
                )}
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <Button
                    onClick={() => openModal(project)}
                    className="btn btn-primary me-2"
                  >
                    View Details
                  </Button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    Live Demo
                  </a>
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
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <a
            href={selectedProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Live
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;
