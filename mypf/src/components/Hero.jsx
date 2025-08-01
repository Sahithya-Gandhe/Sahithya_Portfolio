import React from 'react';
import '../styles/Hero.css';
// import '../assets/sahi.jfif';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src="/src/assets/image.jfif" 
            alt="Sahithya Gande" 
          />
        </div>
        <div className="hero-text">
          <h1>Hello, I'm Sahithya Gande</h1>
          <p>A passionate AI Enthusiast and Full Stack Developer with a keen interest in building innovative solutions. Currently pursuing B.Tech in Computer Science Engineering, I combine technical expertise with creative problem-solving to deliver impactful results.</p>
          <p>As an undergrad studying in Computer Science and Engineering, I have a strong passion for programming and web development. Skilled in Java , Python ,HTML, CSS, JavaScript,Reactjs ,Expressjs and backend technologies, Currently Exploring Artificial Intelligence and Machine Learning.
          I love building user-friendly and efficient applications , I'm looking for internship opportunities to apply my skills , gain hands-on experience, and contribute to real-world projects. Eager to learn, grow, and collaborate with like-minded professionals!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;