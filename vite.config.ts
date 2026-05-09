import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVitePlugin } from '@tanstack/router-plugin';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    TanStackRouterVitePlugin(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
