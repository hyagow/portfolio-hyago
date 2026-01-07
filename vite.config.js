import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🚨 CORREÇÃO ESSENCIAL PARA TESTE LOCAL (protocolo file://)
// O valor './' força o Vite a usar caminhos relativos (e.g., './assets/...')
// Isso permite que o build funcione quando você abre o index.html diretamente no navegador.
export default defineConfig({
  plugins: [react()],
  base: './portfolio-hyago', 
})