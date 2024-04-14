import React from 'react';
import './ServiceItem.css';
import { motion } from 'framer-motion';

function ServiceItem({ image, title, index, description, setBackground, setIsActive, currentIndex, setHideBtnSection }) {

  const handlingBackground = () => {
    setBackground(prevBackground => ({
      ...prevBackground,
      lv: {
        ...prevBackground.lv,
        background: process.env.PUBLIC_URL + image,
        name: title,
        description: description
      }
    }));
    setIsActive(true);
    setHideBtnSection(false)
    
  };

  return (
    <motion.div className={`item box ${currentIndex === index ? "active-slide" : "slide"}`} onClick={handlingBackground}>
      <h1 className='service-title'>
        <span className='title-line'></span>
        {title}
      </h1>
      <div className="item-inner">
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
}

export default ServiceItem;