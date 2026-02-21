import type { Preview } from '@storybook/vue3';
// @ts-expect-error -- @storybook/theming is a transitive dep, no type declarations available
import { themes } from '@storybook/theming';
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
      theme: themes.light,
      source: {
        type: 'code',
        transform: (src: string) => {
          const match = src.match(/template:\s*`([\s\S]*?)`/);
          return match?.[1]?.trim() ?? src;
        },
      },
    },
  },
};

export default preview;
