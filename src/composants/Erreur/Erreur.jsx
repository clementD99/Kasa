import "../Erreur/erreur.scss";
import { Link } from "react-router-dom";
import erreur from "../../images/erreur/404.png";

function Erreur() {
  return (
    <div className="erreur">
      <img className="erreur-404" src={erreur}></img>
      <p className="erreur-text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <p className="erreur-retour">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
}

export default Erreur;
