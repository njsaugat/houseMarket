import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Signup from './Login-signup/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
