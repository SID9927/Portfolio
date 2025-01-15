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
  SiDotnet,
  SiSpring,
  SiHibernate,
  SiPostman,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  return (
    <section id="skills" className="skills-section mt-5">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2 ">
              <div className="skill-item">
              <div className="skill-item-content block-up">
                {skill.icon}
                <h3 className="skill-name">{skill.name}</h3>
              </div>              
              </div>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
