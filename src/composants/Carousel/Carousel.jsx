import React, { useState } from "react";
import "../../composants/Carousel/carousel.scss";
import flecheGauche from "../../images/carrousel/flecheGauche.png";
import flecheDroite from "../../images/carrousel/flecheDroite.png";


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
        <img src={flecheGauche} alt="Précédent" />
      </div>
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel-image"
      />
      <div onClick={handleNext} className="carousel-button">
        <img src={flecheDroite} alt="Suivant" />
      </div>
    </div>
  );
};

export default Carousel;
