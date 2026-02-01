import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@woosgem/ds-react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success'],
      description: 'Color when checked',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    checked: false,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Switch size="sm" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Switch size="md" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Switch size="lg" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Switch color="primary" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Switch color="secondary" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Switch color="success" checked />
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>success</div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Unchecked</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch checked />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Checked</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch disabled />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text-muted, #666)' }}>Disabled</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch checked disabled />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text-muted, #666)' }}>Checked + Disabled</span>
      </div>
    </div>
  ),
};

const InteractiveSwitch: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      backgroundColor: 'var(--wg-color-background-muted, #f5f5f5)',
      borderRadius: '12px',
      minWidth: '300px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>Notifications</div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Receive push notifications</div>
        </div>
        <Switch checked={notifications} onClick={() => setNotifications(!notifications)} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>Dark Mode</div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Enable dark theme</div>
        </div>
        <Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--wg-color-text, #111)' }}>Auto-save</div>
          <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Save changes automatically</div>
        </div>
        <Switch color="success" checked={autoSave} onClick={() => setAutoSave(!autoSave)} />
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSwitch />,
};

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <Switch checked />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Enable feature</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <Switch />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>Send newsletters</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'not-allowed' }}>
        <Switch disabled />
        <span style={{ fontSize: '14px', color: 'var(--wg-color-text-muted, #666)' }}>Premium only</span>
      </label>
    </div>
  ),
};
