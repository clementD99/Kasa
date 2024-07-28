// ----- Code pour la récupération des logements ----- //

import React, { useState, useEffect } from "react";
import "../../pages/Logements/logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../composants/Carousel/Carousel";
import Tag from "../../composants/Tag/Tag";
import Profil from "../../composants/Profil/Profil";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        const foundLogement = result.find((logement) => logement.id === id);
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
      <div className="logement-description">
        <div className="logement-titre">
          <h1>{logement.title}</h1>
          <Profil host={logement.host} />
        </div>
        <div className="logement-text">
          <p>{logement.location}</p>
        </div>
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