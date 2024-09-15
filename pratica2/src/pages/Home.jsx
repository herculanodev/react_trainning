import React from 'react';
import Cabecalho from '../../components/Cabecalho'; // Verifique se este caminho está correto
import Conteudo from '../../components/Conteudo';  // Verifique se este caminho está correto
import Secao from '../../components/Secao';        // Importe o Secao corretamente

function Home() {
  return (
    <>
      <Cabecalho />
      <Conteudo estilo="conteudo-principal">
        <Secao texto="Página Inicial" />
      </Conteudo>
    </>
  );
}

export default Home;
