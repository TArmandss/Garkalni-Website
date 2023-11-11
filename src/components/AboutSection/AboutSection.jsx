import React from 'react';
import './AboutSection.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

function AboutSection() {
  const socialLinks = {
    Instagram: 'https://instagram.com/garkalni20?igshid=MzRlODBiNWFlZA==',
    Facebook: 'https://www.facebook.com/atputasvieta.garkalni'
  };

  return (
    <div className='about-section'>
      <div className="left-section__about_us">
        <div className="left-section_about_us_padding">

        <h1 className='founded-title'>DIBINĀTS 2020</h1>
        <h1 className='about-us__title'>PAR MUMS</h1>
        <p className='about-us__text'>Atpūtas vieta “Garkalni” ir ideāls piedāvājums kā pavadīt laiku atpūšoties, vai pat izaicinot savus spēkus atrodoties pie dabas. Par jūsu labsajūtu ir atsaucīgi, atbildīgi instruktori, kuri parūpēsies par jūsu labsajūtu.
</p>
<ul className='about-list'>
  <li>asdadassdas</li>
  <li>asdadassdas</li>
  <li>asdadassdas</li>
</ul>
        </div>
      </div>
      <div className="right-section__about_us"></div>
    </div>
  );
}

export default AboutSection;


