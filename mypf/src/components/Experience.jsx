import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <h3>SAAS-based Startup - Captain Panel Development</h3>
        <div className="tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">HTML</span>
          <span className="tech-tag">CSS</span>
        </div>
        <ul className="experience-details">
          <li>Developing a React JS-based captain panel to streamline restaurant operations, reducing the need for multiple staff members and improving overall efficiency.</li>
          <li>Integrated real-time notifications for order management, enabling captains to track and manage deliveries more effectively.</li>
          <li>Focused on creating a scalable and responsive platform that ensures seamless user experience across different devices.</li>
        </ul>
      </div>

      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skills-list">
              <span className="skill-tag">C</span>
              <span className="skill-tag">Python (Basics)</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <div className="skills-list">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript (basics)</span>
              <span className="skill-tag">React JS (Basics)</span>
              <span className="skill-tag">Express JS</span>
              <span className="skill-tag">DynamoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Developer Tools</h4>
            <div className="skills-list">
              <span className="skill-tag">VSCode</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Jupyter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;