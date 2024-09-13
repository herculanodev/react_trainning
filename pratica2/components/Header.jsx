import '../components/styleHeader.css';
import logo from '../components/assetsComponents/logo.png'; // Importa o logo corretamente
import React from 'react';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Usando a imagem importada */}
      </div>
   
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
