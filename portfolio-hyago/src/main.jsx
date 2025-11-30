import React from 'react';
import ReactDOM from 'react-dom/client';

// IMPORTAÇÃO CRÍTICA: 
// Garante que o PostCSS/Tailwind processe e aplique os estilos do index.css antes do App.
import './index.css';

// Importa o componente principal da aplicação
import App from './App.jsx';

// Inicia a aplicação React e a renderiza no DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);