import React from 'react';

function Secao(props) {
  return (
    <section onClick={props.onClick} style={{ cursor: 'pointer' }}>
      <h2>{props.texto}</h2>
      <div>
        {props.children} {/* Espaço para atribuir os elementos filhos */}
      </div>
    </section>
  );
}

export default Secao;
