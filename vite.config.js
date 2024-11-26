import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@reduxjs/toolkit'], // Mark it as an external dependency
    },
  },
});
