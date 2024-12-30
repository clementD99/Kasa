import ImageHeader from "../../composants/ImageHeader/ImageHeader";
import Cards from "../../composants/Cards/Cards";
import "../../pages/Accueil/accueil.scss";

function Accueil() {
  return (
    <div className="accueil">
      <ImageHeader />
      <Cards />
    </div>
  );
}

export default Accueil;
