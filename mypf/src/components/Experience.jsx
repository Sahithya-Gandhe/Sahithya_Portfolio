import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <h3>Nexxify Inc.</h3>
        <div className="tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">HTML</span>
          <span className="tech-tag">CSS</span>
        </div>
        <ul className="experience-details">
          <li>Contributed to Captain Panel and Loomy App development.</li>

          <li>Built responsive dashboards with order management, KPI tracking, and authentication features.</li>

          <li>Worked with React, Express.js, Tailwind CSS, AWS, and Framer Motion to deliver production-ready solutions.</li>
        </ul>
      </div>

      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skills-list">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python (Basics)</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <div className="skills-list">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React JS </span>
              <span className="skill-tag">Express JS</span>
              <span className="skill-tag">DynamoDB</span>
              <span className='skill-tag'>SupaBase</span>
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