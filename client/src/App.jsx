import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Identification from './pages/Identification';
import Survey from './pages/Survey';
// import Enter from './pages/Enter';
import Consent from './pages/Consent';
import Event from './pages/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/survey" element={<Survey />} />
        {/* <Route path="/enter" element={<Enter />} /> */}
        <Route path="/consent" element={<Consent />} />
        <Route path="/event" element={<Event />} />
        {/* <Route path="/token" element={<Identification />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
