import { Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/Footer';
import Competition from './championnat/competition';
import Club from './club/club';
import Contact from './contact/contact';
import Teamresult from './championnat/teamresult';
import Accueil from './accueil/Accueil';
import Actualite from './actualites/actualites';

import './App.css';
import Inscription from './contact/inscription';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="ATT-ST-Antoine" element={<Accueil />} />
        <Route path="actualite" element={<Actualite />} /> 
        <Route path="club" element={<Club />} />
        <Route path="competitions" element={<Competition />} >
            <Route path=":id" element={<Teamresult />} />
        </Route>
        <Route path="contact/inscription" element={<Inscription />} />
        <Route path="contact/formulaire" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
