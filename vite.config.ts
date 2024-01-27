import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'storybook-blocks',
      fileName: 'storybook-blocks',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'storybook'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
  plugins: [react()],
})
