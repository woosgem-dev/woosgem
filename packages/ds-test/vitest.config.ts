import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');

export default defineConfig({
  root: root,
  plugins: [react(), vue()],
  resolve: {
    alias: {
      '@woosgem-dev/core': path.resolve(root, 'packages/ds-core/src/index.ts'),
      '@woosgem-dev/react': path.resolve(root, 'packages/ds-react/src/index.ts'),
      '@woosgem-dev/vue': path.resolve(root, 'packages/ds-vue/src/index.ts'),
      '@woosgem-dev/lit': path.resolve(root, 'packages/ds-lit/src/index.ts'),
      '@woosgem/ds-react': path.resolve(root, 'packages/ds-react/src/index.ts'),
      '@woosgem/ds-vue': path.resolve(root, 'packages/ds-vue/src/index.ts'),
      '@woosgem/ds-lit': path.resolve(root, 'packages/ds-lit/src/index.ts'),
      '@woosgem/ds-test': path.resolve(root, 'packages/ds-test/src/index.ts'),
      '@woosgem/utils': path.resolve(root, 'packages/utils/src/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['default', 'json'],
    outputFile: {
      json: path.resolve(root, 'coverage/test-results.json'),
    },
    include: ['packages/ds-test/src/**/*.test.{ts,tsx}'],
    setupFiles: [
      'packages/ds-test/src/react/setup.ts',
      'packages/ds-test/src/vue/setup.ts',
      'packages/ds-test/src/lit/setup.ts',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'json-summary'],
      reportsDirectory: 'coverage',
      include: [
        'packages/ds-core/src/**/*.ts',
        'packages/ds-react/src/**/*.tsx',
        'packages/ds-vue/src/**/*.ts',
        'packages/ds-lit/src/**/*.ts'
      ],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/__tests__/**',
        '**/*.test.*',
        '**/*.d.ts',
        '**/index.ts',
        '**/types.ts',
        '**/tokens/**',
        '**/protocol/schema.ts',
      ],
      thresholds: {
        statements: 60,
        branches: 60,
        functions: 50,
        lines: 60,
      },
    },
  },
});
