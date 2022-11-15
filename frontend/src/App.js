import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Signup from './Login-signup/Signup';
import Login from './Login-signup/Login';
import RegisterProperty from './RegisterProperty/RegisterProperty';
import Loading from './components/Loading';
import Explore from './explore/Explore';
import ShowProperty from './explore/ShowProperty';
import ShowUser from './user/ShowUser';

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-property" element={<RegisterProperty />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/property/:id" element={<ShowProperty />} />
        <Route path="/user/:id" element={<ShowUser />} />
      </Routes>
    </div>
  );
}

export default App;
