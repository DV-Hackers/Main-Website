import React from 'react';
import './App.css';
import Home from './pages/home.js';
import Team from './pages/team.js';
import Alumni from './pages/alumni.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import ParticleBackground from './pages/components/ParticleBackground.js';

function App() {
  return (
    <>
        <ParticleBackground/>
      <Home to="home"/>
      <About to="about"/>
      <Team to="team"/>
      <Alumni to="alumni"/>
      <Contact to="contact"/>
    </>
  );
}

export default App;
