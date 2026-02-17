import type { StorybookConfig } from '@storybook/web-components-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.base = '/woosgem/lit/';
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@woosgem/ds-lit': resolve(__dirname, '../../../packages/ds-lit/src/index.ts'),
      '@woosgem/ds-styles': resolve(__dirname, '../../../packages/ds-styles/dist/index.css'),
    };
    return config;
  },
};

export default config;
