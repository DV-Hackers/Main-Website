import React from 'react';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';


function App() {
  return (
    <>
      <Home to="home"/>
      <About to="about"/>    
      <Contact to="contact"/>  
    </>
  );
}

export default App;
