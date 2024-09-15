import React from 'react';

function Secao(props) {
  return (
    <section>
      <h2>{props.texto}</h2> {/* Mudança de 'props.text' para 'props.texto' */}
      <div>
        {props.children} {/* Espaço para atribuir os elementos filhos */}
      </div>
    </section>
  );
}

export default Secao;
