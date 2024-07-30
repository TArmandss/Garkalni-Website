import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { MdArrowForwardIos } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import { backgrounds } from "../../services";
import { NavLink } from "react-router-dom";

function Gallery() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []); // Run effect only once when component mounts

  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.animation = "none";
    setTimeout(() => {
      progressBar.style.animation = "";
    }, 20);
  }, [currentImageIndex]); 

  return (
    <>
    <NavLink to='/gallery' className="gallery-section">
     
        <div className="wrap">
          <GoArrowDownLeft className="arrow" />

          <div
            className="inner-wrap"
            onMouseEnter={() => setVisibleText(true)}
            onMouseLeave={() => setVisibleText(false)}
          >
            <img
              className="img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${backgrounds[currentImageIndex]})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              loading="lazy"
              />
            <h1>GALERIJA</h1>
            <div className="progress-bar"></div>
            <p className="check-txt">
              Apskatīties <MdArrowForwardIos className="arrow-right" />
            </p>
          </div>
        
        </div>
    </NavLink>
              </>
  );
}

export default Gallery;
