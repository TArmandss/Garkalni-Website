import React from "react";
import "./AboutSection.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

function AboutSection() {
 

  return (
    <div className="about-section-wrapper">
      <div className="noise">
        <div className="about-section-grid">
          <div className="logo-section">
            <h1>1. maijs - 15. oktobris (Sezona)</h1>
            <h1>10% atlaide sākot no 6 cilvēkiem</h1>
            <h1>Sliktos laika apstākļos nestrādājam</h1>
          </div>
          <div className="about-section">
            <div className="left-about-us-section">
              <div className="img"></div>
            </div>
            <div className="right-about-us-section">
              <h1>Par mums</h1>
              <p>
                Atpūtas vieta 'Garkalni' piedāvā aktīvu atpūtu, kur varat
                pilnībā izbaudīt brīvo laiku izmantojot mūsu plašo pakalpojumu
                klāstu, kas regulāri paplašinās un pilnveidojas.
              </p>

              <div className="noise-btn-wrapper">
                <Link
                  to="location"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-200} 
                  duration={700}
                >
                  <button>
                    Galerija
                    <IoIosArrowRoundForward style={{ fontSize: "2em" }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
