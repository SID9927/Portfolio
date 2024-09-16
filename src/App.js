import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import logo from './media/logo.png'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="education" smooth={true} duration={500}>Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleTheme} className="btn btn-theme-toggle">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>

      <main>
        <Home/>
        <Skills />
        <Projects />
        <Education/>
        <About />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>© 2024 Siddharth. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="social-links">
                <a href="https://github.com/SID9927" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/siddharth-in/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:5065sid@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
