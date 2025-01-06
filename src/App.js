/**
 * The `FloatingThemeToggle` component is a React functional component that provides a floating button to toggle the theme of the application between light and dark mode.
 *
 * The component uses the `ThemeContext` from the `ThemeContext` module to access the current theme and the `toggleTheme` function to switch between the light and dark themes.
 *
 * When the floating button is clicked, the `toggleTheme` function is called, which updates the theme in the `ThemeContext` and triggers a re-render of the application with the new theme.
 */
import React, { useContext } from "react";
import { Link } from "react-scroll";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import ScrollToTop from "./Components/ScrollToTop";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Chatbot from './Components/Chatbot/Chatbot';
import WorkExperience from "./Components/WorkExperience";


function FloatingThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div onClick={toggleTheme} className="floating-theme-toggle">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
}

function App() {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  return (
    <ThemeProvider>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              SIDDHARTH
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="workexperience"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Work Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="skills"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="education"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Home />
        <WorkExperience/>
        <Skills />
        <Projects />
        <Education />
        <About />
        <Contact />

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-start">
                <p>© 2024 Siddharth. All rights reserved.</p>
              </div>
              <div className="col-12 col-md-6">
                <div className="social-links">
                  <a
                    href="https://github.com/SID9927"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/siddharth-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="mailto:5065sid@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <ScrollToTop />
        {/* <FloatingThemeToggle /> */}
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
