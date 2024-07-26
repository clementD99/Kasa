// ----- Code pour la récupération des logements ----- //

import React, { useState, useEffect } from "react";
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../composants/Carousel/Carousel';
import Tag from '../../composants/Tag/Tag';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const result = await response.json();
        const foundLogement = result.find(logement => logement.id === id);
        setLogement(foundLogement);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      {logement.pictures && logement.pictures.length > 0 ? (
        <Carousel pictures={logement.pictures} />
      ) : (
        <div>Aucune image disponible</div>
      )}
      <div className="logement-section1">
        <div className="logement-section1-text">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        {/* <Profil /> */}
      </div>
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <Tag name={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Logement;