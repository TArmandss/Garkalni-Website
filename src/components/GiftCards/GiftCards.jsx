import React from 'react'
import './GiftCards.css'

function GiftCards() {
  return (
    <div className='gift-cards-section gift-cards'>
    
      <div className="gift-card-description">
            <h1>Dāvanu <span>karte</span></h1>
<p>Izbaudiet dāvināšanas prieku ar mūsu daudzpusīgajām un pārdomātajām dāvanu kartēm. Neatkarīgi no tā, vai jūs svinat kādu īpašu notikumu, paužat savu atzinību vai vienkārši uzcienāt kādu ar prieku, mūsu dāvanu kartes ir ideāls veids, kā izplatīt laimi.</p>            
      </div>
 
      <div className="gift-card-photo-section">
        <div className="gift-card-photo"></div>
      </div>
      {/* <h5>Gift <span>Card</span></h5> */}

    </div>
  )
}

export default GiftCards