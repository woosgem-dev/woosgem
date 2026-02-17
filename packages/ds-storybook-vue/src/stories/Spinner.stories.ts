import type { Meta, StoryObj } from '@storybook/vue3';
import { Spinner } from '@woosgem/ds-vue';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'current'],
      description: 'Color of the spinner',
      table: { category: 'Style' },
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
      table: { category: 'Accessibility' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
  render: (args) => ({
    components: { Spinner },
    setup() { return { args }; },
    template: '<Spinner v-bind="args" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Spinner size="xs" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">xs</div>
        </div>
        <div style="text-align: center">
          <Spinner size="sm" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
        </div>
        <div style="text-align: center">
          <Spinner size="md" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
        </div>
        <div style="text-align: center">
          <Spinner size="lg" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Spinner color="primary" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
        </div>
        <div style="text-align: center">
          <Spinner color="secondary" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">secondary</div>
        </div>
        <div style="text-align: center">
          <Spinner color="muted" />
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">muted</div>
        </div>
      </div>
    `,
  }),
};

export const CurrentColor: Story = {
  name: 'Inherit Color',
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="color: var(--wg-color-primary, #0066ff); display: flex; align-items: center; gap: 8px">
          <Spinner color="current" size="sm" />
          <span>Loading items...</span>
        </div>
        <div style="color: var(--wg-color-danger, #dc2626); display: flex; align-items: center; gap: 8px">
          <Spinner color="current" size="sm" />
          <span>Error state</span>
        </div>
        <div style="color: var(--wg-color-success, #16a34a); display: flex; align-items: center; gap: 8px">
          <Spinner color="current" size="sm" />
          <span>Processing...</span>
        </div>
      </div>
    `,
  }),
};

export const InButton: Story = {
  name: 'Usage in Button',
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; gap: 16px; align-items: center">
        <button style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: var(--wg-color-primary, #0066ff); color: white; border: none; border-radius: 8px; cursor: pointer" disabled>
          <Spinner size="xs" color="current" />
          Loading...
        </button>
        <button style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: transparent; color: var(--wg-color-text, #111); border: 1px solid var(--wg-color-border, #e5e7eb); border-radius: 8px; cursor: pointer" disabled>
          <Spinner size="xs" color="muted" />
          Processing
        </button>
      </div>
    `,
  }),
};
