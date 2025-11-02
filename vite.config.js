import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração otimizada para produção + compatível com Docker
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',           
    sourcemap: false,        
    chunkSizeWarningLimit: 800,
  },
  server: {
    host: '0.0.0.0',          
    port: process.env.PORT || 5173,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
  }
})
