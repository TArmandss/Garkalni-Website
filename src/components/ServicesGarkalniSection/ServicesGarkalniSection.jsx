import React, { useEffect, useState } from "react";
import "./ServicesGarkalniSection.css";
import { NavLink } from "react-router-dom";
import { GarkalniServices } from "../../services";
import { FaEuroSign } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { EmblaCarousel } from "../UI/EmblaCarousel";
import AOS from "aos";
import "aos/dist/aos";

function ServicesGarkalniSection({
  showMenuIcon,
  setShowMenuIcon,
  menuDisplay,
  setMenuDisplay,
}) {
  const firstThreeServices = GarkalniServices.slice(0, 3);
  const [padding, setPadding] = useState(true); /*Padding for IMGs*/
  const [isCarousel, setIsCarousel] =
    useState(false); /*Triggering carousel when 936px inner width*/

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 693,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const checkingWindowsWidthCarousel = () => {
      const iscarouselWidth = window.innerWidth;
      if (iscarouselWidth <= 936) {
        setIsCarousel(true);
      } else {
        setIsCarousel(false);
      }
    };

    checkingWindowsWidthCarousel();
    window.addEventListener("resize", checkingWindowsWidthCarousel);

    return () => {
      window.removeEventListener("resize", checkingWindowsWidthCarousel);
    };
  }, []);

  useEffect(() => {
    const checkingWindowsWidth = () => {
      const windowsWidth = window.innerWidth;
      if (windowsWidth <= 1088) {
        setPadding(false);
      } else {
        setPadding(true);
      }
    };

    checkingWindowsWidth();
    window.addEventListener("resize", checkingWindowsWidth);

    return () => {
      window.removeEventListener("resize", checkingWindowsWidth);
    };
  }, []);

  return (
    <div className="services-wrapper pakalpojumi">
      <div className="first-row-services">
        <div className="first-row-left-section">
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
          <span
            className="lines line_services"
            style={{ background: "#191919" }}
          ></span>
        </div>
        <div className="text-column-services">
          <h1>
            PAKALPOJUMU <br /> KLĀSTS
          </h1>
        </div>
      </div>
      <div className="services-items-section">
        <NavLink to="/services" style={{ textDecoration: "none" }}>
          <button className="more-services-button ">
            <IoIosArrowRoundForward className="right-arrow" />
            Apskatīties Vairāk
          </button>
        </NavLink>
        {isCarousel ? (
          <EmblaCarousel />
        ) : (
          <React.Fragment>
            {firstThreeServices.map((item, index) => (
              <div
                className="service-img-wrapper"
                style={{
                  top: padding ? `${(index + 1) * 5}rem` : 0,
                }}
              >
                <div
                  key={index}
                  className="service-img"
                  style={{
                    backgroundImage: `url(${item.language.lv.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="service_info">
                    <div className="service-name">
                      <button className="initial-btn-txt">
                        {item.language.lv.name}
                      </button>
                      <button className="negative-btn">
                        {item.language.lv.name}
                      </button>
                    </div>
                    <div className="pop-up-text">
                      <h1>{item.language.lv.description}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default ServicesGarkalniSection;
