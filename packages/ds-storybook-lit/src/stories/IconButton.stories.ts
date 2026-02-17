import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const closeSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>`;
const plusSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>`;
const settingsSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>`;
const trashSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>`;

const meta: Meta = {
  title: 'Components/IconButton',
  component: 'wg-icon-button',
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
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
    shape: 'square',
  },
  render: (args) => html`
    <wg-icon-button
      variant=${args.variant}
      color=${args.color}
      size=${args.size}
      shape=${args.shape}
      aria-label="Add item"
    >${plusSvg}</wg-icon-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button variant="filled" aria-label="Add">${plusSvg}</wg-icon-button>
      <wg-icon-button variant="outline" aria-label="Add">${plusSvg}</wg-icon-button>
      <wg-icon-button variant="ghost" aria-label="Add">${plusSvg}</wg-icon-button>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button color="primary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button color="secondary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button color="danger" aria-label="Delete">${trashSvg}</wg-icon-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button size="xs" aria-label="Close">${closeSvg}</wg-icon-button>
      <wg-icon-button size="sm" aria-label="Close">${closeSvg}</wg-icon-button>
      <wg-icon-button size="md" aria-label="Close">${closeSvg}</wg-icon-button>
      <wg-icon-button size="lg" aria-label="Close">${closeSvg}</wg-icon-button>
    </div>
  `,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button shape="square" aria-label="Add">${plusSvg}</wg-icon-button>
      <wg-icon-button shape="circle" aria-label="Add">${plusSvg}</wg-icon-button>
    </div>
  `,
};

export const OutlineVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button variant="outline" color="primary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button variant="outline" color="secondary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button variant="outline" color="danger" aria-label="Delete">${trashSvg}</wg-icon-button>
    </div>
  `,
};

export const GhostVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button variant="ghost" color="primary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button variant="ghost" color="secondary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button variant="ghost" color="danger" aria-label="Delete">${trashSvg}</wg-icon-button>
    </div>
  `,
};

export const CircleButtons: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button shape="circle" variant="filled" aria-label="Add">${plusSvg}</wg-icon-button>
      <wg-icon-button shape="circle" variant="outline" aria-label="Close">${closeSvg}</wg-icon-button>
      <wg-icon-button shape="circle" variant="ghost" aria-label="Settings">${settingsSvg}</wg-icon-button>
    </div>
  `,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => html`
    <wg-icon-button ?disabled=${args.disabled} aria-label="Add item">${plusSvg}</wg-icon-button>
  `,
};

export const DisabledStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-icon-button disabled aria-label="Disabled filled">${plusSvg}</wg-icon-button>
      <wg-icon-button disabled variant="outline" aria-label="Disabled outline">${plusSvg}</wg-icon-button>
      <wg-icon-button disabled variant="ghost" aria-label="Disabled ghost">${plusSvg}</wg-icon-button>
      <wg-icon-button disabled shape="circle" aria-label="Disabled circle">${plusSvg}</wg-icon-button>
    </div>
  `,
};

export const AllSizesWithShapes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; gap: 12px; align-items: center">
        <div style="font-size: 14px; width: 80px">Square:</div>
        <wg-icon-button size="xs" shape="square" aria-label="XS">${closeSvg}</wg-icon-button>
        <wg-icon-button size="sm" shape="square" aria-label="SM">${closeSvg}</wg-icon-button>
        <wg-icon-button size="md" shape="square" aria-label="MD">${closeSvg}</wg-icon-button>
        <wg-icon-button size="lg" shape="square" aria-label="LG">${closeSvg}</wg-icon-button>
      </div>
      <div style="display: flex; gap: 12px; align-items: center">
        <div style="font-size: 14px; width: 80px">Circle:</div>
        <wg-icon-button size="xs" shape="circle" aria-label="XS">${closeSvg}</wg-icon-button>
        <wg-icon-button size="sm" shape="circle" aria-label="SM">${closeSvg}</wg-icon-button>
        <wg-icon-button size="md" shape="circle" aria-label="MD">${closeSvg}</wg-icon-button>
        <wg-icon-button size="lg" shape="circle" aria-label="LG">${closeSvg}</wg-icon-button>
      </div>
    </div>
  `,
};

export const ActionBar: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; padding: 8px; background-color: #f5f5f5; border-radius: 8px">
      <wg-icon-button variant="ghost" color="secondary" aria-label="Settings">${settingsSvg}</wg-icon-button>
      <wg-icon-button variant="ghost" color="secondary" aria-label="Add">${plusSvg}</wg-icon-button>
      <wg-icon-button variant="ghost" color="danger" aria-label="Delete">${trashSvg}</wg-icon-button>
    </div>
  `,
};

export const AutoIconSizing: Story = {
  name: 'Auto Icon Sizing',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #666">
          Icon size automatically adjusts based on button size (xs: 12px, sm: 16px, md: 20px, lg: 24px)
        </p>
        <div style="display: flex; gap: 12px; align-items: center">
          ${(['xs', 'sm', 'md', 'lg'] as const).map(
            (size) => html`
              <div style="text-align: center">
                <wg-icon-button size=${size} aria-label="${size} button">${plusSvg}</wg-icon-button>
                <div style="font-size: 12px; margin-top: 4px">${size}</div>
              </div>
            `,
          )}
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #666">
          Same SVG icon in different button sizes
        </p>
        <div style="display: flex; gap: 12px; align-items: center">
          <wg-icon-button size="xs" variant="outline" aria-label="Settings XS">${settingsSvg}</wg-icon-button>
          <wg-icon-button size="sm" variant="outline" aria-label="Settings SM">${settingsSvg}</wg-icon-button>
          <wg-icon-button size="md" variant="outline" aria-label="Settings MD">${settingsSvg}</wg-icon-button>
          <wg-icon-button size="lg" variant="outline" aria-label="Settings LG">${settingsSvg}</wg-icon-button>
        </div>
      </div>
    </div>
  `,
};
