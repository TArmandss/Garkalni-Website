import React, { useEffect } from "react";
import { GarkalniServices } from "../../services";
import "./AllServices.css";
import { IoArrowBackOutline } from "react-icons/io5";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
function AllServices({

  menuDisplay,
  setMenuDisplay,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="all-services-main-content services">
      {menuDisplay && (
        <div
          className="overlay"
          onClick={() => {
            setMenuDisplay(false);
          }}
        ></div>
      )}

      <div className="services_content">
    
        <div
          className="menu-nav"
          onClick={() => {
            navigate(-1);
          }}
        >
          <div className="menu_p">
            <p className="positive-p">
              <IoArrowBackOutline className="back-home-icon" />
            </p>
            <p className="negativi-p">
              <IoArrowBackOutline className="back-home-icon" />
            </p>
          </div>
        </div>
        <div className="top-picture">
          <div className="all-top-section">
            <h1 className="services_title">
              PAKALPOJUMU KLĀSTS{" "}
              <span className="line" style={{ width: "60%" }}></span>
            </h1>
          </div>
        </div>

        <div className="all-main-section-services">
          {GarkalniServices.map((item, index) => (
            <>
              <div className="service-details">
                <div className="service-info_top-content">
                  <h1>{item.language.lv.name}</h1>
                  {item.language.lv.description && (
                    <p>{item.language.lv.description}</p>
                  )}
                </div>
                  <img
                    key={index}
                    className="all-items"
                    style={{
                      backgroundImage: `url(${item.language.lv.img}) `,
                    }}
                    loading="lazy"
                  />
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllServices;
