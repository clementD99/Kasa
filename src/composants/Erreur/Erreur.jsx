import "../Erreur/erreur.scss";

function Erreur() {
  return (
    <div className="erreur">
      <h1 className="erreur-404">404</h1>
      <p className="erreur-text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
    </div>
  );
}

export default Erreur;