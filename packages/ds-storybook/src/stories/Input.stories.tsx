
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@woosgem/ds-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underline'],
      description: 'Visual style of the input',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
      table: { category: 'Style' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: { category: 'State' },
    },
    success: {
      control: 'boolean',
      description: 'Shows success state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
      table: { category: 'State' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'outline',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="underline" placeholder="Underline variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input placeholder="Normal input" />
      <Input error placeholder="Error state" />
      <Input success placeholder="Success state" />
      <Input disabled placeholder="Disabled state" />
    </div>
  ),
};

export const FilledVariantStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="filled" placeholder="Normal" />
      <Input variant="filled" error placeholder="Error" />
      <Input variant="filled" success placeholder="Success" />
      <Input variant="filled" disabled placeholder="Disabled" />
    </div>
  ),
};

export const UnderlineVariantStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input variant="underline" placeholder="Normal" />
      <Input variant="underline" error placeholder="Error" />
      <Input variant="underline" success placeholder="Success" />
      <Input variant="underline" disabled placeholder="Disabled" />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="search" placeholder="Search input" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid email address',
    error: true,
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Valid input',
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};
