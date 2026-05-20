import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Auth/Login';
import Recuperacion from './assets/pages/Auth/Recuperacion';
import Home from './assets/pages/Auth/Home';
import Registro from './assets/pages/Auth/Registro';
// import Recuperacion from './pages/Auth/Recuperacion'; 

export default function App() {
  return (
    <Router>
      <Routes>
        {/* La ruta "/" es la que carga el Inicio de Sesión por defecto */}
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/recuperacion' element={<Recuperacion/>}/> 
        

        {/* Aquí irás añadiendo el resto de páginas de VolleyScan */}
      </Routes>
    </Router>
  );
}

