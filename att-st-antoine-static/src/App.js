import { Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/Footer';
import Competition from './championnat/competition';
import Club from './club/club';
import Contact from './contact/contact';
import Teamresult from './championnat/teamresult';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="club" element={<Club />} />
        <Route path="competitions" element={<Competition />} >
            <Route path=":id" element={<Teamresult />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
