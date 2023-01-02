import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "../src/components/Project";

import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      
      <AboutMe />
      
      <Skills />
      <Project/>
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
