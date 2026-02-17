import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'wg-spinner',
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
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'md', color: 'primary', label: 'Loading...' },
  render: (args) => html`
    <wg-spinner size=${args.size} color=${args.color} label=${args.label}></wg-spinner>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      ${(['xs', 'sm', 'md', 'lg'] as const).map(
        (size) => html`
          <div style="text-align: center">
            <wg-spinner size=${size}></wg-spinner>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">${size}</div>
          </div>
        `,
      )}
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      ${(['primary', 'secondary', 'muted'] as const).map(
        (color) => html`
          <div style="text-align: center">
            <wg-spinner color=${color}></wg-spinner>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">${color}</div>
          </div>
        `,
      )}
    </div>
  `,
};

export const CurrentColor: Story = {
  name: 'Inherit Color',
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="color: var(--wg-color-primary, #0066ff); display: flex; align-items: center; gap: 8px">
        <wg-spinner color="current" size="sm"></wg-spinner>
        <span>Loading items...</span>
      </div>
      <div style="color: var(--wg-color-danger, #dc2626); display: flex; align-items: center; gap: 8px">
        <wg-spinner color="current" size="sm"></wg-spinner>
        <span>Error state</span>
      </div>
      <div style="color: var(--wg-color-success, #16a34a); display: flex; align-items: center; gap: 8px">
        <wg-spinner color="current" size="sm"></wg-spinner>
        <span>Processing...</span>
      </div>
    </div>
  `,
};

export const InButton: Story = {
  name: 'Usage in Button',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <button style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: var(--wg-color-primary, #0066ff); color: white; border: none; border-radius: 8px; cursor: pointer" disabled>
        <wg-spinner size="xs" color="current"></wg-spinner>
        Loading...
      </button>
      <button style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: transparent; color: var(--wg-color-text, #111); border: 1px solid var(--wg-color-border, #e5e7eb); border-radius: 8px; cursor: pointer" disabled>
        <wg-spinner size="xs" color="muted"></wg-spinner>
        Processing
      </button>
    </div>
  `,
};
