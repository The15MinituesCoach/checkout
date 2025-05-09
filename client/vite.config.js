import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log("📦 VITE ALIAS →", path.resolve(__dirname, 'src'));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
