import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
