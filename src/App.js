import { Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/Footer';
import Competition from './championnat/competition';
import Club from './club/club';
import Contact from './contact/contact';
import Accueil from './accueil/Accueil';
import Actualite from './actualites/actualite';
import Actualites from './actualites/actualites';
import Inscription from './contact/inscription';
import NousRetrouver from './club/nousRetrouver';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Accueil />} />  */}
        <Route path="ATT-ST-Antoine" element={<Accueil />} />
        <Route path="ATT-ST-Antoine/actualite" element={<Actualite />} />
        <Route path="ATT-ST-Antoine/actualites" element={<Actualites />} />  
        <Route path="ATT-ST-Antoine/club" element={<Club />} />
        <Route Path="ATT-ST-Antoine/plan-d-acces" element={<NousRetrouver />} />
        <Route path="ATT-ST-Antoine/competitions" element={<Competition />} />
        <Route path="ATT-ST-Antoine/inscription" element={<Inscription />} />
        <Route path="ATT-ST-Antoine/formulaire" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
