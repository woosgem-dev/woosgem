
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
        <IconButton icon="info" aria-label="Information" />
      </Tooltip>
      <Tooltip content="Settings" position="bottom">
        <IconButton icon="settings" aria-label="Settings" />
      </Tooltip>
      <Tooltip content="Delete" position="left">
        <IconButton icon="delete" aria-label="Delete" />
      </Tooltip>
      <Tooltip content="Edit" position="right">
        <IconButton icon="edit" aria-label="Edit" />
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
