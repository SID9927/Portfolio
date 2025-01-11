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
          <div className="col-md-10 text-center">
            <p>
              Hi, I'm Siddharth! I have recently completed my{" "}
              <strong>
                Post Graduate Diploma in Advanced Computing (PG-DAC)
              </strong>{" "}
              from <strong>CDAC Mumbai</strong>, with a strong passion for
              software development. I also hold a Master's (M.Sc.) and
              Bachelor's (B.Sc.) degree in Computer Science. I bring a solid
              foundation in{" "}
              <strong>
                <em>Java, .NET, MySQL, MongoDB</em>
              </strong>{" "}
              and{" "}
              <strong>
                <em>frontend technologies</em>
              </strong>.
            </p>
            <p>
                My journey into tech took a significant turn after three years
                of preparing for government exams, where I developed essential
                skills in time management, problem-solving and meticulous
                attention to detail.
              </p>
            <p>
              I’ve also completed a{" "}
              <strong>.NET Full Stack Development Certification</strong> from{" "}
              <strong>Ducat IT School, Noida</strong>, Where I'm diving deep
              into web development with a focus on{" "}
              <strong>
                <em>React</em>
              </strong>
              , alongside my experience with{" "}
              <strong>
                <em>HTML, CSS, Bootstrap, jQuery, and JavaScript</em>
              </strong>
              .
            </p>
            <p>
              My dedication to learning drives me to create something new every
              day and continuously expand my knowledge. I'm eager to apply my
              diverse skill set and passion for coding in a challenging software
              development role.
            </p>
            <p>
              I'm looking for exciting opportunities to contribute to innovative
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
