import React from 'react'
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiCsharp, SiDotnet, SiSpring, SiHibernate } from 'react-icons/si';

function Skills() {
    const skills = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'Spring', icon: <SiSpring /> },
        { name: 'Hibernate', icon: <SiHibernate /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="row">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-md-4 col-lg-2">
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