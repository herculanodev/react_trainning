import React, { useState } from 'react';

function InputPesquisa({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para capturar a entrada no input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value); // Executa a função de pesquisa passada como prop
    }
  };

  return (
    <div>
      <label htmlFor="search">Pesquisar:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={handleInputChange} // Atualiza o estado e aciona a função de pesquisa
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
}

export default InputPesquisa;
