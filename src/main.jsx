import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importação do componente App
import './index.css'; // Importação dos estilos globais (incluindo Tailwind)

// O ponto de entrada da sua aplicação React.
// Ele encontra o elemento 'root' no index.html e injeta o componente App.
ReactDOM.createRoot(document.getElementById('root')).render(
  // O modo estrito ajuda a identificar problemas no código
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);