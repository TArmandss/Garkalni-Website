import React, { useEffect, useState } from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { motion } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Footer() {
  const [phoneWide, setPhoneWide] = useState(false);
  const [expandWorkingHours, setExpandWorkingHours] = useState(false);
  const [expandInfo, setExpandInfo] = useState(false);

  const InstagramLink =
    "https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==";
  const FacebookLink = "https://www.facebook.com/atputasvieta.garkalni";

  useEffect(() => {
    const updateNav = () => {
      const isPhoneWide = window.innerWidth <= 735;
      if (isPhoneWide) {
        setPhoneWide(true);
      } else if (!isPhoneWide) {
        setPhoneWide(false);
      }
    };

    // Initial call
    updateNav();

    // Event listener for window resize
    window.addEventListener("resize", updateNav);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  function expandInfoHandler(state) {
    if (state === "expandedInfo") {
      setExpandInfo((expandInfo) => !expandInfo);
    } else if (state === "expandedWorkingHours") {
      setExpandWorkingHours((expandWorkingHours) => !expandWorkingHours);
    }
  }

  return (
    <motion.div
      className={`noise-footer ${
        expandWorkingHours || expandInfo ? "expanded" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.3,
      }}
    >
      <div className="footer-lay-out contacts">
        <div
          className={`footer ${
            expandWorkingHours || expandInfo ? "expanded" : ""
          }`}
        >
          <div className="information info">
            <div className="info-title">
              <h1
                onClick={
                  phoneWide ? () => expandInfoHandler("expandedInfo") : null
                }
              >
                INFORMĀCIJA{" "}
              </h1>
            </div>
            <div
              className={`display-info site-map ${
                expandInfo ? "expanded" : " "
              }`}
            >
              <Link
                to="price"
                spy={true}
                smooth={true}
                offset={-0} 
                duration={500}
              >
                <h1>Cenas</h1>
              </Link>
              <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-300} 
                duration={500}
              >
                <h1>Pakalpojum</h1>
              </Link>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-0} 
                duration={500}
              >
                <h1>Galerija</h1>
              </Link>
              <NavLink to="/gallery" style={{ textDecoration: "none" }}>
                <h1>Papild info</h1>
              </NavLink>
              <Link spy={true} smooth={true} offset={-10000} duration={500}>
                <h1>Darba laiks</h1>
              </Link>
            </div>
          </div>
          <div className="contact-information info">
            <div className="info-title">
              <h1>KONTAKT INFORMĀCIJA</h1>
            </div>
            <div className="display-info">
              <h1>''Garkolni'', Maltas pagasts, Rēzeknes novads</h1>
              <h1 className="underline">Garkalni20@inbox.lv</h1>
              <h1 className="strong">+371 28347505 - Sanita</h1>
              <h1 className="strong">+371 26516803 - Gunārs</h1>
              <div id="follow-us-title">
                <a href={InstagramLink} target="_blank">
                  <AiOutlineInstagram className="social-icons" />
                </a>
                <a href={FacebookLink} target="_blank">
                  <BiLogoFacebook className="social-icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="schedule info">
            <div className="info-title">
              <h1
                onClick={
                  phoneWide
                    ? () => expandInfoHandler("expandedWorkingHours")
                    : null
                }
              >
                DARBA LAIKS{" "}
              </h1>
            </div>

            <div
              className={`display-info working-schedule ${
                expandWorkingHours ? "expanded" : " "
              }`}
            >
              <ul className="working-hours">
                <li>
                  <p>Pirmdiena</p>
                  <div className="dots"></div>
                  <span>Brīvdiena</span>
                </li>
                <li>
                  <p>Otr. - svētd.</p>
                  <div className="dots"></div>
                  <span>11:00 - 17:00</span>
                </li>
                <li>
                  <p>
                    Pēc 17:00 tikai pēc ieprikšēja pieraksta <IoIosCall />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-section-footer">
          <h1>© 2024, Atpūtas vieta Garkalni </h1>
          <span style={{ color: "white", fontSize: "1.5rem" }}>/</span>
            <a className="created-author" href="mailto:taskansarmands@gmail.com">Developed by Armands</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
