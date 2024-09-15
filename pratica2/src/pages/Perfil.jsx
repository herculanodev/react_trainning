import React from 'react';
import Cabecalho from '../../components/Cabecalho';
import Conteudo from '../../components/Conteudo';
import Menu from '../../components/Menu';
import Secao from '../../components/Secao';
import InputEmail from '../../components/InputEmail';
import Botao from '../../components/Botao';
import PasswordInput from '../../components/PasswordInput';

function Perfil() {
  return (
    <>
      <Cabecalho />
      <Conteudo estilo="conteudo-perfil">
        <Menu/>
        <Secao texto="Perfil do Usuário">
          <InputEmail />
            <PasswordInput/>
          <Botao texto="Salvar" />
        </Secao>
      </Conteudo>
    </>
  );
}

export default Perfil;
