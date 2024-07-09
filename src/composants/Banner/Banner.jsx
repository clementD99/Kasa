function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-img" />
      <span className="banner-text">{text}</span>
    </div>
  );
}

export default Banner;

// function Banner() {
//   return (
//     <div className="banner">
//       <img src={imgAccueil} alt="Image d'accueil" className="banner-img"/>
//       <span className="banner-text">Chez vous, partout et ailleurs</span>
//     </div>
//   );
// }

//----- Code de l'ancien banner s'il faut le réutiliser -----//
