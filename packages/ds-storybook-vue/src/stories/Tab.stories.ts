import type { Meta, StoryObj } from '@storybook/vue3';
import { Tab } from '@woosgem/ds-vue';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'filled'],
      description: 'Visual style of the tab',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color of the tab when selected',
      table: { category: 'Style' },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the tab is selected',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tab',
      table: { category: 'State' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes tab full width',
      table: { category: 'Layout' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'underline',
    size: 'md',
    selected: false,
    disabled: false,
  },
  render: (args) => ({
    components: { Tab },
    setup() { return { args }; },
    template: '<Tab v-bind="args">Tab</Tab>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <Tab variant="underline">Underline</Tab>
        <Tab variant="filled">Filled</Tab>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Tab size="sm">Small</Tab>
        <Tab size="md">Medium</Tab>
        <Tab size="lg">Large</Tab>
      </div>
    `,
  }),
};

export const UnderlineStates: Story = {
  name: 'Underline - States',
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px">
        <div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Default / Selected / Disabled</div>
          <div style="display: flex; gap: 0">
            <Tab variant="underline">Default</Tab>
            <Tab variant="underline" :selected="true">Selected</Tab>
            <Tab variant="underline" :disabled="true">Disabled</Tab>
          </div>
        </div>
      </div>
    `,
  }),
};

export const FilledStates: Story = {
  name: 'Filled - States',
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px">
        <div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Default / Selected / Disabled</div>
          <div style="display: flex; gap: 4px">
            <Tab variant="filled">Default</Tab>
            <Tab variant="filled" :selected="true">Selected</Tab>
            <Tab variant="filled" :disabled="true">Disabled</Tab>
          </div>
        </div>
      </div>
    `,
  }),
};

export const UnderlineSizes: Story = {
  name: 'Underline - Sizes',
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
        <div style="display: flex; gap: 0">
          <Tab variant="underline" size="sm" :selected="true">Small</Tab>
          <Tab variant="underline" size="sm">Tab 2</Tab>
          <Tab variant="underline" size="sm">Tab 3</Tab>
        </div>
        <div style="display: flex; gap: 0">
          <Tab variant="underline" size="md" :selected="true">Medium</Tab>
          <Tab variant="underline" size="md">Tab 2</Tab>
          <Tab variant="underline" size="md">Tab 3</Tab>
        </div>
        <div style="display: flex; gap: 0">
          <Tab variant="underline" size="lg" :selected="true">Large</Tab>
          <Tab variant="underline" size="lg">Tab 2</Tab>
          <Tab variant="underline" size="lg">Tab 3</Tab>
        </div>
      </div>
    `,
  }),
};

export const FilledSizes: Story = {
  name: 'Filled - Sizes',
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
        <div style="display: flex; gap: 4px">
          <Tab variant="filled" size="sm" :selected="true">Small</Tab>
          <Tab variant="filled" size="sm">Tab 2</Tab>
          <Tab variant="filled" size="sm">Tab 3</Tab>
        </div>
        <div style="display: flex; gap: 4px">
          <Tab variant="filled" size="md" :selected="true">Medium</Tab>
          <Tab variant="filled" size="md">Tab 2</Tab>
          <Tab variant="filled" size="md">Tab 3</Tab>
        </div>
        <div style="display: flex; gap: 4px">
          <Tab variant="filled" size="lg" :selected="true">Large</Tab>
          <Tab variant="filled" size="lg">Tab 2</Tab>
          <Tab variant="filled" size="lg">Tab 3</Tab>
        </div>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  render: () => ({
    components: { Tab },
    template: `
      <div style="width: 400px">
        <div style="display: flex; gap: 0">
          <Tab variant="underline" :fullWidth="true" :selected="true">Home</Tab>
          <Tab variant="underline" :fullWidth="true">Profile</Tab>
          <Tab variant="underline" :fullWidth="true">Settings</Tab>
        </div>
      </div>
    `,
  }),
};

export const TabGroup: Story = {
  name: 'Tab Group Example',
  render: () => ({
    components: { Tab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; width: 500px">
        <div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Underline Tabs</div>
          <div style="display: flex; gap: 0; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
            <Tab variant="underline" :selected="true">Overview</Tab>
            <Tab variant="underline">Activity</Tab>
            <Tab variant="underline">Analytics</Tab>
            <Tab variant="underline" :disabled="true">Reports</Tab>
          </div>
        </div>
        <div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Filled Tabs</div>
          <div style="display: flex; gap: 4px; padding: 4px; background-color: var(--wg-color-background-muted, #f5f5f5); border-radius: 8px">
            <Tab variant="filled" :selected="true">All</Tab>
            <Tab variant="filled">Active</Tab>
            <Tab variant="filled">Completed</Tab>
            <Tab variant="filled">Archived</Tab>
          </div>
        </div>
      </div>
    `,
  }),
};
