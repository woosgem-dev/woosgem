import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@woosgem-dev/core': path.resolve(root, 'packages/ds-core/src/index.ts'),
      '@woosgem-dev/headless/vue': path.resolve(root, 'packages/ds-headless/src/vue/index.ts'),
      '@woosgem-dev/headless': path.resolve(root, 'packages/ds-headless/src/vanilla/index.ts'),
      '@woosgem-dev/vue': path.resolve(__dirname, 'src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.test.ts'],
    setupFiles: ['__tests__/setup.ts'],
  },
});
