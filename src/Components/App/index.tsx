import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import NavBar from '../NavBar';
import Bubbles from '../Bubbles';
import Intro from '../Intro';
import Projects from '../Projects';

function App() {
  //so css theme can be applied from body tag
  React.useEffect(() => {
    const body = document.querySelector("body");
    document.body.classList.add("App");
    document.body.classList.add("light");
    return () => {
      body?.classList.remove("App");
      body?.classList.remove("light");
    }
  });
  return (
    <div className="main">
      <Header />
      <NavBar />
      <Bubbles />
      <Intro />
      <Projects />

    </div>
  );
}

export default App;
