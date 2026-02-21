
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button, IconButton } from '@woosgem/ds-react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    trigger: 'hover',
    arrow: true,
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '80px', alignItems: 'center', padding: '100px' }}>
      <Tooltip content="Top tooltip" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="Hover to see tooltip" trigger="hover">
        <Button>Hover</Button>
      </Tooltip>
      <Tooltip content="Click to toggle tooltip" trigger="click">
        <Button>Click</Button>
      </Tooltip>
      <Tooltip content="Focus to see tooltip" trigger="focus">
        <Button>Focus</Button>
      </Tooltip>
    </div>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="With arrow" arrow={true}>
        <Button>With Arrow</Button>
      </Tooltip>
      <Tooltip content="Without arrow" arrow={false}>
        <Button>Without Arrow</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="No delay" delay={0}>
        <Button>No Delay</Button>
      </Tooltip>
      <Tooltip content="300ms delay" delay={300}>
        <Button>300ms Delay</Button>
      </Tooltip>
      <Tooltip content="1000ms delay" delay={1000}>
        <Button>1000ms Delay</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <Button>Disabled Tooltip</Button>,
  },
};

export const WithIconButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="Information" position="top">
        <IconButton aria-label="Information">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
        </IconButton>
      </Tooltip>
      <Tooltip content="Settings" position="bottom">
        <IconButton aria-label="Settings">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>
        </IconButton>
      </Tooltip>
      <Tooltip content="Delete" position="left">
        <IconButton aria-label="Delete">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
        </IconButton>
      </Tooltip>
      <Tooltip content="Edit" position="right">
        <IconButton aria-label="Edit">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="This is a very long tooltip content that might wrap to multiple lines depending on the container width and styling">
        <Button>Long Content</Button>
      </Tooltip>
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '80px',
        padding: '100px',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <div></div>
      <Tooltip content="Top position" position="top">
        <Button>Top</Button>
      </Tooltip>
      <div></div>

      <Tooltip content="Left position" position="left">
        <Button>Left</Button>
      </Tooltip>
      <div style={{ textAlign: 'center', color: '#888' }}>
        Hover over buttons
      </div>
      <Tooltip content="Right position" position="right">
        <Button>Right</Button>
      </Tooltip>

      <div></div>
      <Tooltip content="Bottom position" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
};
