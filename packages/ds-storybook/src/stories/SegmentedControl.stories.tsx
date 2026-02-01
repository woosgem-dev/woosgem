import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from '@woosgem/ds-react';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the segmented control',
      table: { category: 'Style' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes control full width',
      table: { category: 'Layout' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the entire control',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SegmentedControl size="md">
      <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>
      <SegmentedControl.Item>Option 2</SegmentedControl.Item>
      <SegmentedControl.Item>Option 3</SegmentedControl.Item>
    </SegmentedControl>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <SegmentedControl size="sm">
        <SegmentedControl.Item selected>Small</SegmentedControl.Item>
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
      <SegmentedControl size="md">
        <SegmentedControl.Item selected>Medium</SegmentedControl.Item>
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
      <SegmentedControl size="lg">
        <SegmentedControl.Item selected>Large</SegmentedControl.Item>
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <SegmentedControl size="md" fullWidth>
        <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <SegmentedControl size="md">
        <SegmentedControl.Item selected>Active</SegmentedControl.Item>
        <SegmentedControl.Item>Normal</SegmentedControl.Item>
        <SegmentedControl.Item disabled>Disabled Item</SegmentedControl.Item>
      </SegmentedControl>
      <SegmentedControl size="md" disabled>
        <SegmentedControl.Item selected>Disabled Control</SegmentedControl.Item>
        <SegmentedControl.Item>All Disabled</SegmentedControl.Item>
        <SegmentedControl.Item>Cannot Click</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  ),
};

export const BuySellExample: Story = {
  render: () => {
    const [selected, setSelected] = useState<'buy' | 'sell'>('buy');

    return (
      <div style={{ width: '300px' }}>
        <SegmentedControl size="lg" fullWidth>
          <SegmentedControl.Item
            selected={selected === 'buy'}
            onClick={() => setSelected('buy')}
          >
            Buy
          </SegmentedControl.Item>
          <SegmentedControl.Item
            selected={selected === 'sell'}
            onClick={() => setSelected('sell')}
          >
            Sell
          </SegmentedControl.Item>
        </SegmentedControl>
        <div style={{ marginTop: '16px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>
            {selected === 'buy' ? 'Buy Order' : 'Sell Order'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {selected === 'buy'
              ? 'Enter the amount you want to buy'
              : 'Enter the amount you want to sell'}
          </div>
        </div>
      </div>
    );
  },
};

export const FilterExample: Story = {
  render: () => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    return (
      <div style={{ width: '400px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>
          Tasks Filter
        </h3>
        <SegmentedControl size="md" fullWidth>
          <SegmentedControl.Item
            selected={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </SegmentedControl.Item>
          <SegmentedControl.Item
            selected={filter === 'active'}
            onClick={() => setFilter('active')}
          >
            Active
          </SegmentedControl.Item>
          <SegmentedControl.Item
            selected={filter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </SegmentedControl.Item>
        </SegmentedControl>
        <div style={{ marginTop: '16px', padding: '12px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Showing: <strong style={{ color: '#000' }}>{filter}</strong> tasks
          </div>
        </div>
      </div>
    );
  },
};
