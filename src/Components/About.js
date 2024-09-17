/**
 * Renders the About section of the application.
 * This section provides information about the developer, including their background, skills, and goals.
 */
import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p>
              Hi, I'm Siddharth! I'm a recent PG-DAC graduate from CDAC Mumbai
              with a keen passion for software development. I bring a strong
              foundation in C++, Java, .NET, MySQL, and frontend technologies.
              My journey into tech took a significant turn after three years of
              preparing for government exams, where I developed essential skills
              in time management, problem-solving, and meticulous attention to
              detail.
            </p>
            <p>
              I’ve also completed a .NET Full Stack Development certification
              from Ducat IT School, Noida. Currently, I'm diving deep into web
              development with a focus on React, alongside my experience with
              HTML, CSS, Bootstrap, jQuery, and JavaScript.
            </p>
            <p>
              My dedication to learning drives me to create something new every
              day and continuously expand my knowledge. I'm eager to apply my
              diverse skill set and passion for coding in a challenging software
              development role.
            </p>
            <p>
              Looking for exciting opportunities to contribute to innovative
              projects and connect with like-minded professionals in the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
