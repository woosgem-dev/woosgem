import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@woosgem/ds-react';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Shape variant of the skeleton',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the skeleton',
      table: { category: 'Style' },
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type',
      table: { category: 'Style' },
    },
    width: {
      control: 'text',
      description: 'Custom width (string or number)',
      table: { category: 'Dimensions' },
    },
    height: {
      control: 'text',
      description: 'Custom height (string or number)',
      table: { category: 'Dimensions' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    size: 'md',
    animation: 'pulse',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="text" width={120} />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>text</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="circular" size="lg" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>circular</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="rectangular" width={120} height={80} />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>rectangular</div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <Skeleton variant="text" size="sm" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div>
        <Skeleton variant="text" size="md" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div>
        <Skeleton variant="text" size="lg" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
      <div>
        <Skeleton variant="text" size="full" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>full</div>
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <Skeleton variant="text" animation="pulse" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>pulse</div>
      </div>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <Skeleton variant="text" animation="wave" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>wave</div>
      </div>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <Skeleton variant="text" animation="none" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>none</div>
      </div>
    </div>
  ),
};

export const CustomDimensions: Story = {
  name: 'Custom Dimensions',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="rectangular" width={200} height={100} />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>200 x 100</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="rectangular" width={150} height={150} />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>150 x 150</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Skeleton variant="rectangular" width="100%" height={60} />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>100% x 60</div>
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  render: () => (
    <div
      style={{
        maxWidth: '320px',
        padding: '16px',
        border: '1px solid var(--wg-color-border, #e5e7eb)',
        borderRadius: '12px',
      }}
    >
      {/* Header: avatar + text lines */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
        <Skeleton variant="circular" size="lg" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Skeleton variant="text" size="md" width="60%" />
          <Skeleton variant="text" size="sm" width="40%" />
        </div>
      </div>

      {/* Image placeholder */}
      <Skeleton variant="rectangular" width="100%" height={160} />

      {/* Text content */}
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Skeleton variant="text" size="md" />
        <Skeleton variant="text" size="md" width="80%" />
        <Skeleton variant="text" size="sm" width="50%" />
      </div>
    </div>
  ),
};
