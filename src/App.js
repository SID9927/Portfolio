import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import ScrollToTop from "./Components/ScrollToTop";
import { ThemeProvider } from "./ThemeContext";
import Chatbot from "./Components/Chatbot/Chatbot";
import WorkExperience from "./Components/WorkExperience";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Home />
        <WorkExperience />
        <Skills />
        <Projects />
        <Education />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
