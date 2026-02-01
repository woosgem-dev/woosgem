import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Badge, Input, Tab, Avatar, Divider } from '@woosgem/ds-react';

/**
 * Theme showcase and switcher stories
 *
 * Available themes:
 * - default (light theme)
 * - dark (dark theme)
 */
const meta: Meta = {
  title: 'Design System/Theme',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ThemeShowcase: React.FC<{ theme: string }> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div
      data-theme={theme}
      style={{
        padding: '32px',
        minHeight: '400px',
        background: isDark ? '#1A1A1A' : 'var(--wg-color-background, #ffffff)',
        color: isDark ? '#FFFFFF' : 'var(--wg-color-text, #000000)',
      }}
    >
      <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
      </h2>
      <p style={{ marginBottom: '24px', color: isDark ? '#C4C4C4' : 'var(--wg-color-text-muted, #666666)' }}>
        Preview of all components in {theme} theme
      </p>

      {/* Buttons */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="filled" color="primary">Primary</Button>
          <Button variant="filled" color="secondary">Secondary</Button>
          <Button variant="filled" color="danger">Danger</Button>
          <Button variant="filled" color="success">Success</Button>
          <Button variant="outline" color="primary">Outline</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
        </div>
      </div>

      {/* Badges */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Badges</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="info">Info</Badge>
        </div>
      </div>

      {/* Inputs */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Inputs</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
          <Input variant="outline" placeholder="Outline input" />
          <Input variant="filled" placeholder="Filled input" />
          <Input variant="underline" placeholder="Underline input" />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Tabs</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tab variant="underline" selected>Overview</Tab>
          <Tab variant="underline">Activity</Tab>
          <Tab variant="underline">Settings</Tab>
        </div>
      </div>

      {/* Avatars */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Avatars</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Avatar size="sm" fallback="SM">SM</Avatar>
          <Avatar size="md" fallback="MD">MD</Avatar>
          <Avatar size="lg" fallback="LG">LG</Avatar>
          <Avatar size="lg" shape="square" fallback="SQ">SQ</Avatar>
        </div>
      </div>

      {/* Divider */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Divider</h3>
        <Divider spacing="md" />
      </div>
    </div>
  );
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
      <ThemeShowcase theme="default" />
      <Divider spacing="none" />
      <ThemeShowcase theme="dark" />
    </div>
  ),
};

export const ThemeSwitcher: Story = {
  render: () => {
    const [theme, setTheme] = useState<'default' | 'dark'>('default');
    const isDark = theme === 'dark';

    return (
      <div
        data-theme={theme}
        style={{
          padding: '32px',
          minHeight: '100vh',
          background: isDark ? '#1A1A1A' : '#ffffff',
          color: isDark ? '#FFFFFF' : '#000000',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '8px', fontSize: '32px', fontWeight: 700 }}>
            Theme Switcher Demo
          </h1>
          <p style={{ marginBottom: '24px', color: isDark ? '#C4C4C4' : '#666666' }}>
            Click the buttons below to switch between themes
          </p>

          {/* Theme Switcher Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '48px' }}>
            <Button
              variant={theme === 'default' ? 'filled' : 'outline'}
              color="primary"
              onClick={() => setTheme('default')}
            >
              Default Theme
            </Button>
            <Button
              variant={theme === 'dark' ? 'filled' : 'outline'}
              color="primary"
              onClick={() => setTheme('dark')}
            >
              Dark Theme
            </Button>
          </div>

          {/* Current Theme Info */}
          <div
            style={{
              padding: '24px',
              borderRadius: '12px',
              background: isDark ? '#121212' : '#f5f5f5',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Badge color="primary" size="lg">
                Current Theme: {theme}
              </Badge>
            </div>
            <p style={{ color: isDark ? '#C4C4C4' : '#666666', marginBottom: '16px' }}>
              Themes are applied using the <code>data-theme</code> attribute. All colors update automatically
              based on CSS custom properties.
            </p>
            <code
              style={{
                display: 'block',
                padding: '12px',
                background: isDark ? '#1A1A1A' : '#ffffff',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            >
              {`<div data-theme="${theme}">...</div>`}
            </code>
          </div>

          {/* Component Examples */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Buttons Section */}
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
                Buttons
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="success">Success</Button>
                <Button variant="outline" color="primary">Outline</Button>
                <Button variant="ghost" color="primary">Ghost</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
                Form Elements
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                <Input placeholder="Enter your name" />
                <Input variant="filled" placeholder="Enter your email" />
                <Input variant="underline" placeholder="Enter your password" type="password" />
                <Input error placeholder="Error state" />
                <Input success placeholder="Success state" />
              </div>
            </div>

            {/* Tabs Section */}
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
                Tabs
              </h3>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <Tab variant="underline" selected>Overview</Tab>
                <Tab variant="underline">Activity</Tab>
                <Tab variant="underline">Analytics</Tab>
                <Tab variant="underline" disabled>Reports</Tab>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Tab variant="filled" selected>All</Tab>
                <Tab variant="filled">Active</Tab>
                <Tab variant="filled">Archived</Tab>
              </div>
            </div>

            {/* User Profile Card */}
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 600 }}>
                User Profile Card
              </h3>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  background: isDark ? '#121212' : '#f5f5f5',
                  maxWidth: '400px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <Avatar size="xl" fallback="JD">JD</Avatar>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                      John Doe
                    </h4>
                    <p style={{ fontSize: '14px', color: isDark ? '#C4C4C4' : '#666666' }}>
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <Divider spacing="md" />
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <Badge color="success">Active</Badge>
                  <Badge color="primary">Premium</Badge>
                  <Badge color="info">Verified</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const DefaultTheme: Story = {
  render: () => <ThemeShowcase theme="default" />,
};

export const DarkTheme: Story = {
  render: () => <ThemeShowcase theme="dark" />,
};
