import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@woosgem/ds-react';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gradient'],
      description: 'Visual variant of the progress bar',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
      description: 'Color theme of the progress bar',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress bar',
      table: { category: 'Style' },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
      table: { category: 'State' },
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value',
      table: { category: 'State' },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label inside the progress bar',
      table: { category: 'Display' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 65,
    variant: 'default',
    color: 'primary',
    size: 'md',
    showLabel: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <Progress value={50} size="sm" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div>
        <Progress value={50} size="md" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div>
        <Progress value={50} size="lg" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <Progress value={80} color="primary" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>primary</div>
      </div>
      <div>
        <Progress value={90} color="success" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>success</div>
      </div>
      <div>
        <Progress value={60} color="warning" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>warning</div>
      </div>
      <div>
        <Progress value={30} color="danger" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>danger</div>
      </div>
      <div>
        <Progress value={50} color="neutral" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>neutral</div>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Progress value={25} showLabel />
      <Progress value={50} showLabel color="success" />
      <Progress value={75} showLabel color="warning" />
      <Progress value={100} showLabel color="danger" />
    </div>
  ),
};

export const GradientVariant: Story = {
  name: 'Gradient Variant',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <Progress value={70} variant="gradient" color="primary" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>primary</div>
      </div>
      <div>
        <Progress value={85} variant="gradient" color="success" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>success</div>
      </div>
      <div>
        <Progress value={55} variant="gradient" color="warning" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>warning</div>
      </div>
      <div>
        <Progress value={40} variant="gradient" color="danger" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>danger</div>
      </div>
    </div>
  ),
};

export const CustomMax: Story = {
  name: 'Custom Max',
  args: {
    value: 3,
    max: 5,
    showLabel: true,
    color: 'primary',
  },
};
