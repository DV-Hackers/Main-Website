import React from 'react';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <>
      <Home />
      <About />      
    </>
  );
}

export default App;
