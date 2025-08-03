import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Remove this line
// import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Remove tailwindcss() from the plugins array
  plugins: [react()], 
  resolve:{
    alias:{
      "@": path.resolve(__dirname, './src'),
    }
  }
})