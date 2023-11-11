import React, { useEffect } from 'react'
import './Gallery.css'
import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function Gallery() {

  return (
    <div className='gallery-section'>
    <div className="gallery-title-section">
        <h1>GALERIJA</h1>
     <NavLink to='gallery' className="Button">
       apskatīties <IoIosArrowForward/>
     </NavLink>
    </div>
    </div>
  )
}

export default Gallery