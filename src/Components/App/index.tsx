import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import NavBar from '../NavBar';
import Bubbles from '../Bubbles';
import Intro from '../Intro';
import Projects from '../Projects';
import {
  IconDefinition,
  IconPack,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faChrome,
  faGithub,
  faReact,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import Experience from "../Experience";

//this doesn't make sense why have to add as 'type'
library.add(
  fas as IconPack,
  faChrome as IconDefinition,
  faGithub as IconDefinition,
  faReact as IconDefinition,
  faAndroid as IconDefinition
);

function App() {
  //so css theme can be applied from body tag
  React.useEffect(() => {
    const body = document.querySelector("body");
    document.body.classList.add("App");
    document.body.classList.add("dark");
    return () => {
      body?.classList.remove("App");
      body?.classList.remove("dark");
    }
  });
  return (
    <div className="main">
      <Header />
      <NavBar />
      <Bubbles />

      <div className="background">
        <div className="pageWrapper">
          <Intro />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
