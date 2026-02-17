import type { Meta, StoryObj } from '@storybook/vue3';
import { Tooltip, Button, IconButton } from '@woosgem/ds-vue';

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
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() { return { args }; },
    template: '<Tooltip v-bind="args"><Button>Hover me</Button></Tooltip>',
  }),
};

export const Positions: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: flex; gap: 80px; align-items: center; padding: 100px">
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
    `,
  }),
};

export const Triggers: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
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
    `,
  }),
};

export const WithArrow: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <Tooltip content="With arrow" :arrow="true">
          <Button>With Arrow</Button>
        </Tooltip>
        <Tooltip content="Without arrow" :arrow="false">
          <Button>Without Arrow</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const WithDelay: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <Tooltip content="No delay" :delay="0">
          <Button>No Delay</Button>
        </Tooltip>
        <Tooltip content="300ms delay" :delay="300">
          <Button>300ms Delay</Button>
        </Tooltip>
        <Tooltip content="1000ms delay" :delay="1000">
          <Button>1000ms Delay</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() { return { args }; },
    template: '<Tooltip v-bind="args"><Button>Disabled Tooltip</Button></Tooltip>',
  }),
};

export const WithIconButton: Story = {
  render: () => ({
    components: { Tooltip, IconButton },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <Tooltip content="Information" position="top">
          <IconButton aria-label="Information">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </IconButton>
        </Tooltip>
        <Tooltip content="Settings" position="bottom">
          <IconButton aria-label="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </IconButton>
        </Tooltip>
        <Tooltip content="Delete" position="left">
          <IconButton aria-label="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </IconButton>
        </Tooltip>
        <Tooltip content="Edit" position="right">
          <IconButton aria-label="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </IconButton>
        </Tooltip>
      </div>
    `,
  }),
};

export const LongContent: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <Tooltip content="This is a very long tooltip content that might wrap to multiple lines depending on the container width and styling">
          <Button>Long Content</Button>
        </Tooltip>
      </div>
    `,
  }),
};

export const AllPositions: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; padding: 100px; align-items: center; justify-items: center">
        <div></div>
        <Tooltip content="Top position" position="top">
          <Button>Top</Button>
        </Tooltip>
        <div></div>

        <Tooltip content="Left position" position="left">
          <Button>Left</Button>
        </Tooltip>
        <div style="text-align: center; color: #888">Hover over buttons</div>
        <Tooltip content="Right position" position="right">
          <Button>Right</Button>
        </Tooltip>

        <div></div>
        <Tooltip content="Bottom position" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <div></div>
      </div>
    `,
  }),
};
