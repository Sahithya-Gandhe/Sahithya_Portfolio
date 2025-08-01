import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Journal',
      description: 'A versatile Application to write daily notes and delete outdated notes. Features include storing important dates for upcoming events and managing social media sites and passwords.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'AI Virtual Assistant Website',
      description: 'An innovative Application that allows users to ask questions, get real-time responses, and interact through a user-friendly interface. Helps users reduce work pressure by automating tasks using Voice Recognition and Dynamic Response.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      links: {
        github: 'https://github.com/Sahithya-Gandhe/Virtual-WebAssistant',
        live: 'https://sahithya-gandhe.github.io/Virtual-WebAssistant/'
      }
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                GitHub Link
              </a>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                Project Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;