import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import barrels from './src/utils/barrelPlugin'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components',
      name: 'libs',
      formats: ['iife'],
    },
    sourcemap: 'inline',
  },
  plugins: [
    tsconfigPaths(),
    barrels({
      entry: 'src/components',
      extension: /^((?!.(stories|d)\.ts$).)*$/,
    }),
  ],
})
