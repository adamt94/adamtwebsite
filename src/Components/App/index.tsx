import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import NavBar from '../NavBar';
import Bubbles from '../Bubbles';
import Intro from '../Intro';
import Projects from '../Projects';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChrome, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
library.add(faChrome, faGithub, faReact);

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
