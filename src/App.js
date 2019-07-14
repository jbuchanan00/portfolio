import React from 'react';
import './App.scss';
import NavBar from "./Components/NavBar"
import Introduction from "./Components/Introduction"
import Experience from "./Components/Experience"
import AboutMe from "./Components/AboutMe"
import { ParallaxProvider } from "react-scroll-parallax"

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
      <div className="app-body-nonav">
        <NavBar />
        <Introduction />
        <AboutMe />
        <Experience />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
