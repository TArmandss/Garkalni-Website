import React from "react";
import "./NavBar.css";
import {  motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function HamburgerMenu({ setMenuDisplay }) {
 
  return (




      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "tween" }}
        exit={{ opacity: 0, y: -20, scale: 0 }}
        className="menu-nav"
        onClick={() => setMenuDisplay((state) => !state)}
        >
        <div className="menu_p">
          <p className="positive-p">MENU</p>
          <p className="negativi-p">MENU</p>
        </div>

        <HiOutlineMenuAlt4 className="menu-nav-icon" />
        
      </motion.div>
      

  );
}

export default HamburgerMenu;
