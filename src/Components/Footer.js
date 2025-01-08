import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-center text-md-start">
          <p className="footer-text">
          © 2024 <em>Siddharth.</em> All rights reserved.
            </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="footer-social-links">
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
              <FaEnvelope/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
