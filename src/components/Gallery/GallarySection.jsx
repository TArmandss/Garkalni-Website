import React, { useState, useEffect } from "react";
import "./GallerySection.css";
import Footer from "../Footer/Footer";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function GallarySection() {
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryContentTransformedTitle, setGalleryContentTransformedTitle] =
    useState("Visas");
  const buttons = [
    "Visas",
    "Lielā trase",
    "Kubuls un pirts",
    "Mazā trase",
    "Velosipēdi",
    "Teritorija",
    "Sajūtu taka",
    "Baģiji",
    "Banķešu zāle",
  ];
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1083);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1083);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  const imagePaths = require.context(
    "/public/assets/garkalni-gallery",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const allImages = imagePaths.keys().map(imagePaths);

  const imagesByTopic = {
    Visas: allImages,
    "Lielā trase": allImages.filter((image) => image.includes("lielatrase_")),
    "Kubuls un pirts": allImages.filter((image) => image.includes("kubuls_")),
    "Mazā trase": allImages.filter((image) => image.includes("bernutrase_")),
    Velosipēdi: allImages.filter((image) => image.includes("velosipedi_")),
    Teritorija: allImages.filter((image) => image.includes("teritorija_")),
    "Sajūtu taka": allImages.filter((image) => image.includes("sajututaka_")),
    Baģiji: allImages.filter((image) => image.includes("Bagiji_")),
    "Banķešu zāle": allImages.filter((image) => image.includes("banketuzale_")),
  };

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setGalleryContentTransformedTitle(buttons[index]);
  };

  const handleNextButtonClick = () => {
    const nextIndex = (activeButtonIndex + 1) % buttons.length;
    handleButtonClick(nextIndex);
  };

  const handlePrevButtonClick = () => {
    const prevIndex = (activeButtonIndex - 1 + buttons.length) % buttons.length;
    handleButtonClick(prevIndex);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setActiveImage(false);
  };

  const closeImageModal = () => {
    setActiveImage(true);
    setSelectedImage(null);
  };

  // useEffect(() => {
  //   if (!activeImage) {
  //     const preventDefault = (e) => {
  //       e.preventDefault();
  //     };

  //     window.addEventListener("wheel", preventDefault, { passive: false });
  //     window.addEventListener("touchmove", preventDefault, { passive: false });

  //     return () => {
  //       window.removeEventListener("wheel", preventDefault);
  //       window.removeEventListener("touchmove", preventDefault);
  //     };
  //   }
  // }, [activeImage]);

  const displayedImages = imagesByTopic[galleryContentTransformedTitle] || [];

  return (
    <div className="all-gallery-main-content ">
      <div
        className="menu-nav"
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="menu_p">
          <p className="positive-p">
            <IoArrowBackOutline className="back-home-icon" />
          </p>
          <p className="negativi-p">
            <IoArrowBackOutline className="back-home-icon" />
          </p>
        </div>
      </div>
      <div className="services_content">
        <div className="top-picture">
          <div className="all-top-section">
            <h1 className="gallery_title">GALERIJA</h1>
            {isWideScreen ? (
              <>
                <h1>
                  <div className="select-gallery__type">
                    {buttons.map((button, index) => (
                      <button
                        key={index}
                        className={index === activeButtonIndex ? "active" : ""}
                        onClick={() => handleButtonClick(index)}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </h1>
              </>
            ) : (
              <div className="select_gallery__type_two">
                <FaArrowLeft
                  className="next_arrow"
                  id="arrow"
                  onClick={handlePrevButtonClick}
                />
                <h1>{buttons[activeButtonIndex]}</h1>
                <FaArrowRight
                  className="next_arrow"
                  id="arrow"
                  onClick={handleNextButtonClick}
                />
              </div>
            )}
          </div>
        </div>

        <div className="all-main-section">
          <div className="image-section">
            {displayedImages.map((image, index) => (
              <div className="image-container" key={index}>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "tween", duration: 0.5 }}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => openImageModal(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
      )}
    </div>
  );
}

export default GallarySection;
