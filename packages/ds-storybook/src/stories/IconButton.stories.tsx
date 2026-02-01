import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@woosgem/ds-react';

// Icons with viewBox only (no fixed width/height) - CSS controls size
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      description: 'Visual style of the icon button',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Color theme of the icon button',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the icon button',
      table: { category: 'Style' },
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Shape of the icon button',
      table: { category: 'Style' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon button',
      table: { category: 'State' },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the icon button (required)',
      table: { category: 'Accessibility' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <PlusIcon />,
    'aria-label': 'Add item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    shape: 'square',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton variant="filled" aria-label="Add">
        <PlusIcon />
      </IconButton>
      <IconButton variant="outline" aria-label="Add">
        <PlusIcon />
      </IconButton>
      <IconButton variant="ghost" aria-label="Add">
        <PlusIcon />
      </IconButton>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton color="primary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton color="danger" aria-label="Delete">
        <TrashIcon />
      </IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton size="xs" aria-label="Close">
        <CloseIcon />
      </IconButton>
      <IconButton size="sm" aria-label="Close">
        <CloseIcon />
      </IconButton>
      <IconButton size="md" aria-label="Close">
        <CloseIcon />
      </IconButton>
      <IconButton size="lg" aria-label="Close">
        <CloseIcon />
      </IconButton>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton shape="square" aria-label="Add">
        <PlusIcon />
      </IconButton>
      <IconButton shape="circle" aria-label="Add">
        <PlusIcon />
      </IconButton>
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton variant="outline" color="primary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton variant="outline" color="secondary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton variant="outline" color="danger" aria-label="Delete">
        <TrashIcon />
      </IconButton>
    </div>
  ),
};

export const GhostVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton variant="ghost" color="primary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton variant="ghost" color="secondary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton variant="ghost" color="danger" aria-label="Delete">
        <TrashIcon />
      </IconButton>
    </div>
  ),
};

export const CircleButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton shape="circle" variant="filled" aria-label="Add">
        <PlusIcon />
      </IconButton>
      <IconButton shape="circle" variant="outline" aria-label="Close">
        <CloseIcon />
      </IconButton>
      <IconButton shape="circle" variant="ghost" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: <PlusIcon />,
    'aria-label': 'Add item',
    disabled: true,
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton disabled aria-label="Disabled filled">
        <PlusIcon />
      </IconButton>
      <IconButton disabled variant="outline" aria-label="Disabled outline">
        <PlusIcon />
      </IconButton>
      <IconButton disabled variant="ghost" aria-label="Disabled ghost">
        <PlusIcon />
      </IconButton>
      <IconButton disabled shape="circle" aria-label="Disabled circle">
        <PlusIcon />
      </IconButton>
    </div>
  ),
};

export const AllSizesWithShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', width: '80px' }}>Square:</div>
        <IconButton size="xs" shape="square" aria-label="XS">
          <CloseIcon />
        </IconButton>
        <IconButton size="sm" shape="square" aria-label="SM">
          <CloseIcon />
        </IconButton>
        <IconButton size="md" shape="square" aria-label="MD">
          <CloseIcon />
        </IconButton>
        <IconButton size="lg" shape="square" aria-label="LG">
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', width: '80px' }}>Circle:</div>
        <IconButton size="xs" shape="circle" aria-label="XS">
          <CloseIcon />
        </IconButton>
        <IconButton size="sm" shape="circle" aria-label="SM">
          <CloseIcon />
        </IconButton>
        <IconButton size="md" shape="circle" aria-label="MD">
          <CloseIcon />
        </IconButton>
        <IconButton size="lg" shape="circle" aria-label="LG">
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  ),
};

export const ActionBar: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        padding: '8px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
      }}
    >
      <IconButton variant="ghost" color="secondary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton variant="ghost" color="secondary" aria-label="Add">
        <PlusIcon />
      </IconButton>
      <IconButton variant="ghost" color="danger" aria-label="Delete">
        <TrashIcon />
      </IconButton>
    </div>
  ),
};

export const AutoIconSizing: Story = {
  name: 'Auto Icon Sizing',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>
          Icon size automatically adjusts based on button size (xs: 12px, sm: 16px, md: 20px, lg: 24px)
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="xs" aria-label="XS button">
              <PlusIcon />
            </IconButton>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>xs</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="sm" aria-label="SM button">
              <PlusIcon />
            </IconButton>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>sm</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="md" aria-label="MD button">
              <PlusIcon />
            </IconButton>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>md</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton size="lg" aria-label="LG button">
              <PlusIcon />
            </IconButton>
            <div style={{ fontSize: '12px', marginTop: '4px' }}>lg</div>
          </div>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>
          Same SVG icon in different button sizes
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <IconButton size="xs" variant="outline" aria-label="Settings XS">
            <SettingsIcon />
          </IconButton>
          <IconButton size="sm" variant="outline" aria-label="Settings SM">
            <SettingsIcon />
          </IconButton>
          <IconButton size="md" variant="outline" aria-label="Settings MD">
            <SettingsIcon />
          </IconButton>
          <IconButton size="lg" variant="outline" aria-label="Settings LG">
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </div>
  ),
};
