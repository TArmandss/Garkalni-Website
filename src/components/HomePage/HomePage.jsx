import React, { useRef, useEffect, useState } from 'react';
import './HomePage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-scroll';
import Marquee from 'react-fast-marquee';

import NavBar from '../NavBar/NavBar';
import { GarkalniServices } from '../../services';
import ServiceItem from './ServiceItem';
import AboutSection from '../AboutSection/AboutSection';
import Location from '../Location/Location';
import Intro from '../Intro/Intro';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import BackToTopBtn from '../../BackToTopBtn';
import GiftCardsSection from '../GiftCards/GiftCards';
import PopUpNav from '../NavBar/PopUpNav';

function HomePage() {
  const [hideBtnSection, setHideBtnSection] = useState(true);
  const [responsiveNavBar, setResponsiveNavBar] = useState(false);

  const carousel = useRef();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = GarkalniServices.length;
  const [background, setBackground] = useState({
    lv: {
      background: process.env.PUBLIC_URL,
      name: '',
      description: '',
      price: '',
      exceptions: '',
    },
    en: {
      background: process.env.PUBLIC_URL,
      name: '',
      description: '',
      price: '',
      exceptions: '',
    },
    rus: {
      background: process.env.PUBLIC_URL,
      name: '',
      description: '',
      price: '',
      exceptions: '',
    },
  });

// useEffect(()=>{
//   console.log(window.innerWidth)
// },[window.innerWidth])


  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  useEffect(() => {
    if (carousel.current) {
      if (currentIndex >= 3) {
        setOffset(-currentIndex * 200);
      } else if (currentIndex > 9) {
        setOffset(-currentIndex * 10);
      } else {
        setOffset(-currentIndex * 100);
      }
    }
  }, [currentIndex, width]);

  useEffect(() => {
    // Set the background based on the selected language (in this case, 'lv')
    setBackground((prevBackground) => ({
      ...prevBackground,
      lv: {
        ...prevBackground.lv,
        background: process.env.PUBLIC_URL + '/assets/images/garkalnibg.png',
        name: 'ATPŪTAS VIETA GARKALNI',
        description:
          'Atpūtas vieta ”Garkalni” piedāvā jautri, aktīvi un ar baudu pavadīt savu brīvo laiku atrodoties pie dabas.',
      },
    }));
  }, []);

  if (!Array.isArray(GarkalniServices) || GarkalniServices.length <= 0) {
    return null;
  }

  const divStyle = {
    background: `url(${background.lv.background}) no-repeat fixed center / cover`,
    width: '100%',
    height: '100%',
  };
  const handleResponsiveNavBar = (value) => {
    setResponsiveNavBar(value);
   
  };

  return (
    <>
      {responsiveNavBar && <PopUpNav onResponsiveNavBar={handleResponsiveNavBar}/>}
      {!isLoading === true ? (
        <Intro setIsLoading={setIsLoading} isLoading={isLoading} />
      ) : (
        <>
         <AnimatePresence mode='wait'>
            {isActive && (
              <motion.div
                key={background.lv.name} // Use the name as the key
                className="expanded-view"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={divStyle}
              ></motion.div>
            )}
          </AnimatePresence>


          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}
            className="wrapper"
            style={{backgroundImage: `url(${background.lv.background}) no-repeat fixed center / cover`}}
            width={100}
            height={100}
          >
            <div className="announcement-bar">
              <Marquee speed={60} gradient={false}>
                <div className="announcement-bar__item">
                  <span className="announcement-bar__item__circle"></span>
                  <p>
                    <strong>10% atlaide sākot no 6 cilvēkiem</strong>
                  </p>
                </div>
                <div className="announcement-bar__item">
                  <span className="announcement-bar__item__circle"></span>
                  <p>
                    <strong>Pēdējo cilvēku lielā piedzīvojumu trasē laižam 18:00</strong>
                  </p>
                </div>
                <div className="announcement-bar__item">
                  <span className="announcement-bar__item__circle"></span>
                  <p>
                    <strong>Sezona: 1. maijs - 15. oktobris</strong>
                  </p>
                </div>
              </Marquee>
            </div>

            <NavBar className="nav-bar"
            onResponsiveNavBar={handleResponsiveNavBar} // Pass the callback function
             />

            <div className="main-content">
              <div className="left-content">
                <div className={`${hideBtnSection ? 'left-content-grid' : 'changed-layout'}`}>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`item-title ${isActive ? 'active' : ''}`}
                  >
                    {background.lv.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    {background.lv.description}
                  </motion.p>

                  {hideBtnSection ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="btn-section"
                    >
                      <Link
                        to="about-us"
                        className="button"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0} // Adjust the offset based on your layout
                        duration={500}
                      >
                        <a>
                          <span> PAR MUMS</span>
                        </a>
                      </Link>
                    </motion.div>
                  ) : (
                    ' '
                  )}
                </div>
              </div>

              <div className="right-content">
                <motion.div ref={carousel} className="drag-box carousel">
                  <motion.div
                    // drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: offset }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="inner-carousel"
                    style={{ width: `${length * 100}%` }}
                  >
                    {GarkalniServices.map((service, index) => (
                      <ServiceItem
                        key={index} // Corrected the key attribute here
                        image={service.language.lv.img}
                        title={service.language.lv.name}
                        index={index} // Corrected the index attribute here
                        setBackground={setBackground}
                        background={background}
                        description={service.language.lv.description}
                        setIsActive={setIsActive}
                        setCurrentIndex={setCurrentIndex}
                        currentIndex={currentIndex}
                        setHideBtnSection={setHideBtnSection}
                      />
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="arrows-section"
                >
                  <IoIosArrowBack className="arrow-icon" onClick={prevSlide} />
                  <IoIosArrowForward className="arrow-icon" onClick={nextSlide} />
                  <span className="line line-one"></span>
                  <p>{`${currentIndex + 1}`}</p> {/* Add +1 to display the correct slide number */}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <BackToTopBtn />
          <AboutSection />
          <Location />
          <Pricing />
          <Gallery />
          <GiftCardsSection />
          <Footer />
        </>
      )}

    </>
  );
}

export default HomePage;