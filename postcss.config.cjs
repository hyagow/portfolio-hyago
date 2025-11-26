// Arquivo: postcss.config.cjs
// Usa module.exports para ser compatível com CommonJS, 
// que é o padrão para arquivos .cjs e a forma como o Vite/Node espera
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};