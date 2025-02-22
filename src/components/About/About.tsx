import React from 'react';
import './About.scss';

const About = () => {
  const experiences = [
    {
      role: "Product Development Engineer-I",
      company: "Phenom",
      period: "2023 - Present",
      description: "Working on developing cutting-edge talent experience management solutions, focusing on both frontend and backend development.",
      highlights: [
        "Building full-stack web applications using Angular, PostgreSQL and MongoDB",
        "Implementing RESTful APIs and optimizing database performance",
        "Collaborating with cross-functional teams for end-to-end feature development"
      ]
    },
    // Add more experiences here
  ];

  const skills = [
    "React.js", "MongoDB", "TypeScript", 
    "Angular.js", "PostgreSQL", "REST APIs"
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="section-heading">
          <span className="number">01.</span>
          <h2>About Me</h2>
          <div className="line"></div>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <div className="about__bio">
              <p className="about__description">
                As a <span className="highlight">Full Stack Developer</span>, I'm passionate about 
                creating end-to-end digital solutions. Currently working at 
                <span className="company"> Phenom</span>, where I contribute to building 
                innovative talent management solutions using modern web technologies.
              </p>
              <div className="skills-cloud">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="card-header">
                  <div className="role-info">
                    <h3>{exp.role}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <i className="fas fa-caret-right"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 