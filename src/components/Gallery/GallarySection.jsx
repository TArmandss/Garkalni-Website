import React, { useState, useEffect } from 'react';
import './GallerySection.css';
import Footer from '../Footer/Footer';
import ImageModal from './ImageModal';
import {motion} from 'framer-motion';

function GallarySection() {

  const imagePaths = require.context('/public/assets/garkalni-gallery', false, /\.(png|jpe?g|svg)$/);
  const allImages = imagePaths.keys().map(imagePaths);

  const [activeImage, setActiveImage] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryContentTransformedTitle, setGalleryContentTransformedTitle] = useState('Visas');
  
  const buttons = ["Visas", "Lielā trase", "Kubuls un pirts", "Mazā trase", "Velosipēdi", "Teritorija", "Sajūtu taka", "Baģiji", "Banķešu zāle"];
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  

  const imagesByTopic = {
    "Visas": allImages,
    "Lielā trase": allImages.filter(image => image.includes("lielatrase_")),
    "Kubuls un pirts": allImages.filter(image => image.includes("kubuls_")),
    "Mazā trase": allImages.filter(image => image.includes("bernutrase_")),
    "Velosipēdi": allImages.filter(image => image.includes("velosipedi_")),
    "Teritorija": allImages.filter(image => image.includes("teritorija_")),
    "Sajūtu taka": allImages.filter(image => image.includes("sajututaka_")),
    "Baģiji": allImages.filter(image => image.includes("Bagiji_")),
    "Banķešu zāle": allImages.filter(image => image.includes("banketuzale_")),


  };

  const handleButtonClick = ({ index, button }) => {
    setActiveButtonIndex(index);
    setGalleryContentTransformedTitle(button);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setActiveImage(false);
  };

  const closeImageModal = () => {
    setActiveImage(true);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!activeImage) {
      const preventDefault = (e) => {
        e.preventDefault();
      };
      
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });

      return () => {
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [activeImage]);

  const displayedImages = imagesByTopic[galleryContentTransformedTitle] || [];
  
  return (
    <div>
      <div className="gallery-section-layout">
        <div className="gallery-section-title">
          <h1>GALERIJA</h1>
          <div className='select-gallery__type'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={index === activeButtonIndex ? "active" : ""}
                onClick={() => handleButtonClick({ index, button })}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
         initial={{x:-200}}
         animate={{x:0}}
        className="gallery-section__images">
          {displayedImages.map((image, index) => (
            <div 
            className="image-container" key={index}>
              <motion.img
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{ type: "tween", duration: 0.5 }}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => openImageModal(image)}
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      <Footer />
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
      )}
    </div>
  );
}

export default GallarySection;