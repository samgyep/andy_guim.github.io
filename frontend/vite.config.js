import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/user": "http://localhost:5555",
      "/session": "http://localhost:5555",
    }
  },
  plugins: [react()],
})
