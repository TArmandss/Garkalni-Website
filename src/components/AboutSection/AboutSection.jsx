import React from "react";
import "./AboutSection.css";
import { FiCheck } from "react-icons/fi";

function AboutSection() {
  const socialLinks = {
    Instagram: "https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==",
    Facebook: "https://www.facebook.com/atputasvieta.garkalni",
  };

  return (
    <div className="about-section">
      <div className="left-section__about_us">
        <div className="left-section_about_us_padding">
          <h1 className="about-us__title">
            <span className="founded-title">DIBINĀTS 2020</span>
            Par mums
          </h1>
          <p className="about-us__text">
            Atpūtas vieta “Garkalni” ir ideāls piedāvājums kā pavadīt laiku
            atpūšoties, vai pat izaicinot savus spēkus atrodoties pie dabas.
          </p>
          <ul className="about-list">
            <li>
              <FiCheck style={{ color: "#31572c", width: 20, height: 20 }} />{" "}
              Mēs esam sertificēti instruktori
            </li>
            <li>
              <FiCheck style={{ color: "#31572c", width: 20, height: 20 }} />{" "}
              Galvenā priritāte ir mūsu apmeklētāju apmie
            </li>
            <li>
              <FiCheck style={{ color: "#31572c", width: 20, height: 20 }} />{" "}
              ...
            </li>
          </ul>
        </div>
      </div>
      <div className="right-section__about_us">
        <div className="img-one"></div>
        <div className="img-two"></div>
      </div>
    </div>
  );
}

export default AboutSection;
