import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'wg-badge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      description: 'Visual style of the badge',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      description: 'Color theme of the badge',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  render: (args) => html`
    <wg-badge variant=${args.variant} color=${args.color} size=${args.size}>Badge</wg-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-badge variant="solid">Solid</wg-badge>
      <wg-badge variant="outline">Outline</wg-badge>
      <wg-badge variant="subtle">Subtle</wg-badge>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
      <wg-badge color="primary">Primary</wg-badge>
      <wg-badge color="secondary">Secondary</wg-badge>
      <wg-badge color="danger">Danger</wg-badge>
      <wg-badge color="success">Success</wg-badge>
      <wg-badge color="warning">Warning</wg-badge>
      <wg-badge color="info">Info</wg-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-badge size="sm">Small</wg-badge>
      <wg-badge size="md">Medium</wg-badge>
      <wg-badge size="lg">Large</wg-badge>
    </div>
  `,
};

export const OutlineVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
      <wg-badge variant="outline" color="primary">Primary</wg-badge>
      <wg-badge variant="outline" color="secondary">Secondary</wg-badge>
      <wg-badge variant="outline" color="danger">Danger</wg-badge>
      <wg-badge variant="outline" color="success">Success</wg-badge>
      <wg-badge variant="outline" color="warning">Warning</wg-badge>
      <wg-badge variant="outline" color="info">Info</wg-badge>
    </div>
  `,
};

export const SubtleVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
      <wg-badge variant="subtle" color="primary">Primary</wg-badge>
      <wg-badge variant="subtle" color="secondary">Secondary</wg-badge>
      <wg-badge variant="subtle" color="danger">Danger</wg-badge>
      <wg-badge variant="subtle" color="success">Success</wg-badge>
      <wg-badge variant="subtle" color="warning">Warning</wg-badge>
      <wg-badge variant="subtle" color="info">Info</wg-badge>
    </div>
  `,
};

export const StatusBadges: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-badge color="success">Active</wg-badge>
      <wg-badge color="warning">Pending</wg-badge>
      <wg-badge color="danger">Error</wg-badge>
      <wg-badge color="info">New</wg-badge>
    </div>
  `,
};
