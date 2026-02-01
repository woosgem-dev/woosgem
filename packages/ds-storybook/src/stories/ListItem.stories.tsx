
import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '@woosgem/ds-react';

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
    children: 'List Item',
    variant: 'default',
  },
  decorators: [
    (Story) => (
      <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
        <Story />
      </ul>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem variant="default">Default Variant</ListItem>
      <ListItem variant="interactive">Interactive Variant</ListItem>
    </ul>
  ),
};

export const Interactive: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem variant="interactive" onClick={() => alert('Clicked!')}>
        Click me
      </ListItem>
      <ListItem variant="interactive" onClick={() => alert('Another click!')}>
        Click me too
      </ListItem>
    </ul>
  ),
};

export const Selected: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem variant="interactive" selected>
        Selected Item
      </ListItem>
      <ListItem variant="interactive">Unselected Item</ListItem>
      <ListItem variant="interactive">Another Item</ListItem>
    </ul>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem variant="interactive">Normal Item</ListItem>
      <ListItem variant="interactive" disabled>
        Disabled Item
      </ListItem>
      <ListItem variant="interactive">Another Item</ListItem>
    </ul>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem divider>First Item</ListItem>
      <ListItem divider>Second Item</ListItem>
      <ListItem divider>Third Item</ListItem>
      <ListItem>Last Item (no divider)</ListItem>
    </ul>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>
        Navigation Menu
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, border: '1px solid #e5e5e5', borderRadius: '8px' }}>
        <ListItem variant="interactive" selected divider>
          Dashboard
        </ListItem>
        <ListItem variant="interactive" divider>
          Projects
        </ListItem>
        <ListItem variant="interactive" divider>
          Team
        </ListItem>
        <ListItem variant="interactive" disabled divider>
          Settings (Coming Soon)
        </ListItem>
        <ListItem variant="interactive">
          Logout
        </ListItem>
      </ul>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <ul style={{ width: '300px', listStyle: 'none', padding: 0, margin: 0 }}>
      <ListItem variant="default">Default</ListItem>
      <ListItem variant="interactive">Interactive</ListItem>
      <ListItem variant="interactive" selected>Selected</ListItem>
      <ListItem variant="interactive" disabled>Disabled</ListItem>
      <ListItem variant="interactive" divider>With Divider</ListItem>
    </ul>
  ),
};
