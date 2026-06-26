import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command, mode }) => {
  const isDemo = command === 'serve' || mode === 'demo'

  if (isDemo) {
    return {
      plugins: [
        tailwindcss(),
        react(),
      ],
      build: {
        outDir: 'dist-demo',
        copyPublicDir: true,
      },
    }
  }

  return {
    plugins: [
      tailwindcss(),
      react(),
      dts({ tsconfigPath: './tsconfig.lib.json' }),
      cssInjectedByJsPlugin(),
      cloudflare()
    ],
    build: {
      outDir: 'dist',
      copyPublicDir: false,
      lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        name: 'ReactKeyboard',
        fileName: 'react-keyboards',
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
          },
        },
      },
    },
  };
})