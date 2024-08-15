import "./header.scss";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Pour la barre en dessous soit de accueil ou à propos
  
  return (
    <div className="header">
      <header className="header-elements">
        <img src={logo} className="header-logo" alt="logo de Kasa" />
        <ul className="header-nav">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === '/apropos' ? 'active' : ''}>
            <Link to="/apropos">À propos</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;