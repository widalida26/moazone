import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Enter from './Enter';
import Consent from './Consent';
import Event from './Event';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/event" element={<Event />} />

        {/* <div>
          {/* <Title /> */}
        {/* 텍스트 변경4 */}
        {/* <Login /> */}
        {/* <Spinner /> */}
        {/* // </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
