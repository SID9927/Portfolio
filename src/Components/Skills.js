/**
 * The `Skills` component displays a section with a list of the developer's technical skills, represented by icons and skill names.
 *
 * The component maps over an array of skill objects, each containing a name and an icon, and renders a grid of skill items.
 * The skill icons are imported from the `react-icons` library, which provides a wide range of popular programming language and technology icons.
 *
 * This component is intended to be used within a larger application or website to showcase the developer's technical expertise and proficiency.
 */
import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiCsharp,
  SiDotnet,
  SiSpring,
  SiHibernate,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="skills-section mt-5">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2">
              <div className="skill-item">
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
