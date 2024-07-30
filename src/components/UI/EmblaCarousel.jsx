import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GarkalniServices } from "../../services";
import "./EmblaCarousel.css";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start', skipSnaps: false }, [Autoplay()]);
  const firstThreeServices = GarkalniServices.slice(0, 3);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {firstThreeServices.map((service, index) => (
          <div className="embla__slide service-img-wrapper" key={index}>
            <div
              className="service-img"
              style={{
                backgroundImage: `url(${service.language.lv.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="service_info">
                <div className="service-name">
                  <button className="initial-btn-txt">
                    {service.language.lv.name}
                  </button>
                  <button className="negative-btn">
                    {service.language.lv.name}
                  </button>
                </div>
                <div className="pop-up-text">
                  <h1>{service.language.lv.description}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
