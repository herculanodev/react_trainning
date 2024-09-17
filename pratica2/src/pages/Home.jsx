import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa o hook de navegação
import Cabecalho from '../../components/Cabecalho';
import Conteudo from '../../components/Conteudo';
import Secao from '../../components/Secao';
import Menu from '../../components/Menu';

function Home() {
  const navigate = useNavigate(); // Hook para navegação

  // Função para redirecionar para a página de perfil
  const handleNavigateToPerfil = () => {
    navigate('/perfil');
  };

  return (
    <>
      <Menu />
      <Cabecalho />
      <Conteudo estilo="pagina-inicial">
        {/* Passa a função de redirecionamento como prop */}
        <Secao texto="Página Inicial" onClick={handleNavigateToPerfil} />
      </Conteudo>
    </>
  );
}

export default Home;
