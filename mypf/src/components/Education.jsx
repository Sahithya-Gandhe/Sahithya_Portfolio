import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology, CSE',
      institution: 'Sumathi Reddy Institute of Technology for Women',
      location: 'Warangal, India',
      period: 'Nov. 2022 – March 2026',
      grade: 'CGPA: 8.20'
    },
    {
      degree: 'Intermediate, MPC',
      institution: 'Mathrusri Junior College',
      location: '',
      period: 'July 2020 – March 2022',
      grade: 'percentage: 90.4'
    },
    {
      degree: 'Secondary School, SSC',
      institution: 'St.Mary\'s High School',
      location: '',
      period: 'June 2010 – March 2020',
      grade: 'CGPA: 10.0'
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              {edu.location && <p className="location">{edu.location}</p>}
              <div className="period-grade">
                <span>{edu.period}</span>
                <span className="grade">{edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;