import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "node_modules/@fortawesome/fontawesome-free/css/all.min.css";`
      }
    }
  }
});
