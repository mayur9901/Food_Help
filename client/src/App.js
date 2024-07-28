import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signin from './Components/Signin';
import NGO from './Components/NGO';
// Donor
import Makedonation from './Components/Donor/Makedonation';
// NGO
import NGOhome from './Components/NGO/ngohome';
import Availabledonation from './Components/NGO/Availabledonation';
import Ngoprofile from './Components/NGO/Ngoprofile';
import Ngonotification from './Components/NGO/Ngonotification';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/ngo' element={<NGO />} />
          {/* Donor */}
          <Route path='/makedonation' element={<Makedonation />} />
          {/* NGO */}
          <Route path='/ngohome' element={<NGOhome />} />
          <Route path='/availabledonation' element={<Availabledonation />} />
          <Route path='/ngoprofile' element={<Ngoprofile />} />
          <Route path='/ngonotification' element={<Ngonotification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
