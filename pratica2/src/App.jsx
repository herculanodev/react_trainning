import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';  // Importa a página de Perfil

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} /> {/* Rota para Perfil */}
      </Routes>
    </Router>
  );
}

export default App;
