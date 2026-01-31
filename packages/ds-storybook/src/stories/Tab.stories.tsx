
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@woosgem/ds-react';

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
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tab',
    variant: 'underline',
    size: 'md',
    selected: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tab variant="underline">Underline</Tab>
      <Tab variant="filled">Filled</Tab>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tab size="sm">Small</Tab>
      <Tab size="md">Medium</Tab>
      <Tab size="lg">Large</Tab>
    </div>
  ),
};

export const Selected: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tab selected>Selected Tab</Tab>
      <Tab>Unselected Tab</Tab>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tab disabled>Disabled Tab</Tab>
      <Tab>Normal Tab</Tab>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <div style={{ display: 'flex', gap: '0' }}>
        <Tab fullWidth selected>Home</Tab>
        <Tab fullWidth>Profile</Tab>
        <Tab fullWidth>Settings</Tab>
      </div>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <div style={{ display: 'flex', gap: '0', marginBottom: '24px' }}>
        <Tab variant="underline" fullWidth selected>Overview</Tab>
        <Tab variant="underline" fullWidth>Activity</Tab>
        <Tab variant="underline" fullWidth>Analytics</Tab>
        <Tab variant="underline" fullWidth disabled>Reports</Tab>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tab variant="filled" selected>All</Tab>
        <Tab variant="filled">Active</Tab>
        <Tab variant="filled">Completed</Tab>
        <Tab variant="filled">Archived</Tab>
      </div>
    </div>
  ),
};
