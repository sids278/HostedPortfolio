import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 GitHub repo name goes here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
