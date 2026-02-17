import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@woosgem-dev/core': path.resolve(root, 'packages/ds-core/src/index.ts'),
      '@woosgem-dev/headless/react': path.resolve(root, 'packages/ds-headless/src/react/index.ts'),
      '@woosgem-dev/headless': path.resolve(root, 'packages/ds-headless/src/vanilla/index.ts'),
      '@woosgem-dev/react': path.resolve(__dirname, 'src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.test.tsx'],
    setupFiles: ['__tests__/setup.ts'],
  },
});
