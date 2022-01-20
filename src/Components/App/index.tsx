import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import NavBar from '../NavBar';
import Bubbles from '../Bubbles';
import Intro from '../Intro';
import Projects from '../Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Bubbles />
      <Intro />
      <Projects />

    </div>
  );
}

export default App;
