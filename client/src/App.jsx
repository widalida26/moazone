import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Identification from './Identification';
import Enter from './Enter';
import Consent from './Consent';
import Event from './Event';
import KakaoCode from './components/KakaoCode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/event" element={<Event />} />
        <Route path="/token" element={<KakaoCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
