/**
 * Renders an Education section component that displays the user's educational background.
 *
 * The component maps over an array of education objects, each containing information about a degree, school, and graduation year. It renders these items in a timeline layout, alternating the position of the content between left and right.
 *
 * @returns {JSX.Element} The rendered Education section component.
 */
import React from "react";

function Education() {
  const education = [
    {
      degree: "Post Graduate Diploma In Advanced Computing",
      school: "C-DAC: Centre for Development of Advanced Computing, Mumbai",
      year: "2024",
    },
    {
      degree: ".Net Full Stack Certification",
      school: "Ducat IT School, Noida",
      year: "2023 - 2024",
    },
    {
      degree: "Bachelor of Education",
      school: "Ch. Charan Singh University, Meerut",
      year: "2018 - 2020",
    },
    {
      degree: "Master of Science in Computer Science",
      school: "Ch. Charan Singh University, Meerut",
      year: "2016 - 2018",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Ch. Charan Singh University, Meerut",
      year: "2013 - 2016",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h3 className="section-title">Education</h3>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div
              key={index}
              className={`education-item row ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="col-md-6 education-content">
                <div
                  className={`education-card ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <h4>{item.degree}</h4>
                  <h5>{item.school}</h5>
                  <p className="education-year">{item.year}</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="col-md-6 education-line">
                <div className="vertical-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
