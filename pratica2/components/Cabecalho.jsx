import React from 'react';
import InputPesquisa from './InputPesquisa';
import Titulo from './Titulo';
import Icone from './Icone';

function Cabecalho() {
  return (
    <header>
      <div>
        {/* Logo da aplicação */}
        <Icone imagem="" texto="Logo da Aplicação" />
        {/* Título da aplicação */}
        <Titulo texto="Aluno Online" />
      </div>
      <div>
        {/* Campo de pesquisa */}
        <InputPesquisa />
        {/* Ícone de pesquisa */}
        <Icone imagem="" texto="Ícone Pesquisar" />
      </div>
    </header>
  );
}

export default Cabecalho;
