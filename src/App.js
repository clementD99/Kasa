import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./composants/Header/Header";
import Footer from "./composants/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import Erreur from "./composants/Erreur/Erreur";
import Logement from "./pages/Logements/Logement";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
