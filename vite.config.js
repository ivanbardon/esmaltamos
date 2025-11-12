import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/esmaltamos/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        trabajos: 'trabajos.html',
        servicios: 'servicios.html',
        contacto: 'contacto.html',
        privacidad: 'privacy.html',
      },
    },
  },
});
