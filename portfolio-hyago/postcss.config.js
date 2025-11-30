/** @type {import('postcss-load-config').Config} */
// Usando a sintaxe ES Module (export default) compatível com projetos type: "module"
export default {
  plugins: {
    // 1. ATUALIZADO: O plugin do Tailwind AGORA DEVE SER referenciado como '@tailwindcss/postcss' 
    // devido a mudanças nas versões mais recentes (v4.x+).
    '@tailwindcss/postcss': {}, 
    
    // 2. O Autoprefixer adiciona prefixos de fornecedor (ex: -webkit-)
    'autoprefixer': {},
  },
};