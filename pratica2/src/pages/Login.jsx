import React from 'react';
import { useNavigate } from 'react-router-dom';
import Conteudo from '../../components/Conteudo';
import Rodape from '../../components/Rodape';
import PasswordInput from '../../components/PasswordInput';
import InputEmail from '../../components/InputEmail';
import Botao from '../../components/Botao';

function Login() {
  const navigate = useNavigate(); // Inicializa o hook para navegação

  const handleLogin = () => {
    // Aqui você pode adicionar qualquer lógica de autenticação se necessário
    navigate('/home'); // Redireciona para a rota "/home"
  };

  return (
    <>
      <Conteudo>
        <InputEmail />
        <PasswordInput />
      </Conteudo>
      <Botao onClick={handleLogin}>Entrar</Botao>
      <Rodape texto="Copyright (C) 2024" />
    </>
  );
}

export default Login;
