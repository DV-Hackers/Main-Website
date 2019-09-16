import React from 'react';
import './App.css';
import Home from './pages/home.js'
import Team from './pages/team.js'
import { Jumbotron } from 'reactstrap'

function App() {
  return (
    <>
      <Home />
      <Team />
    </>
  );
}

export default App;
