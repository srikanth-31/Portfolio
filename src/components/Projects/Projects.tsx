import React from 'react';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: "Employee Talent Graph (ETG)",
      company: "Phenom People",
      description: "Working on the ETG platform that creates comprehensive talent profiles by analyzing employee skills, experiences, and competencies. This helps organizations make data-driven decisions for talent management, career pathing, and succession planning.",
      tech: ["Angular", "Java", "Spring Boot"],
      duration: "2024 - Present",
      role: "Product Development Engineer-I"
    },
    {
      title: "Salesforce Development",
      company: "SmartInternz",
      description: "Participated in Salesforce Development Virtual Internship program, gaining hands-on experience in building CRM solutions and automation processes using Salesforce platform.",
      tech: ["Apex", "Lightning", "Process Automation"],
      duration: "2023",
      role: "Salesforce Developer Intern"
    }
  ];

  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="section-heading">
        <span className="number">03.</span>
        <h2>Experience & Projects</h2>
        <div className="line"></div>
      </div>

      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card__header">
              <div className="project-card__title-section">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__subtitle">
                  <p className="project-card__role">{project.role}</p>
                  <span className="project-card__company">@ {project.company}</span>
                </div>
                <span className="project-card__duration">{project.duration}</span>
              </div>
            </div>

            <div className="project-card__content">
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 