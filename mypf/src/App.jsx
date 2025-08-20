import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero id="hero" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Achievements id="achievements" />
        <Footer id="footer" />
      </main>
    </div>
  )
}

export default App
