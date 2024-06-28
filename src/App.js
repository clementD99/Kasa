import './App.css';       // Pour que React fonctionne correctement mettre le css, images en haut
import logo from './images/logo.png';
import React from 'react';
                                    
function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo de Kasa"></img>
        
      </header>
    </div>
  );
}

export default App;
