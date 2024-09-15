import React, { useState } from 'react';

function InputEmail() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={handleChange}
      />
    
    </div>
  );
}

export default InputEmail;
