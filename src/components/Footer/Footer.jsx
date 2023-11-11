import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'

import { Link } from 'react-scroll'
import {NavLink} from 'react-router-dom'

function Footer() {

   const InstagramLink = 'https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==';
   const FacebookLink = 'https://www.facebook.com/atputasvieta.garkalni';

  return (
   <div className = "footer-lay-out contacts">
    <div className='footer'>
     <div className="information info">
        <div className="info-title">
            <h1>Informācija</h1>
        </div>
        <div className="display-info site-map">
         <Link to='price'
          spy={true}
          smooth={true}
          offset={-0} // Adjust the offset based on your layout
          duration={500}>
         <h1>Pakalpojumi</h1>
         </Link>
         <Link to='location'
          spy={true}
          smooth={true}
          offset={-300} // Adjust the offset based on your layout
          duration={500}>
         <h1>Lokācija</h1>
         </Link>
         <Link to='contacts'
          spy={true}
          smooth={true}
          offset={-0} // Adjust the offset based on your layout
          duration={500}>
         <h1>Kontakti</h1>
         </Link>
         <NavLink to="/gallery" style={{ textDecoration: 'none' }}>
              <h1>Galerija</h1>
            </NavLink>
         <Link to='about-us'
          spy={true}
          smooth={true}
          offset={-0} // Adjust the offset based on your layout
          duration={500}>
         <h1>Par mums</h1>
         </Link>
            {/* <h1>Atsauksmes</h1> */}
        </div>
     </div>
     <div className="contact-information info">
     <div className="info-title">
        <h1>Kontakt informācija</h1>
     </div>
     <div className="display-info">
        <h1>''Garkalni'', Maltas pagasts, Rēzeknes novads</h1>
           <h1 className='underline'>Garkalni20@inbox.lv</h1>
           <h1 className='strong'>+371 28347505</h1>
           <h1 className='strong'>+371 26516803</h1>
           <div id='follow-us-title'>
           <a href={InstagramLink} target='_blank'>
  <AiOutlineInstagram className='social-icons'/>
</a>
<a href={FacebookLink} target='_blank'>
  <BiLogoFacebook className='social-icons' />
</a>
    
         </div>
        </div>
     </div>
    
     <div className="schedule info">
     <div className="info-title">
        <h1>Darba laiks</h1>
     </div>

     <div className="display-info working-schedule">

<ul className='working-hours'>
   <li>
      <p>Pirmdiena</p>
      <div className='dots'></div>
      <span>Slēgts</span>
   </li>
   <li>
      <p>Otrdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
   <li>
      <p>Trešdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
   <li>
      <p>Ceturdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
   <li>
      <p>Piekdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
   <li>
      <p>Sesdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
   <li>
      <p>Svētdiena</p>
      <div className='dots'></div>
      <span>11:00 - 20:00</span>
   </li>
</ul>

        </div>
     </div>
    </div>
     <div className="bottom-section-footer">
      <h1>© 2023, Atpūtas vieta Garkalni</h1>
     </div>
    </div>
  )
}

export default Footer