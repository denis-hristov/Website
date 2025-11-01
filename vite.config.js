import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Разреши SPA навигации без разширение (без точки):
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//, /^\/__/ , /\.[^/]+$/],
        navigateFallbackAllowlist: [/^\/(?!api|__)(?!.*\.[^/]+).*$/],
      },
    }),
  ],
});
