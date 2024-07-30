import React, { useEffect, useState, memo } from "react";
import "./HomePage.css";

// Imports from 3rd partly libraries
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// ReactJs Icons
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoIosArrowRoundDown } from "react-icons/io";
import { SlPresent } from "react-icons/sl";

// Components
import BackToTopBtn from "../../BackToTopBtn";
import ServicesGarkalniSection from "../ServicesGarkalniSection/ServicesGarkalniSection.jsx";
import NavBar from "../NavBar/NavBar";
import AboutSection from "../AboutSection/AboutSection";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";
import Location from "../Location/Location.jsx";
import Gallery from "../Gallery/Gallery.jsx";

// Video Bg
import videoSource from "../../../src/vid/bgvid.mp4";

const Hand = memo(() => (
  <motion.span
    key="hand"
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    aria-label="Waving Hand"
  >
    👋
  </motion.span>
));

const Logo = memo(() => (
  <motion.div
    key="logo"
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="logo-bgone"
    role="img"

  >
  </motion.div>

));

function HomePage({
  showMenuIcon,
  setShowMenuIcon,
  menuDisplay,
  setMenuDisplay,
}) {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [showHand, setShowHand] = useState(true); // State to toggle between hand and logo
  const [mainNav, setMainNav] = useState(true); // State to toggle between hand and logo

  const InstagramLink =
    "https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==";
  const FacebookLink = "https://www.facebook.com/atputasvieta.garkalni";

 

  const handleAdditionalInfoClick = (index) => {
    setActiveContentIndex(index);
  };

  useEffect(() => {
    let interval;  // Declare interval variable
  
    const updateNavAndInterval = () => {
      const isWideEnough = window.innerWidth <= 755;
      const isVeryWide = window.innerWidth >= 916;
  
      // Update navigation state
      if (isWideEnough) {
        setMainNav(true);
        setShowMenuIcon(false);
      } else {
        setMainNav(false);
        setShowMenuIcon(true);
      }
  
      // Manage interval
      if (isVeryWide) {
        // Set a new interval
        interval = setInterval(() => {
          setShowHand((prevState) => !prevState);
        }, 3000);
      } else {
        // If the window width is less than 916px, set showHand to true and clear any existing interval
        setShowHand(true);
        if (interval) {
          clearInterval(interval);
        }
      }
    };
  
    // Initial setup
    updateNavAndInterval();
  
    // Resize event handler
    const handleResize = () => {
      updateNavAndInterval();
    };
  
    // Add event listener
    window.addEventListener("resize", handleResize);
  
    // Cleanup function
    return () => {
      // Clear the interval and remove the event listener on unmount
      if (interval) {
        clearInterval(interval);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount
  


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

 

  return (
    <>
          <AnimatePresence mode="wait">

      {(window.scrollY > 100 || window.innerWidth <= 755) && (
        <NavBar
          className="nav-bar"
          showMenuIcon={showMenuIcon}
          setShowMenuIcon={setShowMenuIcon}
          menuDisplay={menuDisplay}
          setMenuDisplay={setMenuDisplay}
          
        />
      )}
      </AnimatePresence>

      {menuDisplay && (
        <div
          className="overlay"
          onClick={() => {
            setMenuDisplay(false);
          }}
        ></div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        className="noise-bg-content"
      >
        <div className="margin-bottom">
          <nav className="nav-maain">
            {!mainNav && (
              <>
                <div className="line"></div>

                <ul>
                  <li>
                    <Link
                      to="price"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50} // Adjust the offset based on your layout
                      duration={700}
                      className="positive-link"
                    >
                      Cenas
                    </Link>
                    <Link
                      to="price"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-50} // Adjust the offset based on your layout
                      duration={700}
                      className="negative-link"
                    >
                      Cenas
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/gallery"
                      style={{ textDecoration: "none" }}
                      className="positive-link"
                    >
                      Pakalpojumi
                    </Link>
                    <Link
                      to="pakalpojumi"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100} // Adjust the offset based on your layout
                      duration={700}
                      style={{ textDecoration: "none" }}
                      className="negative-link"
                    >
                      Pakalpojumi
                    </Link>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      style={{ textDecoration: "none" }}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-200} // Adjust the offset based on your layout
                      duration={700}
                      className="positive-link"
                    >
                      Galerija
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      style={{ textDecoration: "none" }}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-200} // Adjust the offset based on your layout
                      duration={700}
                      className="negative-link"
                    >
                      Galerija
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      to="gift-cards"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100} // Adjust the offset based on your layout
                      duration={700}
                      className="positive-link"
                    >
                      Papild info
                    </Link>
                    <Link
                      to="location"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-170} // Adjust the offset based on your layout
                      duration={700}
                      className="negative-link"
                    >
                      Papild info
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="location"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={947} // Adjust the offset based on your layout
                      duration={700}
                      className="positive-link"
                    >
                      Darba laiks
                    </Link>
                    <Link
                      to="location"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={947} // Adjust the offset based on your layout
                      duration={700}
                      className="negative-link"
                    >
                      Darba laiks
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </nav>

          <div className="main-content">
            <div className="column">
              <div className="big-title">
                <div className="line-1">
                  <span
                   
                  >
                    ATPŪTAS VIETA
                  </span>

                  <div className="line-1_welcome-content">
                    <h1>Čau !</h1>

                    <AnimatePresence mode="wait">
                      {showHand ? <Hand key='hand'/> : <Logo key='logo'/>}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="header-video">
                <video src={videoSource} autoPlay loop muted playsInline />
                <div className="welcome-content">
                       <Hand key='hand'/> 
                  </div>

                <div className="video-overlay"></div>

                <div className="h1-box">
                  <span
                    
                  >
                    GARKALNI
                  </span>

                  <div className="corner left-top"></div>
                  <div className="corner right-top"></div>
                </div>
              </div>
              <div className="main-content__socials-section">
                <a href={InstagramLink} className="socials" target="_blank">
                  <AiOutlineInstagram />
                </a>
                <a href={FacebookLink} className="socials" target="_blank">
                  <BiLogoFacebook />
                </a>{" "}
              </div>

              <div className="down-arrow-text">
                <h1>UZ LEJU</h1>
                <IoIosArrowRoundDown className="down-arrow-text_arrow-down" />
              </div>
            </div>
          </div>

          <BackToTopBtn />
          <AboutSection />
          <ServicesGarkalniSection
           
            menuDisplay={menuDisplay}
            setMenuDisplay={setMenuDisplay}
          />
          <Pricing />

          <div className="grid">
            <div className="addition-info_top-section">
              <nav>
                <ul
                  onClick={(e) =>
                    handleAdditionalInfoClick(parseInt(e.target.dataset.index))
                  }
                >
                  <li
                    className={`map_section ${
                      activeContentIndex === 0 ? "active-li" : ""
                    }`}
                    data-index={0}
                  >
                    Atrašanās vieta
                  </li>
                  <li
                    className={`gallery_section ${
                      activeContentIndex === 1 ? "active-li" : ""
                    }`}
                    data-index={1}
                  >
                    Galerija
                  </li>
                  <li
                    className={`gift-card_section ${
                      activeContentIndex === 2 ? "active-li" : ""
                    }`}
                    data-index={2}
                  >
                    Dāvanu kartes
                  </li>
                  <div
                    className="cover-li"
                    style={{
                      transform: `translateX(${activeContentIndex * 100}%)`,
                    }}
                  ></div>
                </ul>
              </nav>
            </div>
            <div className="addition-info_bottom-section">
              {activeContentIndex === 0 && <Location />}
              {activeContentIndex === 1 && <Gallery />}
              {activeContentIndex === 2 && (
                <div className="gift-cards-grid">
                  <div className="gift-cards_text">
                    <h1>
                      Dāvanu <span>karte</span>
                    </h1>
                    <p>
                      Izbaudiet dāvināšanas prieku ar mūsu daudzpusīgajām un
                      pārdomātajām dāvanu kartēm.
                    </p>
                    <SlPresent className="gift-icon" />
                  </div>
                  <div className="gift-cards_img">
                    <div className="card-img"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}

export default HomePage;
