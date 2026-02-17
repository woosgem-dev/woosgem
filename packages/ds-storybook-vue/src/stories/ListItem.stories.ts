import type { Meta, StoryObj } from '@storybook/vue3';
import { ListItem } from '@woosgem/ds-vue';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'interactive'],
      description: 'Visual style of the list item',
      table: { category: 'Style' },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the item is selected',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the item',
      table: { category: 'State' },
    },
    divider: {
      control: 'boolean',
      description: 'Shows bottom divider',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { ListItem },
    setup() { return { args }; },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem v-bind="args">List Item</ListItem>
      </ul>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem variant="default">Default Variant</ListItem>
        <ListItem variant="interactive">Interactive Variant</ListItem>
      </ul>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem variant="interactive" @click="() => alert('Clicked!')">Click me</ListItem>
        <ListItem variant="interactive" @click="() => alert('Another click!')">Click me too</ListItem>
      </ul>
    `,
  }),
};

export const Selected: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem variant="interactive" :selected="true">Selected Item</ListItem>
        <ListItem variant="interactive">Unselected Item</ListItem>
        <ListItem variant="interactive">Another Item</ListItem>
      </ul>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem variant="interactive">Normal Item</ListItem>
        <ListItem variant="interactive" :disabled="true">Disabled Item</ListItem>
        <ListItem variant="interactive">Another Item</ListItem>
      </ul>
    `,
  }),
};

export const WithDivider: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem :divider="true">First Item</ListItem>
        <ListItem :divider="true">Second Item</ListItem>
        <ListItem :divider="true">Third Item</ListItem>
        <ListItem>Last Item (no divider)</ListItem>
      </ul>
    `,
  }),
};

export const CompleteExample: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <div style="width: 400px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Navigation Menu</h3>
        <ul style="list-style: none; padding: 0; margin: 0; border: 1px solid #e5e5e5; border-radius: 8px">
          <ListItem variant="interactive" :selected="true" :divider="true">Dashboard</ListItem>
          <ListItem variant="interactive" :divider="true">Projects</ListItem>
          <ListItem variant="interactive" :divider="true">Team</ListItem>
          <ListItem variant="interactive" :disabled="true" :divider="true">Settings (Coming Soon)</ListItem>
          <ListItem variant="interactive">Logout</ListItem>
        </ul>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    components: { ListItem },
    template: `
      <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
        <ListItem variant="default">Default</ListItem>
        <ListItem variant="interactive">Interactive</ListItem>
        <ListItem variant="interactive" :selected="true">Selected</ListItem>
        <ListItem variant="interactive" :disabled="true">Disabled</ListItem>
        <ListItem variant="interactive" :divider="true">With Divider</ListItem>
      </ul>
    `,
  }),
};
