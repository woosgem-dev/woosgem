import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@woosgem/ds-react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'current'],
      description: 'Color of the spinner',
      table: { category: 'Style' },
    },
    label: {
      control: 'text',
      description: 'Accessible label for screen readers',
      table: { category: 'Accessibility' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="xs" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>xs</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="sm" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="lg" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="primary" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="secondary" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="muted" />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>muted</div>
      </div>
    </div>
  ),
};

export const CurrentColor: Story = {
  name: 'Inherit Color',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ color: 'var(--wg-color-primary, #0066ff)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Spinner color="current" size="sm" />
        <span>Loading items...</span>
      </div>
      <div style={{ color: 'var(--wg-color-danger, #dc2626)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Spinner color="current" size="sm" />
        <span>Error state</span>
      </div>
      <div style={{ color: 'var(--wg-color-success, #16a34a)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Spinner color="current" size="sm" />
        <span>Processing...</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  name: 'Usage in Button',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <button
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'var(--wg-color-primary, #0066ff)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        disabled
      >
        <Spinner size="xs" color="current" />
        Loading...
      </button>
      <button
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'transparent',
          color: 'var(--wg-color-text, #111)',
          border: '1px solid var(--wg-color-border, #e5e7eb)',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        disabled
      >
        <Spinner size="xs" color="muted" />
        Processing
      </button>
    </div>
  ),
};
