import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from '@woosgem/ds-vue';

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
  render: (args) => ({
    components: { Input },
    setup() { return { args }; },
    template: '<Input v-bind="args" />',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input variant="outline" placeholder="Outline variant" />
        <Input variant="filled" placeholder="Filled variant" />
        <Input variant="underline" placeholder="Underline variant" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input size="sm" placeholder="Small input" />
        <Input size="md" placeholder="Medium input" />
        <Input size="lg" placeholder="Large input" />
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input placeholder="Normal input" />
        <Input :error="true" placeholder="Error state" />
        <Input :success="true" placeholder="Success state" />
        <Input :disabled="true" placeholder="Disabled state" />
      </div>
    `,
  }),
};

export const FilledVariantStates: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input variant="filled" placeholder="Normal" />
        <Input variant="filled" :error="true" placeholder="Error" />
        <Input variant="filled" :success="true" placeholder="Success" />
        <Input variant="filled" :disabled="true" placeholder="Disabled" />
      </div>
    `,
  }),
};

export const UnderlineVariantStates: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input variant="underline" placeholder="Normal" />
        <Input variant="underline" :error="true" placeholder="Error" />
        <Input variant="underline" :success="true" placeholder="Success" />
        <Input variant="underline" :disabled="true" placeholder="Disabled" />
      </div>
    `,
  }),
};

export const InputTypes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
        <Input type="text" placeholder="Text input" />
        <Input type="email" placeholder="Email input" />
        <Input type="password" placeholder="Password input" />
        <Input type="number" placeholder="Number input" />
        <Input type="search" placeholder="Search input" />
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid email address',
    error: true,
  },
  render: (args) => ({
    components: { Input },
    setup() { return { args }; },
    template: '<Input v-bind="args" />',
  }),
};

export const Success: Story = {
  args: {
    placeholder: 'Valid input',
    success: true,
  },
  render: (args) => ({
    components: { Input },
    setup() { return { args }; },
    template: '<Input v-bind="args" />',
  }),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => ({
    components: { Input },
    setup() { return { args }; },
    template: '<Input v-bind="args" />',
  }),
};
