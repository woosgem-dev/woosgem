import type { Meta, StoryObj } from '@storybook/vue3';
import { IconButton } from '@woosgem/ds-vue';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      description: 'Visual style of the icon button',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Color theme of the icon button',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the icon button',
      table: { category: 'Style' },
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Shape of the icon button',
      table: { category: 'Style' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon button',
      table: { category: 'State' },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the icon button (required)',
      table: { category: 'Accessibility' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Add item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    shape: 'square',
  },
  render: (args) => ({
    components: { IconButton },
    setup() { return { args }; },
    template: `<IconButton v-bind="args"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <IconButton variant="filled" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton variant="outline" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton variant="ghost" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <IconButton color="primary" aria-label="Settings"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg></IconButton>
        <IconButton color="secondary" aria-label="Settings"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg></IconButton>
        <IconButton color="danger" aria-label="Delete"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></IconButton>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <IconButton size="xs" aria-label="Close"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></IconButton>
        <IconButton size="sm" aria-label="Close"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></IconButton>
        <IconButton size="md" aria-label="Close"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></IconButton>
        <IconButton size="lg" aria-label="Close"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></IconButton>
      </div>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <IconButton shape="square" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton shape="circle" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Add item',
    disabled: true,
  },
  render: (args) => ({
    components: { IconButton },
    setup() { return { args }; },
    template: `<IconButton v-bind="args"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>`,
  }),
};

export const DisabledStates: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <IconButton :disabled="true" aria-label="Disabled filled"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton :disabled="true" variant="outline" aria-label="Disabled outline"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton :disabled="true" variant="ghost" aria-label="Disabled ghost"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton :disabled="true" shape="circle" aria-label="Disabled circle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
      </div>
    `,
  }),
};

export const ActionBar: Story = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 8px; padding: 8px; background-color: #f5f5f5; border-radius: 8px">
        <IconButton variant="ghost" color="secondary" aria-label="Settings"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg></IconButton>
        <IconButton variant="ghost" color="secondary" aria-label="Add"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></IconButton>
        <IconButton variant="ghost" color="danger" aria-label="Delete"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></IconButton>
      </div>
    `,
  }),
};
