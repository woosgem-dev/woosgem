import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@woosgem/ds-vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost', 'link'],
      description: 'Visual style of the button',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
      description: 'Color theme of the button',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the button',
      table: { category: 'Style' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: { category: 'State' },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state',
      table: { category: 'State' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes button full width',
      table: { category: 'Layout' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: '<Button v-bind="args">Button</Button>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button variant="filled">Filled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button color="success">Success</Button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

export const OutlineVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button variant="outline" color="primary">Primary</Button>
        <Button variant="outline" color="secondary">Secondary</Button>
        <Button variant="outline" color="danger">Danger</Button>
        <Button variant="outline" color="success">Success</Button>
      </div>
    `,
  }),
};

export const GhostVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button variant="ghost" color="primary">Primary</Button>
        <Button variant="ghost" color="secondary">Secondary</Button>
        <Button variant="ghost" color="danger">Danger</Button>
        <Button variant="ghost" color="success">Success</Button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: '<Button v-bind="args">Disabled Button</Button>',
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: '<Button v-bind="args">Loading...</Button>',
  }),
};

export const LinkVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Button variant="link" color="primary">Primary</Button>
        <Button variant="link" color="secondary">Secondary</Button>
        <Button variant="link" color="danger">Danger</Button>
        <Button variant="link" color="success">Success</Button>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: `
      <div style="width: 400px">
        <Button v-bind="args">Full Width Button</Button>
      </div>
    `,
  }),
};

export const DisabledStates: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start">
        <Button :disabled="true">Disabled</Button>
        <Button :loading="true">Loading</Button>
        <Button :disabled="true" variant="outline">Disabled Outline</Button>
        <Button :loading="true" variant="ghost">Loading Ghost</Button>
      </div>
    `,
  }),
};
