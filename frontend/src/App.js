import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Signup from './Login-signup/Signup';
import Login from './Login-signup/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
