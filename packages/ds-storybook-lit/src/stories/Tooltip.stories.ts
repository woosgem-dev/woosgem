import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const infoSvg = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
const settingsSvg = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`;
const deleteSvg = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`;
const editSvg = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`;

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'wg-tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content text',
      table: { category: 'Content' },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position relative to trigger element',
      table: { category: 'Style' },
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
      description: 'Event that triggers tooltip',
      table: { category: 'Behavior' },
    },
    arrow: {
      control: 'boolean',
      description: 'Whether to show arrow',
      table: { category: 'Style' },
    },
    delay: {
      control: 'number',
      description: 'Delay before showing tooltip (in ms)',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
      table: { category: 'State' },
    },
    visible: {
      control: 'boolean',
      description: 'Whether the tooltip is visible (controlled mode)',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    trigger: 'hover',
    arrow: true,
  },
  render: (args) => html`
    <wg-tooltip content=${args.content} position=${args.position} trigger=${args.trigger} ?arrow=${args.arrow}>
      <wg-button>Hover me</wg-button>
    </wg-tooltip>
  `,
};

export const Positions: Story = {
  render: () => html`
    <div style="display: flex; gap: 80px; align-items: center; padding: 100px">
      <wg-tooltip content="Top tooltip" position="top">
        <wg-button>Top</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Bottom tooltip" position="bottom">
        <wg-button>Bottom</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Left tooltip" position="left">
        <wg-button>Left</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Right tooltip" position="right">
        <wg-button>Right</wg-button>
      </wg-tooltip>
    </div>
  `,
};

export const Triggers: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tooltip content="Hover to see tooltip" trigger="hover">
        <wg-button>Hover</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Click to toggle tooltip" trigger="click">
        <wg-button>Click</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Focus to see tooltip" trigger="focus">
        <wg-button>Focus</wg-button>
      </wg-tooltip>
    </div>
  `,
};

export const WithArrow: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tooltip content="With arrow" arrow>
        <wg-button>With Arrow</wg-button>
      </wg-tooltip>
      <wg-tooltip content="Without arrow" .arrow=${false}>
        <wg-button>Without Arrow</wg-button>
      </wg-tooltip>
    </div>
  `,
};

export const WithDelay: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tooltip content="No delay" .delay=${0}>
        <wg-button>No Delay</wg-button>
      </wg-tooltip>
      <wg-tooltip content="300ms delay" .delay=${300}>
        <wg-button>300ms Delay</wg-button>
      </wg-tooltip>
      <wg-tooltip content="1000ms delay" .delay=${1000}>
        <wg-button>1000ms Delay</wg-button>
      </wg-tooltip>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <wg-tooltip content="This tooltip is disabled" disabled>
      <wg-button>Disabled Tooltip</wg-button>
    </wg-tooltip>
  `,
};

export const WithIconButton: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tooltip content="Information" position="top">
        <wg-icon-button aria-label="Information">${infoSvg}</wg-icon-button>
      </wg-tooltip>
      <wg-tooltip content="Settings" position="bottom">
        <wg-icon-button aria-label="Settings">${settingsSvg}</wg-icon-button>
      </wg-tooltip>
      <wg-tooltip content="Delete" position="left">
        <wg-icon-button aria-label="Delete">${deleteSvg}</wg-icon-button>
      </wg-tooltip>
      <wg-tooltip content="Edit" position="right">
        <wg-icon-button aria-label="Edit">${editSvg}</wg-icon-button>
      </wg-tooltip>
    </div>
  `,
};

export const LongContent: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tooltip content="This is a very long tooltip content that might wrap to multiple lines depending on the container width and styling">
        <wg-button>Long Content</wg-button>
      </wg-tooltip>
    </div>
  `,
};

export const AllPositions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; padding: 100px; align-items: center; justify-items: center">
      <div></div>
      <wg-tooltip content="Top position" position="top">
        <wg-button>Top</wg-button>
      </wg-tooltip>
      <div></div>

      <wg-tooltip content="Left position" position="left">
        <wg-button>Left</wg-button>
      </wg-tooltip>
      <div style="text-align: center; color: #888">
        Hover over buttons
      </div>
      <wg-tooltip content="Right position" position="right">
        <wg-button>Right</wg-button>
      </wg-tooltip>

      <div></div>
      <wg-tooltip content="Bottom position" position="bottom">
        <wg-button>Bottom</wg-button>
      </wg-tooltip>
      <div></div>
    </div>
  `,
};
