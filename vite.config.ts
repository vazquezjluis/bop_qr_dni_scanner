import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      quagga2: '/node_modules/quagga2/dist/quagga.js',
    },
  },
})
