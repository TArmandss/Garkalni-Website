import React, { useRef } from "react";
import "./OfferList.css";
import ServiceItem from "./ServiceItem";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GarkalniServices } from "../../services";

export default function OfferList({
  GarkalniServices,
  length,
  width,
  setBackground,
  background,
  carousel,
  setHideBtnSection,
  currentIndex,
  offset,
  setCurrentIndex,
  setIsActive,
  nextSlide,
  prevSlide,
}) {
  return (
    <div className="offer-list">
      <div ref={carousel} className="carousel-new">
        <motion.div
          // drag="x"
          dragConstraints={{ right: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: offset }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="inner-carousel-new"
          style={{ width: `${length * 100}%` }}
        >
          {GarkalniServices.map((service, index) => (
            <motion.div
              className={`item-new box-new ${
                currentIndex === index ? "active-slide-new" : "slide-new"
              }`}
            >
              <h1 className="service-title">
                <span className="title-line"></span>
                {service.language.lv.name} 
              </h1>
              <div className="item-inner-new">
                <img
                  src={service.language.lv.img}
                  alt={service.language.lv.name}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="button_section">
        <IoIosArrowBack className="arrow-icon-new" onClick={prevSlide} />
        <IoIosArrowForward className="arrow-icon-new" onClick={nextSlide} />
      </div>
    </div>
  );
}
