import "./header.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header className="header-elements">
        <img src={logo} className="header-logo" alt="logo de Kasa" />
        <ul className="header-nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">À propos</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
