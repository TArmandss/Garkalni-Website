import React, { useEffect,useState } from 'react'
import './NavBar.css'
import { IoIosArrowDown } from 'react-icons/io'
import { BiMenuAltLeft } from 'react-icons/bi'
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'

function NavBar({onResponsiveNavBar}) {

  const [navBarDiv , setNavBarDiv] = useState("nav")
  const [hamburgerMenuPopUp , setHamburgerMenuPopUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 931) {
        setHamburgerMenuPopUp(true)
      } else if(window.innerWidth > 931){
        setHamburgerMenuPopUp(false)
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



 
  const slideInNavigationBarHandler = (value) => {
    onResponsiveNavBar(value => !value)
  };


  useEffect(() => {
    const navBarHanler = () => {
      if (window.scrollY > 10) {
        setNavBarDiv("changed-nav")
      }else{
        setNavBarDiv("nav")
      }
    };

    window.addEventListener("scroll", navBarHanler);

    return () => {
      window.removeEventListener("scroll", navBarHanler);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'just', duration: 0.4, delay: 0.2 }}
      className={navBarDiv} // Add className attribute here
    >
      <div className="navbar-left-side">
        {hamburgerMenuPopUp && 
        <div className="menu" onClick={slideInNavigationBarHandler}><BiMenuAltLeft/></div>
        }
        
      </div>
      <nav>
        <ul>
          <li>
            <Link to="price"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50} // Adjust the offset based on your layout
              duration={700}>
              <a href="">CENAS</a>
            </Link>
          </li>

          <li>
            <NavLink to="/gallery">
              <a href="">GALERIJA</a>
            </NavLink>
          </li>
          <li>
            <Link to="location"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-200} // Adjust the offset based on your layout
              duration={700}>
              <a href="">ATRAŠANĀS VIETA</a>
            </Link>
          </li>
          <li>
            <Link to="gift-cards"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100} // Adjust the offset based on your layout
              duration={700}>
              <a href="">DĀVANU KARTES</a>
            </Link>
          </li>
          <li>
            <Link to="contacts"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset based on your layout
              duration={700}>
            
              <a href="">KONTAKTI</a>
            </Link>
          </li>
          <li>
            <Link to="contacts"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset based on your layout
              duration={700}>
              <a href="">DARBA LAIKS</a>
            </Link>
          </li>
          {/* <button>
            LV <IoIosArrowDown />
          </button> */}
        </ul>
      </nav>
    </motion.div>
  );
}

export default NavBar;