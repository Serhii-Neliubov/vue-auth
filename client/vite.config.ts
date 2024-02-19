import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function resolvePath(alias: string) {
  return path.resolve(process.cwd(), alias);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '/@': resolvePath('./src'), // Adjusted the alias pattern and resolved path
    }
  }
});
