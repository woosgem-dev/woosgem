import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem, MenuDivider, MenuGroup } from '@woosgem/ds-react';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the menu',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  ),
  args: {
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Small</div>
        <Menu size="sm">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Medium</div>
        <Menu size="md">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Large</div>
        <Menu size="lg">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </div>
    </div>
  ),
};

export const ActiveItem: Story = {
  render: () => (
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem active>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem disabled>Paste</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  ),
};

export const DestructiveItem: Story = {
  render: () => (
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuDivider />
      <MenuItem destructive>Delete</MenuItem>
    </Menu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Menu>
      <MenuGroup aria-label="Edit">
        <div className="wg-menu__group-label">Edit</div>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup aria-label="File">
        <div className="wg-menu__group-label">File</div>
        <MenuItem>Save</MenuItem>
        <MenuItem>Export</MenuItem>
      </MenuGroup>
    </Menu>
  ),
};

export const ContextMenu: Story = {
  name: 'Context Menu',
  render: () => (
    <Menu>
      <MenuGroup aria-label="Navigation">
        <div className="wg-menu__group-label">Navigation</div>
        <MenuItem>{'\u2190'} Back</MenuItem>
        <MenuItem>{'\u2192'} Forward</MenuItem>
        <MenuItem>{'\u21BB'} Reload</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup aria-label="Edit">
        <div className="wg-menu__group-label">Edit</div>
        <MenuItem>{'\u2702'} Cut</MenuItem>
        <MenuItem>{'\u{1F4CB}'} Copy</MenuItem>
        <MenuItem>{'\u{1F4C4}'} Paste</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuItem>{'\u2B50'} Add to Favorites</MenuItem>
      <MenuItem>{'\u{1F50D}'} Inspect Element</MenuItem>
      <MenuDivider />
      <MenuItem destructive>{'\u{1F5D1}'} Delete</MenuItem>
    </Menu>
  ),
};
