import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {}
  },
  server: {
    port: 3001,
    open: true,
    host: true,
  },
  preview: {
    port: 3001,
    open: true
  },
  build: {
    outDir: 'dist',
    minify: true
  }
})
