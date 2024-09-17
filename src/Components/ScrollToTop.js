/**
 * A React component that renders a "Scroll to Top" button that appears when the user scrolls down past a certain threshold.
 *
 * When the button is clicked, the component smoothly scrolls the page back to the top.
 */
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <FaArrowUp />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
