import React, { useEffect, useRef } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../media/sid.jpeg";
import resume from "../media/SIDDHARTH_CDAC.pdf";
import Typed from "typed.js";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend developer",
        "Backend developer",
        "Full Stack Developer",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="animated-text">Hello, I'm Siddharth</h1>
            <h2 className="typed-text">
              <span ref={el}></span>
            </h2>
            <p className="lead">
              <p>
                <p>
                  Aspiring software developer with a solid foundation in Java,
                  C#, Web development and Database. Passionate about enhancing
                  my skills and contributing to innovative solutions in a
                  dynamic environment.
                </p>
              </p>
            </p>
            <div className="social-link mb-3">
              <a
                href="https://github.com/SID9927"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:5065sid@gmail.com" className="me-3">
                <FaEnvelope size={30} />
              </a>
            </div>
            <a href={resume} download className="btn btn-primary btn-lg">
              <FaDownload className="me-2" />
              Resume
            </a>
          </div>
          <div className="col-md-6">
            <div className="profile-image-container">
              <img
                src={profileImage}
                alt="Siddharth"
                className="img-fluid rounded-circle profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
