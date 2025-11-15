import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Connexion from './Connexion';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Titre ajouté */}
      <h1 className="titre">Mon Application React</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link>
      </nav>

      {/* Composant Connexion */}
      <Connexion />

      {/* Header original CRA */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>

    </div>
  );
}

export default App;
