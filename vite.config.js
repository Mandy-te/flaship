import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Configurasyon optimize pou Netlify
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // dosye Netlify ap sèvi
  },
  base: '/', // asire tout wout yo mache kòrèk sou Netlify
})
