import React, { useEffect } from 'react';
import './Intro.css';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function Intro({ setIsLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true); // Change to false when the loading is done
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIsLoading]);

  const introAnimation = {
    hidden: { y: -500 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: { opacity: 0, y: 200 },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={introAnimation}
      className='intro_page'
    >
      <div className="intro-text">
        {/* Use the motion component to animate the h1 */}
        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{delay: .6}}>
          Atpūtas vieta Garkalni
        </motion.h1>
      </div>
      {/* <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </motion.div>
  );
}

export default Intro;