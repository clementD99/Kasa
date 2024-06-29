import './sass/App.scss';       // Pour que React fonctionne correctement mettre le css, images en haut
import logo from './images/logo.png';
import React from 'react';
                                    
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo de Kasa"></img>
        <ul className="App-nav">
          <li>Accueil</li>
          <li>À propos</li>
          </ul>       
      </header>
    </div>
  );
}

export default App;
