import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AudRI-component-liberary/',
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './lib'),
    },
  },
});
