function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-img" />
      <span className="banner-text">{text}</span>
    </div>
  );
}

export default Banner;
