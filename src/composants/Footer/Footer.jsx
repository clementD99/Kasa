import "../Footer/footer.scss";
import logo from "../../images/logo-footer.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer-img" src={logo} alt="logo de kasa"></img>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
