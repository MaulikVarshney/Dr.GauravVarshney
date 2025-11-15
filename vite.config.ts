import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ important: your GitHub repo name goes here
export default defineConfig({
  plugins: [react()],
  base: '/Dr.GauravVarshney/',
})
