

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import Cabecalho from '../../components/Cabecalho';
import Conteudo from '../../components/Conteudo';
import Menu from '../../components/Menu';
import Secao from '../../components/Secao';
import InputEmail from '../../components/InputEmail';
import Botao from '../../components/Botao';
import PasswordInput from '../../components/PasswordInput';

function Perfil() {
  const navigate = useNavigate(); // Inicializa o hook para navegação

  // Função para redirecionar para o perfil (ou outra página, se preferir)
  const handleRedirect = () => {
    navigate('/perfil'); // Redireciona para a página de perfil (ou outra rota, se preferir)
  };

  return (
    <>
      <Menu />
      <Cabecalho />
      <Conteudo estilo="conteudo-perfil">
        <Secao texto="Perfil do Usuário">
          <InputEmail />
          <PasswordInput />
          {/* O botão agora redireciona ao ser clicado */}
          <Botao onClick={handleRedirect} texto="Salvar" />
        </Secao>
      </Conteudo>
    </>
  );
}

export default Perfil;