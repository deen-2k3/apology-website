import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // `npm start` serves the built site with `vite preview` (used on Render).
  preview: {
    allowedHosts: ['.onrender.com'],
  },
});
