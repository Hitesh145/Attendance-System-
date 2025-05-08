// import React,{useEffect , useState} from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/sections/Login';
import Studentpage from './components/Studentpage';
import Teacherpage from './components/Teacherpage';
import { BrowserRouter as Router, Routes, Route, useLocation , useNavigate , /*Navigate*/} from "react-router-dom";
import { useState, useEffect } from "react";

// function PrivateRoute({ isAuthenticated, children }) {
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// }

function AppContent() {
  const [login, setLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem("islogin", "false");
    }

    const isLoginned = localStorage.getItem("islogin") === "true";
    if (isLoginned) {
      console.log("worked");
      setLogin(true);
    } else {
      setLogin(false);
      console.log(location.pathname);
      if (!isLoginned && (location.pathname === "/Studentpage" || location.pathname === "/Teacherpage")) {
        navigate("/login", {replace : true});
      }
    }
  }, [location.pathname ,navigate]);

  const student = login ? <Studentpage /> : <Login />;
  const teacher = login ? <Teacherpage /> : <Login />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Studentpage" element={student} />
      <Route path="/Teacherpage" element={teacher} />
      
      {/* <Route path="/Studentpage" element={
        <PrivateRoute isAuthenticated={login}>
          <Studentpage />
        </PrivateRoute>
      } />
      <Route path="/Teacherpage" element={
        <PrivateRoute isAuthenticated={login}>
          <Teacherpage />
        </PrivateRoute>
      } /> */}
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}