import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";
import { GarkalniServices } from "../../services";
import { motion } from "framer-motion";
import { FaEuroSign } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Pricing() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start', skipSnaps: false }, [Autoplay()]);

 useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    AOS.init({ duration: 1000 });

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const lvServices = GarkalniServices.filter(
    (service) => service.language && service.language.lv
  );

  return (
    <div className="noise-bg-pricing-section">
      <div className="pricing-section price">
        <div className="second-row-x">
          <div className="text-column">
            <h1>
              PAKALPOJUMU <br /> CENAS
            </h1>
          </div>

          <div className="line-column">
            {Array.from({ length: 13 }, (_, index) => (
              <span className="lines" key={index}></span>
            ))}
          </div>
        </div>

        <div ref={emblaRef} className="carousel">
          <div
            className="inner-carousel"
            
          >
            {lvServices.map(
              (service) =>
                service.language.lv.name !== "SAJŪTU TAKA" && (
                  <motion.li className="carousel-item" key={service.index}>
                    {service.language.lv.exceptions && (
                      <p className="service_exception">
                        {service.language.lv.exceptions}
                      </p>
                    )}
                    <div className="li-wrap">
                      {service.language.lv.price && (
                        <div className="pricing_container">
                          {Object.entries(service.language.lv.price).map(
                            ([key, value]) => (
                              <div key={key} className={key ? "price_column" : null}>
                                <div className="pricing_box">
                                  <h1>€{value}</h1>
                                </div>
                                <p style={{ lineHeight: service.language.lv.name === "MAZĀ KOKU TRASE" || service.language.lv.name === "PIKNIKA VIETA" ? "2" : "2" }}>{key}</p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                      <div className="li-wrap_bottom-content">
                        <h1 className="service_name">
                          {capitalizeFirstLetter(service.language.lv.name)}
                        </h1>
                        {service.language.lv.icon &&
                          React.cloneElement(service.language.lv.icon, {
                            className: "iconss",
                          })}
                      </div>
                    </div>
                  </motion.li>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
