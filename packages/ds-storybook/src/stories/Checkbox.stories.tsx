import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@woosgem/ds-react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Checkbox label',
    size: 'md',
  },
};

export const Checked: Story = {
  args: {
    children: 'Checked checkbox',
    checked: true,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox checked>Checked</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox checked disabled>Checked & Disabled</Checkbox>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="sm" checked>Small checkbox</Checkbox>
      <Checkbox size="md" checked>Medium checkbox</Checkbox>
      <Checkbox size="lg" checked>Large checkbox</Checkbox>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    children: 'Select all items',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled option',
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    children: 'Checked and disabled',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Select this item',
    checked: true,
  },
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox checked>I agree to the Terms of Service</Checkbox>
      <Checkbox>Subscribe to newsletter</Checkbox>
      <Checkbox>Receive marketing emails</Checkbox>
    </div>
  ),
};
