import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
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
// import Chatbot from "./Components/Chatbot/Chatbot";
import WorkExperience from "./Components/WorkExperience";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
        {isDarkMode ? <IoSunny /> : <IoMoonOutline />}
        </div>
        <ScrollToTop />
        {/* <Chatbot /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
