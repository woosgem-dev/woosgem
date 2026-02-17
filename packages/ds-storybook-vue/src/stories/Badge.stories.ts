import type { Meta, StoryObj } from '@storybook/vue3';
import { Badge } from '@woosgem/ds-vue';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      description: 'Visual style of the badge',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      description: 'Color theme of the badge',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { Badge },
    setup() { return { args }; },
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Badge variant="solid">Solid</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="subtle">Subtle</Badge>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
};

export const OutlineVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
        <Badge variant="outline" color="primary">Primary</Badge>
        <Badge variant="outline" color="secondary">Secondary</Badge>
        <Badge variant="outline" color="danger">Danger</Badge>
        <Badge variant="outline" color="success">Success</Badge>
        <Badge variant="outline" color="warning">Warning</Badge>
        <Badge variant="outline" color="info">Info</Badge>
      </div>
    `,
  }),
};

export const SubtleVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
        <Badge variant="subtle" color="primary">Primary</Badge>
        <Badge variant="subtle" color="secondary">Secondary</Badge>
        <Badge variant="subtle" color="danger">Danger</Badge>
        <Badge variant="subtle" color="success">Success</Badge>
        <Badge variant="subtle" color="warning">Warning</Badge>
        <Badge variant="subtle" color="info">Info</Badge>
      </div>
    `,
  }),
};

export const StatusBadges: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 12px; align-items: center">
        <Badge color="success">Active</Badge>
        <Badge color="warning">Pending</Badge>
        <Badge color="danger">Error</Badge>
        <Badge color="info">New</Badge>
      </div>
    `,
  }),
};
