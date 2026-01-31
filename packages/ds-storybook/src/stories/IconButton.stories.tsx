
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@woosgem/ds-react';

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
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
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
    },
    disabled: { control: 'boolean' },
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
