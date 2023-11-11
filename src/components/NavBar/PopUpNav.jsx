import React from 'react'
import './PopUpNav.css'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion';

const InstagramLink = 'https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==';
const FacebookLink = 'https://www.facebook.com/atputasvieta.garkalni';

 function PopUpNav({onResponsiveNavBar}) {

  function closeSideMenu(){
    onResponsiveNavBar(value => !value)
  }
  
  return (
    <div className='nav-bar-display'>
              <AnimatePresence mode='wait'>

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}

    className='slide-in-nav'>
    <motion.div
        exit={{ opacity: 0, x: -300 }}

    className='close-nav-bar'>
      <AiOutlineClose className='close-nav-button' onClick={closeSideMenu}/>
     </motion.div>
     <nav>
      <ul>
        <li><a href="">PAR MUMS</a></li>
        <li><a href="">CENAS</a></li>
        <li><a href="">ATRAŠANĀS VIETA</a></li>
        <li><a href="">GALERIJA</a></li>
        <li><a href="">DĀVANU KARTES</a></li>
      </ul>
     </nav>
     <div className='side-menu_icon-section'>
      <a href={FacebookLink} target='_blank'>
      <BiLogoFacebook  className='side-menu_social_icon' />
      </a>
    <a  href={InstagramLink} target='_blank' >
    <AiOutlineInstagram className='side-menu_social_icon ' />
    </a>
    <h1>Sociālie tīkli</h1>
  </div>
     </motion.div>
     </AnimatePresence>

    </div>
  )
}

export default PopUpNav;