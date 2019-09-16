import React from 'react';
import './App.css';
import Home from './pages/home.js'
import Team from './pages/team.js'
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <>
      <Home to="home"/>
      <Team to="team"/>
      <About to="about"/>    
      <Contact to="contact"/>  
    </>
  );
}

export default App;
