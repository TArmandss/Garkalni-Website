import React, { useEffect, useState } from "react";
import "./Location.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CiLocationOn } from "react-icons/ci";
import { Icon } from "leaflet";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoExpandSharp } from "react-icons/io5";
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

  const [showExpandMap, setShowExpandMap] = useState(false);
  const [changeMapWidth, setChangeMapWidth] = useState(false);

  useEffect(() => {
    const extendMapHandler = () => {
      setShowExpandMap(window.innerWidth <= 885);
    };

    // Initial checks
    extendMapHandler();

    // Add event listeners
    window.addEventListener("resize", extendMapHandler);

    // Cleanup
    return () => {
      window.removeEventListener("resize", extendMapHandler);
    };
  }, []);

  return (
    <>
      <div className="location-content location">
        <div className="decorbox">Lokācija</div>
        {/* <AnimatePresence> */}
        <div
          // initial={{ x: "100%" }}
          // animate={{ x: 0 }}
          // exit={{ x: "100%" }}
          // transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
          className="location-section"
        >
          <div className="maps-left-side">
            <div className="maps-left-side_first-row">
              <p className="location-title">Adrese</p>
              <h6>
                <span>
                  <IoLocationSharp />
                </span>{" "}
                Garkolni, Maltas pagasts, Rēzeknes novads
              </h6>
            </div>
            <div className="maps-left-side_second-row">
              <p className="location-title">Kontakti</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  alignSelf: "center",
                }}
              >
                <h6>
                  <span>
                    <FaPhoneSquareAlt />
                  </span>{" "}
                  +371 28347505
                </h6>
                <h6>
                  <span>
                    <FaPhoneSquareAlt />
                  </span>{" "}
                  +371 26516803
                </h6>
              </div>
            </div>
            <div className="maps-left-side_third-row">
              <p className="location-title">E-mail</p>
              <h6>
                <span>
                  <IoMdMail />
                </span>{" "}
                Garkalni20@inbox.lv
              </h6>
            </div>
          </div>

        <div className={`maps-wrapper${changeMapWidth ? "-extend": ""}`}
>
          <MapContainer
            center={initialCoordinates}
            zoom={13}
            className="maps"
            
            
          >
            <div className="spinning-globe">
              <div className="globe-cover">
                <CiGlobe className="globe" />
              </div>
              <p>Latvia</p>
            </div>
            {showExpandMap && (
              <IoExpandSharp
                className="extend-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setChangeMapWidth((state) => !state);
                  console.log("Change Map Width:", !changeMapWidth); // Debugging statement
                }}
              />
            )}

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
        </div>
        {/* </AnimatePresence> */}
        {/* <div className="location-bottom-content">
          <h1>ATRAŠANĀS VIETA</h1>
          <p>Garkalni, Maltas pagasts, Rezekne, Latvia</p>
        </div> */}
      </div>
    </>
  );
}

export default Location;
