import React, { useState } from "react";
import "../../composants/Carousel/carousel.scss";
import flecheG from "../../images/carrousel/flecheG.svg";
import flecheD from "../../images/carrousel/flecheD.svg";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div onClick={handlePrev} className="carousel-button">
        <img src={flecheG} alt="Précédent" />
      </div>
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel-image"
      />
      <span className="carousel-chiffres">
        {currentIndex + 1} / {pictures.length}  
      </span>
      <div onClick={handleNext} className="carousel-button">
        <img src={flecheD} alt="Suivant" />
      </div>
    </div>
  );
};

export default Carousel;
