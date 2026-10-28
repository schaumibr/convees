import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or vue/svelte)

export default defineConfig({
  plugins: [react()],
  base: '/convees/', // <--- THIS IS CRITICAL
})