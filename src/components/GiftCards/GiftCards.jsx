import React from "react";
import "./GiftCards.css";
import { FaGift } from "react-icons/fa";
function GiftCards() {
  return (
    <div className="gift-cards-section gift-cards">
      <div className="gift-card-top-section">
        <h1>Meklē ideju dāvanai ?</h1>
      </div>
      <div className="gift-card-bottom-section">
        <div className="gift-card-description">
          <FaGift className="gift-icon" />
          <h1>Dāvanu karte</h1>
          <p>
            Izbaudiet dāvināšanas prieku ar mūsu daudzpusīgajām un pārdomātajām
            dāvanu kartēm. Neatkarīgi no tā, vai jūs svinat kādu īpašu notikumu,
            paužat savu atzinību vai vienkārši uzcienāt kādu ar prieku, mūsu
            dāvanu kartes ir ideāls veids, kā izplatīt laimi.
          </p>
        </div>
      </div>

      {/* <h5>Gift <span>Card</span></h5> */}
    </div>
  );
}

export default GiftCards;
