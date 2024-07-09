// import { Link } from "react-router-dom";
import Header from "../../composants/Header/Header";
import Banner from "../../composants/Banner/Banner";
import Footer from "../../composants/Footer/Footer";
import imgApropos from "../../images/imgApropos.png";

// function Apropos() {
//   return (
//       <div className="header">
//         <header className="header-elements">
//           <img src={imgApropos} className="header-logo" alt="logo de Kasa" />
//           <ul className="header-nav">
//             <li>
//               <Link to="/accueil">Accueil</Link>
//             </li>
//             <li>
//               <Link to="/">À propos</Link>
//             </li>
//           </ul>
//         </header>
//       </div>
//   );
// }

// function Apropos() {
//   return (
//       <div className="header">
//         {/* <Header /> */}
//         <main>
//           {/* <Banner /> */}
//           <img src={imgApropos} title="image" className="banner-img"></img>
//         </main>
//         <Footer />
//       </div>
//   );
// }

function Apropos () {
  return (
    <div className="apropos">
      <Header />
      <main>
        <Banner image={imgApropos} title="image"/>
      </main>
      <Footer/>
    </div>
  )
}

export default Apropos;