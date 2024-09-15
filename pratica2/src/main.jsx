import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Verifique se o caminho está correto
import './index.css'; // Verifique o caminho para o arquivo CSS

const rootElement = document.getElementById('root'); // Certifique-se de que o ID seja 'root' no index.html
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
