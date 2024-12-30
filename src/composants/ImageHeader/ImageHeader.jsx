import "../../sass/banner.scss"
import imgAccueil from "../../images/imgAccueil.png";

function ImageHeader() {
  return (
    <div className="banner">
      <img src={imgAccueil} alt="Image d'accueil" className="banner-img"/>
      <span className="banner-text">Chez vous, partout et ailleurs</span>
    </div>
  );
}

export default ImageHeader;