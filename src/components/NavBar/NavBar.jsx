import React, { useEffect } from "react";
import "./NavBar.css";
import { IoMdClose } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useLocation } from "react-router-dom";
import { LuEuro, LuClipboardList, LuImage, LuInfo } from "react-icons/lu";
import { MdOutlineSchedule } from "react-icons/md";

function NavBar({ menuDisplay, setMenuDisplay }) {
  const location = useLocation();

  useEffect(() => {
    if (menuDisplay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [menuDisplay]);

  const handleClick = () => {
    setMenuDisplay(false);
    // Redirect only if current location is not home ('/')
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <div className={`extended-menu ${menuDisplay ? "active" : "closed"}`}>
          {menuDisplay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <IoMdClose
                onClick={() => setMenuDisplay(false)}
                style={{
                  position: "absolute",
                  zIndex: "99999",
                  cursor: "pointer",
                  top: "2rem",
                  right: "2rem",
                  fontSize: "5rem",
                  color: "var(--color-green)",
                  background: "white",
                  borderRadius: "50%",
                  padding: "1.5rem",
                }}
              />
            </motion.div>
          )}
          {menuDisplay && (
            <div className="extended-menu_content">
              <motion.h1
                initial={{ x: "-10rem", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5,
                }}
                exit={{ x: "-10rem", opacity: 0 }}
                className="extended-menu_title"
              >
                Navigācija
              </motion.h1>
              <motion.ul
                initial={{ x: "-20rem" }}
                animate={{ x: "0" }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5,
                }}
                exit={{ x: "-20rem" }}
                className="extended-menu_ul"
              >
                <li>
                  <Link
                    to="price"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50} // Adjust the offset based on your layout
                    duration={700}
                    className="positive-link"
                    onClick={handleClick}
                  >
                    <LuEuro /> Cenas
                  </Link>
                  <Link
                    to="price"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50} // Adjust the offset based on your layout
                    duration={700}
                    className="negative-link"
                    onClick={handleClick}
                  >
                    <LuEuro /> Cenas
                  </Link>
                </li>
                <li>
                  <Link
                    to="pakalpojumi"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-200} // Adjust the offset based on your layout
                    duration={700}
                    className="positive-link"
                    onClick={handleClick}
                  >
                    <LuClipboardList /> Pakalpojumi
                  </Link>
                  <Link
                    to="pakalpojumi"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-200} // Adjust the offset based on your layout
                    duration={700}
                    className="negative-link"
                    onClick={handleClick}
                  >
                    <LuClipboardList /> Pakalpojumi
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    style={{ color: "white", textDecoration: "none" }}
                    className="positive-link"
                    onClick={handleClick}
                  >
                    <LuImage /> Galerija
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    style={{ color: "white", textDecoration: "none" }}
                    className="negative-link"
                    onClick={handleClick}
                  >
                    <LuImage /> Galerija
                  </NavLink>
                </li>

                <li>
                  <Link
                    to="location"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100} // Adjust the offset based on your layout
                    duration={700}
                    className="positive-link"
                    onClick={handleClick}
                  >
                    <LuInfo /> Papild info
                  </Link>
                  <Link
                    to="location"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100} // Adjust the offset based on your layout
                    duration={700}
                    className="negative-link"
                    onClick={handleClick}
                  >
                    <LuInfo /> Papild info
                  </Link>
                </li>

                <li>
                  <Link
                    to="location"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={974} // Adjust the offset based on your layout
                    duration={700}
                    className="positive-link"
                    onClick={handleClick}
                  >
                    <MdOutlineSchedule /> Darba laiks
                  </Link>
                  <Link
                    to="location"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={974} // Adjust the offset based on your layout
                    duration={700}
                    className="negative-link"
                    onClick={handleClick}
                  >
                    <MdOutlineSchedule /> Darba laiks
                  </Link>
                </li>
              </motion.ul>
              <motion.div
                initial={{ x: "-40rem" }}
                animate={{ x: "0" }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5,
                }}
                exit={{ x: "-40rem" }}
                className="section-social-icons"
              >
                <span className="nav-line"></span>
                <div className="nav-line_social-icons">
                  <a
                    href="https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineInstagram className="nav-menu-active_instagram-icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/atputasvieta.garkalni"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoFacebook className="nav-menu-active_facebook-icon" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </AnimatePresence>

      <HamburgerMenu key="hamburger-menu" setMenuDisplay={setMenuDisplay} />
    </>
  );
}

export default NavBar;
