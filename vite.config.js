import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false // 🔒 prevent xdg-open error
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  base: './', // Optional: adjust if deploying under subpath
})
