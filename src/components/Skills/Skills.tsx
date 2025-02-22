import React from 'react';
import './Skills.scss';

const Skills = () => {
  const skills = [
    {
      name: "Angular",
      image: "https://angular.io/assets/images/logos/angular/angular.png"
    },
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
    },
    {
      name: "JavaScript",
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    {
      name: "HTML & CSS",
      images: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      ]
    },
    {
      name: "Java",
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
    },
    {
      name: "Spring Boot",
      image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
      name: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
    {
      name: "Jenkins",
      image: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <span className="number">02.</span>
        <h2>Skills & Technologies</h2>
        <div className="line"></div>
      </div>

      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card__content">
              <div className="skill-card__icon-wrapper">
                {skill.images ? (
                  <div className="skill-card__dual-images">
                    {skill.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${skill.name} ${idx + 1}`}
                        className="skill-card__image"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : (
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="skill-card__image"
                    loading="lazy"
                  />
                )}
              </div>
              <h3 className="skill-card__name">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 