// ----- Code pour la récupération des logements ----- //

import React, { useState, useEffect } from "react";
import "../../pages/Logements/logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../composants/Carousel/Carousel";
import Tag from "../../composants/Tag/Tag";
import Profil from "../../composants/Profil/Profil";
import Rate from "../../composants/Rate/Rate";
import Collapse from "../../composants/Collapse/Collapse";

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
          throw new Error("Erreur :  pas de données trouvées");
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
        <div className="logement-details">
          <h1 className="logement-titre">{logement.title}</h1>
          <p className="logement-text">{logement.location}</p>
          <div className="tags-list">
            {logement.tags.map((tag, index) => (
              <Tag name={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="profil-section">
          <Profil host={logement.host} />
          <Rate rating={logement.rating} />
        </div>
      </div>
      <div className="collapse-logements">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
};

export default Logement;