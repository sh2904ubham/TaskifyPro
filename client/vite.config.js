import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Standard tailwind import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // You can just use tailwindcss directly without needing @tailwindcss/vite
  ],
});
