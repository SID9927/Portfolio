import React, { useEffect, useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

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
        <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "☀️" : "🌙"}
      </div>
        <ScrollToTop />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
