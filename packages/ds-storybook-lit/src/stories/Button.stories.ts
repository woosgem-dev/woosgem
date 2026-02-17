import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'wg-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost', 'link'],
      description: 'Visual style of the button',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
      description: 'Color theme of the button',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the button',
      table: { category: 'Style' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: { category: 'State' },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
      table: { category: 'State' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes button full width',
      table: { category: 'Layout' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
  render: (args) => html`
    <wg-button
      variant=${args.variant}
      color=${args.color}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?fullWidth=${args.fullWidth}
    >Button</wg-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button variant="filled">Filled</wg-button>
      <wg-button variant="outline">Outline</wg-button>
      <wg-button variant="ghost">Ghost</wg-button>
      <wg-button variant="link">Link</wg-button>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button color="primary">Primary</wg-button>
      <wg-button color="secondary">Secondary</wg-button>
      <wg-button color="danger">Danger</wg-button>
      <wg-button color="success">Success</wg-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button size="xs">Extra Small</wg-button>
      <wg-button size="sm">Small</wg-button>
      <wg-button size="md">Medium</wg-button>
      <wg-button size="lg">Large</wg-button>
    </div>
  `,
};

export const OutlineVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button variant="outline" color="primary">Primary</wg-button>
      <wg-button variant="outline" color="secondary">Secondary</wg-button>
      <wg-button variant="outline" color="danger">Danger</wg-button>
      <wg-button variant="outline" color="success">Success</wg-button>
    </div>
  `,
};

export const GhostVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button variant="ghost" color="primary">Primary</wg-button>
      <wg-button variant="ghost" color="secondary">Secondary</wg-button>
      <wg-button variant="ghost" color="danger">Danger</wg-button>
      <wg-button variant="ghost" color="success">Success</wg-button>
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => html`
    <wg-button ?disabled=${args.disabled}>Disabled Button</wg-button>
  `,
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => html`
    <wg-button ?loading=${args.loading}>Loading...</wg-button>
  `,
};

export const LinkVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-button variant="link" color="primary">Primary</wg-button>
      <wg-button variant="link" color="secondary">Secondary</wg-button>
      <wg-button variant="link" color="danger">Danger</wg-button>
      <wg-button variant="link" color="success">Success</wg-button>
    </div>
  `,
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => html`
    <div style="width: 400px">
      <wg-button ?fullWidth=${args.fullWidth}>Full Width Button</wg-button>
    </div>
  `,
};

export const DisabledStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start">
      <wg-button disabled>Disabled</wg-button>
      <wg-button loading>Loading</wg-button>
      <wg-button disabled variant="outline">Disabled Outline</wg-button>
      <wg-button loading variant="ghost">Loading Ghost</wg-button>
    </div>
  `,
};
