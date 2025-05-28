import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   base: "/npd/",
  root: path.resolve(__dirname), // Project root is /client
  build: {
    outDir: path.resolve(__dirname, '../dist/public'), // Final output to dist/public
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // entry point
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // allows @/Component usage
    },
  },
  plugins: [react()],
});
