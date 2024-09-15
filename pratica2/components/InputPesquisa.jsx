import React, { useState, useEffect } from 'react';

function InputPesquisa({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Atualiza o debouncedTerm com um atraso de 300ms
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Dispara a pesquisa quando o debouncedTerm mudar
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedTerm);
    }
  }, [debouncedTerm, onSearch]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Pesquisar:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
}

export default InputPesquisa;
