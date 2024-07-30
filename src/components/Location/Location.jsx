import React, { useState } from "react";
import "./Location.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CiLocationOn } from "react-icons/ci";
import { Icon } from "leaflet";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

function Location() {
  
  
  const [displayLocation, setDisplayLocation] = useState(false);
  const initialCoordinates = [56.3267, 27.1292]; // Initial latitude and longitude
  const customIcon = new Icon({
    iconUrl:
      process.env.PUBLIC_URL + "/assets/images/green-location-marker.png",
    iconSize: [60, 52], // Replace with the desired width and height of the icon
  });

  function mapHandler() {
    setDisplayLocation((state) => !state);
  }

  return (
    <AnimatePresence>
      <div className="location-content location">
        <div className="location-left-content">
          <h1>ATRAŠANĀS VIETA</h1>
          <p>Garkalni, Maltas pagasts, Rezekne, Latvia</p>
          <button className="triger-location-btn" onClick={mapHandler}>
            <a>
              {displayLocation ? (
                <span>
                  <IoIosArrowBack />
                </span>
              ) : (
                <span>
                  Karte <CiLocationOn className="location-icon" />
                </span>
              )}
            </a>
          </button>
        </div>

        {displayLocation && (
          <div
           
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="location-section"
          >
            <MapContainer
            
              className="maps"
              center={initialCoordinates}
              zoom={13}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={initialCoordinates} icon={customIcon}>
                <Popup>
                  A marker with coordinates:
                  <br />
                  Latitude: {initialCoordinates[0]}
                  <br />
                  Longitude: {initialCoordinates[1]}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default Location;
