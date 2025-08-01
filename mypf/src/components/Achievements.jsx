import React from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'National Flagship Event Management',
      description: 'Successfully conducted and managed the national flagship event "Abhigyaan 3.0," overseeing coordination, logistics, and execution to ensure a seamless experience.'
    },
    {
      title: 'Operational Internship',
      description: 'Operational Intern at TopTrove, a Non-profitable Organization.'
    },
    {
      title: 'Web Development Internship',
      description: 'Completed a Web Development Internship at PathCreators, gaining hands-on experience in front-end technologies to build and maintain dynamic websites.'
    },
    // {
    //   title: 'Leadership Role',
    //   description: 'Secretary in Robotics Automation Society of Student Branch in SRITW (Warangal, India)'
    // }
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;