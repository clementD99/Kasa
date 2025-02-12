import "../Cards/cards.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();

        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div className="cards-gallery">
      {data.map((item, index) => (
        <div className="cards-list" key={index}>
            <Link to={`/logement/${item.id}`}>
              <img src={item.cover} alt={`Appartement ${index}`} />
            </Link>
          <span className="cards-list-titre">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Cards;
