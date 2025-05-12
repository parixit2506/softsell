import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: process.env.NODE_ENV === 'production' ? false : true,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  // Optional: set base path if needed for Vercel
   base: './', // Uncomment only if you serve from subdirectory
})
