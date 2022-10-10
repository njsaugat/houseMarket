import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Signup from './Login-signup/Signup';
import Login from './Login-signup/Login';
import RegisterProperty from './RegisterProperty/RegisterProperty';

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-property" element={<RegisterProperty />} />
      </Routes>
    </div>
  );
}

export default App;
