import { defineConfig } from 'vite';
import node from '@vitejs/plugin-node';

export default defineConfig({
  plugins: [node()],
  optimizeDeps: {
    exclude: ['buffer', 'events', 'http', 'path', 'url']
  }
});