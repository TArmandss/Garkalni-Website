import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function BackToTopBtn() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <button
        onClick={ScrollTop}
        className={`back-to-top-button ${backToTopButton ? "visible" : ""}`}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}

export default BackToTopBtn;