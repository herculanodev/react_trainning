import React from 'react';

function Icone(props) {
  return (
    <div>
      {/* Exibe a imagem se props.imagem for fornecido */}
      <img src={props.imagem} alt={props.text} />
    </div>
  );
}

export default Icone;
