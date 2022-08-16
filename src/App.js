import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Rings from './components/Rings';
import Hoops from './components/Hoops';
import Collares from './components/Collares';
import Pulseras from './components/Pulseras';
import Dijes from './components/Dijes';
import Piercings from './components/Piercings';
import RingSelection from './components/RingSelection';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/anillos" element={<Rings/>} />
        <Route path="/collares" element={<Collares/>} />
        <Route path="/aritos" element={<Hoops/>} />
        <Route path="/pulseras" element={<Pulseras/>} />
        <Route path="/dijes" element={<Dijes/>} />
        <Route path="/piercings" element={<Piercings/>} />
        <Route path="/anillos/:nombre" element={<RingSelection/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
