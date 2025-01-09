import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {    // Adjust the scroll position as needed
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".offcanvas");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          SIDDHARTH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end custom-offcanvas"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title navbar-brand"
              id="offcanvasNavbarLabel"
            >
              SIDDHARTH
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
      </div>
    </nav>
  );
};

export default Header;
