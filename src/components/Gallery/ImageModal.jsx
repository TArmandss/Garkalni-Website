import React from "react";
import "./ImageModal.css";
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal">
        <img src={imageUrl} alt="Full-size" loading="lazy" />
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
