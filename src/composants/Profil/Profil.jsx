import React from "react";
import "../../composants/Profil/profil.scss";

function Profil({ host }) {
  if (!host) {
    return <div>L'hôte du logement n'a pas été trouvé</div>;
  }

  return (
    <div className="profil">
      <span className="profil-nom">{host.name}</span>
      <img className="profil-photo" src={host.picture} alt={host.name} />
    </div>
  );
}

export default Profil;
