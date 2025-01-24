import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
