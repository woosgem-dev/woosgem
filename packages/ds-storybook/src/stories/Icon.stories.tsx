import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@woosgem/ds-react';

// Sample SVG icons
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size (xs: 12px, sm: 16px, md: 20px, lg: 24px, xl: 32px)',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'danger', 'success', 'warning', 'info', 'muted'],
      description: 'Icon color',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'inherit',
    children: <BellIcon />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon size="xs">
        <BellIcon />
      </Icon>
      <Icon size="sm">
        <BellIcon />
      </Icon>
      <Icon size="md">
        <BellIcon />
      </Icon>
      <Icon size="lg">
        <BellIcon />
      </Icon>
      <Icon size="xl">
        <BellIcon />
      </Icon>
    </div>
  ),
};

export const SizesWithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="xs"><BellIcon /></Icon>
        <span>xs (12px) - Î±ÉÏ?, ?úÍ∑∏ ???ÑÏù¥ÏΩ?/span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="sm"><BellIcon /></Icon>
        <span>sm (16px) - ?∏Îùº???çÏä§?? ?ëÏ? Î≤ÑÌäº</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="md"><BellIcon /></Icon>
        <span>md (20px) - Í∏∞Î≥∏ Î≤ÑÌäº, ?ÖÎ†• ?ÑÎìú (Í∏∞Î≥∏Í∞?</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg"><BellIcon /></Icon>
        <span>lg (24px) - ?§ÎπÑÍ≤åÏù¥?? Í∞ïÏ°∞ ?ÑÏù¥ÏΩ?/span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="xl"><BellIcon /></Icon>
        <span>xl (32px) - ?àÏñ¥Î°? Îπ??ÅÌÉú ?úÏãú</span>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon size="lg" color="inherit"><HeartIcon /></Icon>
      <Icon size="lg" color="primary"><HeartIcon /></Icon>
      <Icon size="lg" color="secondary"><HeartIcon /></Icon>
      <Icon size="lg" color="danger"><HeartIcon /></Icon>
      <Icon size="lg" color="success"><HeartIcon /></Icon>
      <Icon size="lg" color="warning"><HeartIcon /></Icon>
      <Icon size="lg" color="info"><HeartIcon /></Icon>
      <Icon size="lg" color="muted"><HeartIcon /></Icon>
    </div>
  ),
};

export const ColorsWithLabels: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="inherit"><HeartIcon /></Icon>
        <span style={{ fontSize: '12px' }}>inherit</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="primary"><HeartIcon /></Icon>
        <span style={{ fontSize: '12px' }}>primary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="secondary"><HeartIcon /></Icon>
        <span style={{ fontSize: '12px' }}>secondary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="danger"><HeartIcon /></Icon>
        <span style={{ fontSize: '12px' }}>danger</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="success"><CheckCircleIcon /></Icon>
        <span style={{ fontSize: '12px' }}>success</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="warning"><AlertTriangleIcon /></Icon>
        <span style={{ fontSize: '12px' }}>warning</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="info"><BellIcon /></Icon>
        <span style={{ fontSize: '12px' }}>info</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="muted"><SettingsIcon /></Icon>
        <span style={{ fontSize: '12px' }}>muted</span>
      </div>
    </div>
  ),
};

export const IconGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
      {[
        { icon: <BellIcon />, name: 'bell' },
        { icon: <CheckCircleIcon />, name: 'check-circle' },
        { icon: <AlertTriangleIcon />, name: 'alert-triangle' },
        { icon: <HeartIcon />, name: 'heart' },
        { icon: <SettingsIcon />, name: 'settings' },
      ].map(({ icon, name }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
        >
          <Icon size="lg">{icon}</Icon>
          <span style={{ fontSize: '12px', color: '#6b7280' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const InheritColor: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="md"><HeartIcon /></Icon>
        <span>Red text with inherit icon</span>
      </div>
      <div style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="md"><CheckCircleIcon /></Icon>
        <span>Green text with inherit icon</span>
      </div>
      <div style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="md"><BellIcon /></Icon>
        <span>Blue text with inherit icon</span>
      </div>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
        <Icon size="sm" color="success"><CheckCircleIcon /></Icon>
        Operation completed successfully
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
        <Icon size="sm" color="warning"><AlertTriangleIcon /></Icon>
        Please review the changes before proceeding
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
        <Icon size="sm" color="info"><BellIcon /></Icon>
        You have 3 new notifications
      </p>
    </div>
  ),
};
