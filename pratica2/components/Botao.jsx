import React from 'react';

function Botao(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Botao;
