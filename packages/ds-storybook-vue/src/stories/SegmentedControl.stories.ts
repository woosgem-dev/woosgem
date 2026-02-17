import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { SegmentedControl, SegmentedControlItem } from '@woosgem/ds-vue';

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
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    template: `
      <SegmentedControl size="md">
        <SegmentedControlItem :selected="true">Option 1</SegmentedControlItem>
        <SegmentedControlItem>Option 2</SegmentedControlItem>
        <SegmentedControlItem>Option 3</SegmentedControlItem>
      </SegmentedControl>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
        <SegmentedControl size="sm">
          <SegmentedControlItem :selected="true">Small</SegmentedControlItem>
          <SegmentedControlItem>Option 2</SegmentedControlItem>
          <SegmentedControlItem>Option 3</SegmentedControlItem>
        </SegmentedControl>
        <SegmentedControl size="md">
          <SegmentedControlItem :selected="true">Medium</SegmentedControlItem>
          <SegmentedControlItem>Option 2</SegmentedControlItem>
          <SegmentedControlItem>Option 3</SegmentedControlItem>
        </SegmentedControl>
        <SegmentedControl size="lg">
          <SegmentedControlItem :selected="true">Large</SegmentedControlItem>
          <SegmentedControlItem>Option 2</SegmentedControlItem>
          <SegmentedControlItem>Option 3</SegmentedControlItem>
        </SegmentedControl>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    template: `
      <div style="width: 400px">
        <SegmentedControl size="md" :fullWidth="true">
          <SegmentedControlItem :selected="true">Option 1</SegmentedControlItem>
          <SegmentedControlItem>Option 2</SegmentedControlItem>
          <SegmentedControlItem>Option 3</SegmentedControlItem>
        </SegmentedControl>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
        <SegmentedControl size="md">
          <SegmentedControlItem :selected="true">Active</SegmentedControlItem>
          <SegmentedControlItem>Normal</SegmentedControlItem>
          <SegmentedControlItem :disabled="true">Disabled Item</SegmentedControlItem>
        </SegmentedControl>
        <SegmentedControl size="md" :disabled="true">
          <SegmentedControlItem :selected="true">Disabled Control</SegmentedControlItem>
          <SegmentedControlItem>All Disabled</SegmentedControlItem>
          <SegmentedControlItem>Cannot Click</SegmentedControlItem>
        </SegmentedControl>
      </div>
    `,
  }),
};

export const BuySellExample: Story = {
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    setup() {
      const selected = ref<'buy' | 'sell'>('buy');
      return { selected };
    },
    template: `
      <div style="width: 300px">
        <SegmentedControl size="lg" :fullWidth="true">
          <SegmentedControlItem :selected="selected === 'buy'" @click="selected = 'buy'">Buy</SegmentedControlItem>
          <SegmentedControlItem :selected="selected === 'sell'" @click="selected = 'sell'">Sell</SegmentedControlItem>
        </SegmentedControl>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px">
          <div style="font-weight: 600; margin-bottom: 8px">{{ selected === 'buy' ? 'Buy Order' : 'Sell Order' }}</div>
          <div style="font-size: 14px; color: #666">{{ selected === 'buy' ? 'Enter the amount you want to buy' : 'Enter the amount you want to sell' }}</div>
        </div>
      </div>
    `,
  }),
};

export const FilterExample: Story = {
  render: () => ({
    components: { SegmentedControl, SegmentedControlItem },
    setup() {
      const filter = ref<'all' | 'active' | 'completed'>('all');
      return { filter };
    },
    template: `
      <div style="width: 400px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tasks Filter</h3>
        <SegmentedControl size="md" :fullWidth="true">
          <SegmentedControlItem :selected="filter === 'all'" @click="filter = 'all'">All</SegmentedControlItem>
          <SegmentedControlItem :selected="filter === 'active'" @click="filter = 'active'">Active</SegmentedControlItem>
          <SegmentedControlItem :selected="filter === 'completed'" @click="filter = 'completed'">Completed</SegmentedControlItem>
        </SegmentedControl>
        <div style="margin-top: 16px; padding: 12px; border: 1px solid #e5e5e5; border-radius: 8px">
          <div style="font-size: 14px; color: #666">Showing: <strong style="color: #000">{{ filter }}</strong> tasks</div>
        </div>
      </div>
    `,
  }),
};
