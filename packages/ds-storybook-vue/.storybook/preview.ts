import type { Preview } from '@storybook/vue3';
import '@woosgem/ds-styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    docs: {
      source: {
        type: 'code',
        transform: (src: string) => {
          const match = src.match(/template:\s*`([\s\S]*?)`/);
          return match ? match[1].trim() : src;
        },
      },
    },
  },
};

export default preview;
