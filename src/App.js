import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/sections/Login';
import Studentpage from './components/Studentpage';
import Teacherpage from './components/Teacherpage';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Studentpage' element={<Studentpage />} />
          <Route path='/Teacherpage' element={<Teacherpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
