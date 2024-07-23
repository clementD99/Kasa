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
    console.log(logement)
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
    <div class="logement">
      {/* <Carousel /> */}
      <div class="logement-section1">
        <div class="logement-section1-text">
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <p>Paris, Île-de-France</p>
        </div>

        {/* <Profil /> */}
      </div>
      <div class="tags">
        {logement.tags.map((tag, index) => (
          <Tag name={tag} key={index}/>
        ))}
      </div>
      {/* <div>
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
        <img src={logement.pictures} alt={logement.title} />
      </div> */}
    </div>
  );
};

export default Logement;