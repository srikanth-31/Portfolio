import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="home__hero">
        <div className="home__hero-content">
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <p className="title">Full Stack Developer</p>
          <p className="description">I create beautiful and functional websites</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Work</a>
          </div>
        </div>
      </section>

      <section id="about" className="home__about">
        <h2>About Me</h2>
        <div className="content">
          <div className="image">
            <img src="your-photo.jpg" alt="Your Name" />
          </div>
          <div className="text">
            <p>Your compelling introduction goes here. Describe your journey, passion, and what drives you in web development.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="home__projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {[1, 2, 3].map((project) => (
            <div key={project} className="project-card">
              <div className="project-image">
                <img src={`project-${project}.jpg`} alt={`Project ${project}`} />
              </div>
              <div className="project-info">
                <h3>Project Title {project}</h3>
                <p>Project description goes here. Explain what you built and the technologies used.</p>
                <div className="project-links">
                  <a href="#" className="btn btn-small">View Live</a>
                  <a href="#" className="btn btn-small btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="home__skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
            <div key={skill} className="skill-card">
              <h3>{skill}</h3>
              <div className="skill-level">
                <div className="progress-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="home__contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
            <div className="social-links">
              <a href="#" target="_blank">LinkedIn</a>
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 