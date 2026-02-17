import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Design System/Theme',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

function themeShowcase(theme: string) {
  const isDark = theme === 'dark';
  return html`
    <div
      data-theme=${theme}
      style="padding: 32px; min-height: 400px; background: ${isDark ? '#1A1A1A' : 'var(--wg-color-background, #ffffff)'}; color: ${isDark ? '#FFFFFF' : 'var(--wg-color-text, #000000)'}"
    >
      <h2 style="margin-bottom: 8px; font-size: 24px; font-weight: 600">
        ${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
      </h2>
      <p style="margin-bottom: 24px; color: ${isDark ? '#C4C4C4' : 'var(--wg-color-text-muted, #666666)'}">
        Preview of all components in ${theme} theme
      </p>

      <!-- Buttons -->
      <div style="margin-bottom: 32px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Buttons</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap">
          <wg-button variant="filled" color="primary">Primary</wg-button>
          <wg-button variant="filled" color="secondary">Secondary</wg-button>
          <wg-button variant="filled" color="danger">Danger</wg-button>
          <wg-button variant="filled" color="success">Success</wg-button>
          <wg-button variant="outline" color="primary">Outline</wg-button>
          <wg-button variant="ghost" color="primary">Ghost</wg-button>
        </div>
      </div>

      <!-- Badges -->
      <div style="margin-bottom: 32px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Badges</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
          <wg-badge color="primary">Primary</wg-badge>
          <wg-badge color="secondary">Secondary</wg-badge>
          <wg-badge color="danger">Danger</wg-badge>
          <wg-badge color="success">Success</wg-badge>
          <wg-badge color="warning">Warning</wg-badge>
          <wg-badge color="info">Info</wg-badge>
        </div>
      </div>

      <!-- Inputs -->
      <div style="margin-bottom: 32px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Inputs</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
          <wg-input variant="outline" placeholder="Outline input"></wg-input>
          <wg-input variant="filled" placeholder="Filled input"></wg-input>
          <wg-input variant="underline" placeholder="Underline input"></wg-input>
        </div>
      </div>

      <!-- Tabs -->
      <div style="margin-bottom: 32px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tabs</h3>
        <div style="display: flex; gap: 8px">
          <wg-tab variant="underline" selected>Overview</wg-tab>
          <wg-tab variant="underline">Activity</wg-tab>
          <wg-tab variant="underline">Settings</wg-tab>
        </div>
      </div>

      <!-- Avatars -->
      <div style="margin-bottom: 32px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Avatars</h3>
        <div style="display: flex; gap: 12px; align-items: center">
          <wg-avatar size="sm" fallback="SM"></wg-avatar>
          <wg-avatar size="md" fallback="MD"></wg-avatar>
          <wg-avatar size="lg" fallback="LG"></wg-avatar>
          <wg-avatar size="lg" shape="square" fallback="SQ"></wg-avatar>
        </div>
      </div>

      <!-- Divider -->
      <div>
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Divider</h3>
        <wg-divider spacing="md"></wg-divider>
      </div>
    </div>
  `;
}

export const AllThemes: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr; gap: 0">
      ${themeShowcase('default')}
      <wg-divider spacing="none"></wg-divider>
      ${themeShowcase('dark')}
    </div>
  `,
};

class ThemeSwitcherDemo extends LitElement {
  @state() theme: 'default' | 'dark' = 'default';
  createRenderRoot() { return this; }
  render() {
    const isDark = this.theme === 'dark';
    return html`
      <div
        data-theme=${this.theme}
        style="padding: 32px; min-height: 100vh; background: ${isDark ? '#1A1A1A' : '#ffffff'}; color: ${isDark ? '#FFFFFF' : '#000000'}; transition: background-color 0.3s ease, color 0.3s ease"
      >
        <div style="max-width: 800px; margin: 0 auto">
          <h1 style="margin-bottom: 8px; font-size: 32px; font-weight: 700">
            Theme Switcher Demo
          </h1>
          <p style="margin-bottom: 24px; color: ${isDark ? '#C4C4C4' : '#666666'}">
            Click the buttons below to switch between themes
          </p>

          <!-- Theme Switcher Buttons -->
          <div style="display: flex; gap: 12px; margin-bottom: 48px">
            <wg-button
              variant=${this.theme === 'default' ? 'filled' : 'outline'}
              color="primary"
              @click=${() => { this.theme = 'default'; }}
            >Default Theme</wg-button>
            <wg-button
              variant=${this.theme === 'dark' ? 'filled' : 'outline'}
              color="primary"
              @click=${() => { this.theme = 'dark'; }}
            >Dark Theme</wg-button>
          </div>

          <!-- Current Theme Info -->
          <div style="padding: 24px; border-radius: 12px; background: ${isDark ? '#121212' : '#f5f5f5'}; margin-bottom: 32px">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
              <wg-badge color="primary" size="lg">Current Theme: ${this.theme}</wg-badge>
            </div>
            <p style="color: ${isDark ? '#C4C4C4' : '#666666'}; margin-bottom: 16px">
              Themes are applied using the <code>data-theme</code> attribute. All colors update automatically
              based on CSS custom properties.
            </p>
            <code style="display: block; padding: 12px; background: ${isDark ? '#1A1A1A' : '#ffffff'}; border-radius: 8px; font-size: 14px; font-family: monospace">
              &lt;div data-theme="${this.theme}"&gt;...&lt;/div&gt;
            </code>
          </div>

          <!-- Component Examples -->
          <div style="display: flex; flex-direction: column; gap: 32px">
            <!-- Buttons Section -->
            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Buttons</h3>
              <div style="display: flex; gap: 12px; flex-wrap: wrap">
                <wg-button color="primary">Primary</wg-button>
                <wg-button color="secondary">Secondary</wg-button>
                <wg-button color="danger">Danger</wg-button>
                <wg-button color="success">Success</wg-button>
                <wg-button variant="outline" color="primary">Outline</wg-button>
                <wg-button variant="ghost" color="primary">Ghost</wg-button>
                <wg-button loading>Loading</wg-button>
                <wg-button disabled>Disabled</wg-button>
              </div>
            </div>

            <!-- Form Section -->
            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Form Elements</h3>
              <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
                <wg-input placeholder="Enter your name"></wg-input>
                <wg-input variant="filled" placeholder="Enter your email"></wg-input>
                <wg-input variant="underline" placeholder="Enter your password" type="password"></wg-input>
                <wg-input error placeholder="Error state"></wg-input>
                <wg-input success placeholder="Success state"></wg-input>
              </div>
            </div>

            <!-- Tabs Section -->
            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Tabs</h3>
              <div style="display: flex; gap: 8px; margin-bottom: 16px">
                <wg-tab variant="underline" selected>Overview</wg-tab>
                <wg-tab variant="underline">Activity</wg-tab>
                <wg-tab variant="underline">Analytics</wg-tab>
                <wg-tab variant="underline" disabled>Reports</wg-tab>
              </div>
              <div style="display: flex; gap: 8px">
                <wg-tab variant="filled" selected>All</wg-tab>
                <wg-tab variant="filled">Active</wg-tab>
                <wg-tab variant="filled">Archived</wg-tab>
              </div>
            </div>

            <!-- User Profile Card -->
            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">User Profile Card</h3>
              <div style="padding: 24px; border-radius: 12px; background: ${isDark ? '#121212' : '#f5f5f5'}; max-width: 400px">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
                  <wg-avatar size="xl" fallback="JD"></wg-avatar>
                  <div>
                    <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 4px">John Doe</h4>
                    <p style="font-size: 14px; color: ${isDark ? '#C4C4C4' : '#666666'}">john.doe@example.com</p>
                  </div>
                </div>
                <wg-divider spacing="md"></wg-divider>
                <div style="display: flex; gap: 8px; margin-top: 16px">
                  <wg-badge color="success">Active</wg-badge>
                  <wg-badge color="primary">Premium</wg-badge>
                  <wg-badge color="info">Verified</wg-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('theme-switcher-demo', ThemeSwitcherDemo);

export const ThemeSwitcher: Story = {
  render: () => html`<theme-switcher-demo></theme-switcher-demo>`,
};

export const DefaultTheme: Story = {
  render: () => themeShowcase('default'),
};

export const DarkTheme: Story = {
  render: () => themeShowcase('dark'),
};
