import React from 'react';
import Link from './Link'; // Certifique-se de que o componente Link está no caminho correto

function Menu() {
  // Declara a constante 'opcoes' com os itens do menu
  const opcoes = [
    { texto: 'Home', url: '/home' },
    { texto: 'Perfil', url: '/perfil' },
    { texto: 'Sair', url: '/sair' }
  ];

  return (
    <nav>
      <ul aria-label="Menu de navegação">
        {/* Mapeia as opções para elementos li com um Link para cada uma */}
        {opcoes.map((opcao, index) => (
          <li key={index}>
            <Link url={opcao.url} texto={opcao.texto} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
