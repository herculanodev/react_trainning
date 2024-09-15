import React, { useState } from 'react';


function PasswordInput() {
  // Estado para controlar se a senha está visível ou não
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div>
      <label htmlFor="password">Senha:</label>
      <input
        type={passwordVisible ? 'text' : 'password'} // Alterna entre texto e password
        id="password"
        name="password"
        required // Corrigido: Apenas required, sem atribuir true explicitamente
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {passwordVisible ? 'Ocultar' : 'Mostrar'} Senha
      </button>
      
    </div>
    </>
  );
}

export default PasswordInput;
