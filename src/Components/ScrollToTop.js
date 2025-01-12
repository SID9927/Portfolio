import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setIsHidden(false);
      } else {
        if (isVisible) {
          setIsHidden(true);
          setTimeout(() => setIsVisible(false), 500); 
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className={`scroll-to-top ${isHidden ? 'hide' : ''}`}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
