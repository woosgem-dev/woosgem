import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Button, Badge, Input, Tab, Avatar, Divider } from '@woosgem/ds-vue';

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

export const AllThemes: Story = {
  render: () => ({
    components: { Button, Badge, Input, Tab, Avatar, Divider },
    template: `
      <div style="display: grid; grid-template-columns: 1fr; gap: 0">
        <!-- Default Theme -->
        <div data-theme="default" style="padding: 32px; min-height: 400px; background: var(--wg-color-background, #ffffff); color: var(--wg-color-text, #000000)">
          <h2 style="margin-bottom: 8px; font-size: 24px; font-weight: 600">Default Theme</h2>
          <p style="margin-bottom: 24px; color: var(--wg-color-text-muted, #666666)">Preview of all components in default theme</p>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Buttons</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap">
              <Button variant="filled" color="primary">Primary</Button>
              <Button variant="filled" color="secondary">Secondary</Button>
              <Button variant="filled" color="danger">Danger</Button>
              <Button variant="filled" color="success">Success</Button>
              <Button variant="outline" color="primary">Outline</Button>
              <Button variant="ghost" color="primary">Ghost</Button>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Badges</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="info">Info</Badge>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Inputs</h3>
            <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
              <Input variant="outline" placeholder="Outline input" />
              <Input variant="filled" placeholder="Filled input" />
              <Input variant="underline" placeholder="Underline input" />
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tabs</h3>
            <div style="display: flex; gap: 8px">
              <Tab variant="underline" :selected="true">Overview</Tab>
              <Tab variant="underline">Activity</Tab>
              <Tab variant="underline">Settings</Tab>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Avatars</h3>
            <div style="display: flex; gap: 12px; align-items: center">
              <Avatar size="sm" fallback="SM">SM</Avatar>
              <Avatar size="md" fallback="MD">MD</Avatar>
              <Avatar size="lg" fallback="LG">LG</Avatar>
              <Avatar size="lg" shape="square" fallback="SQ">SQ</Avatar>
            </div>
          </div>

          <div>
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Divider</h3>
            <Divider spacing="md" />
          </div>
        </div>

        <Divider spacing="none" />

        <!-- Dark Theme -->
        <div data-theme="dark" style="padding: 32px; min-height: 400px; background: #1A1A1A; color: #FFFFFF">
          <h2 style="margin-bottom: 8px; font-size: 24px; font-weight: 600">Dark Theme</h2>
          <p style="margin-bottom: 24px; color: #C4C4C4">Preview of all components in dark theme</p>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Buttons</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap">
              <Button variant="filled" color="primary">Primary</Button>
              <Button variant="filled" color="secondary">Secondary</Button>
              <Button variant="filled" color="danger">Danger</Button>
              <Button variant="filled" color="success">Success</Button>
              <Button variant="outline" color="primary">Outline</Button>
              <Button variant="ghost" color="primary">Ghost</Button>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Badges</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="info">Info</Badge>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Inputs</h3>
            <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
              <Input variant="outline" placeholder="Outline input" />
              <Input variant="filled" placeholder="Filled input" />
              <Input variant="underline" placeholder="Underline input" />
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tabs</h3>
            <div style="display: flex; gap: 8px">
              <Tab variant="underline" :selected="true">Overview</Tab>
              <Tab variant="underline">Activity</Tab>
              <Tab variant="underline">Settings</Tab>
            </div>
          </div>

          <div style="margin-bottom: 32px">
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Avatars</h3>
            <div style="display: flex; gap: 12px; align-items: center">
              <Avatar size="sm" fallback="SM">SM</Avatar>
              <Avatar size="md" fallback="MD">MD</Avatar>
              <Avatar size="lg" fallback="LG">LG</Avatar>
              <Avatar size="lg" shape="square" fallback="SQ">SQ</Avatar>
            </div>
          </div>

          <div>
            <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Divider</h3>
            <Divider spacing="md" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const ThemeSwitcher: Story = {
  render: () => ({
    components: { Button, Badge, Input, Tab, Avatar, Divider },
    setup() {
      const theme = ref<'default' | 'dark'>('default');
      return { theme };
    },
    template: `
      <div
        :data-theme="theme"
        :style="{
          padding: '32px',
          minHeight: '100vh',
          background: theme === 'dark' ? '#1A1A1A' : '#ffffff',
          color: theme === 'dark' ? '#FFFFFF' : '#000000',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }"
      >
        <div style="max-width: 800px; margin: 0 auto">
          <h1 style="margin-bottom: 8px; font-size: 32px; font-weight: 700">Theme Switcher Demo</h1>
          <p :style="{ marginBottom: '24px', color: theme === 'dark' ? '#C4C4C4' : '#666666' }">
            Click the buttons below to switch between themes
          </p>

          <div style="display: flex; gap: 12px; margin-bottom: 48px">
            <Button
              :variant="theme === 'default' ? 'filled' : 'outline'"
              color="primary"
              @click="theme = 'default'"
            >Default Theme</Button>
            <Button
              :variant="theme === 'dark' ? 'filled' : 'outline'"
              color="primary"
              @click="theme = 'dark'"
            >Dark Theme</Button>
          </div>

          <div
            :style="{
              padding: '24px',
              borderRadius: '12px',
              background: theme === 'dark' ? '#121212' : '#f5f5f5',
              marginBottom: '32px',
            }"
          >
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
              <Badge color="primary" size="lg">Current Theme: {{ theme }}</Badge>
            </div>
            <p :style="{ color: theme === 'dark' ? '#C4C4C4' : '#666666', marginBottom: '16px' }">
              Themes are applied using the <code>data-theme</code> attribute. All colors update automatically
              based on CSS custom properties.
            </p>
            <code
              :style="{
                display: 'block',
                padding: '12px',
                background: theme === 'dark' ? '#1A1A1A' : '#ffffff',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }"
            >&lt;div data-theme="{{ theme }}"&gt;...&lt;/div&gt;</code>
          </div>

          <div style="display: flex; flex-direction: column; gap: 32px">
            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Buttons</h3>
              <div style="display: flex; gap: 12px; flex-wrap: wrap">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="success">Success</Button>
                <Button variant="outline" color="primary">Outline</Button>
                <Button variant="ghost" color="primary">Ghost</Button>
                <Button :loading="true">Loading</Button>
                <Button :disabled="true">Disabled</Button>
              </div>
            </div>

            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Form Elements</h3>
              <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
                <Input placeholder="Enter your name" />
                <Input variant="filled" placeholder="Enter your email" />
                <Input variant="underline" placeholder="Enter your password" type="password" />
                <Input :error="true" placeholder="Error state" />
                <Input :success="true" placeholder="Success state" />
              </div>
            </div>

            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">Tabs</h3>
              <div style="display: flex; gap: 8px; margin-bottom: 16px">
                <Tab variant="underline" :selected="true">Overview</Tab>
                <Tab variant="underline">Activity</Tab>
                <Tab variant="underline">Analytics</Tab>
                <Tab variant="underline" :disabled="true">Reports</Tab>
              </div>
              <div style="display: flex; gap: 8px">
                <Tab variant="filled" :selected="true">All</Tab>
                <Tab variant="filled">Active</Tab>
                <Tab variant="filled">Archived</Tab>
              </div>
            </div>

            <div>
              <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600">User Profile Card</h3>
              <div
                :style="{
                  padding: '24px',
                  borderRadius: '12px',
                  background: theme === 'dark' ? '#121212' : '#f5f5f5',
                  maxWidth: '400px',
                }"
              >
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
                  <Avatar size="xl" fallback="JD">JD</Avatar>
                  <div>
                    <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 4px">John Doe</h4>
                    <p :style="{ fontSize: '14px', color: theme === 'dark' ? '#C4C4C4' : '#666666' }">john.doe@example.com</p>
                  </div>
                </div>
                <Divider spacing="md" />
                <div style="display: flex; gap: 8px; margin-top: 16px">
                  <Badge color="success">Active</Badge>
                  <Badge color="primary">Premium</Badge>
                  <Badge color="info">Verified</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const DefaultTheme: Story = {
  render: () => ({
    components: { Button, Badge, Input, Tab, Avatar, Divider },
    template: `
      <div data-theme="default" style="padding: 32px; min-height: 400px; background: var(--wg-color-background, #ffffff); color: var(--wg-color-text, #000000)">
        <h2 style="margin-bottom: 8px; font-size: 24px; font-weight: 600">Default Theme</h2>
        <p style="margin-bottom: 24px; color: var(--wg-color-text-muted, #666666)">Preview of all components in default theme</p>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Buttons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="filled" color="secondary">Secondary</Button>
            <Button variant="filled" color="danger">Danger</Button>
            <Button variant="filled" color="success">Success</Button>
            <Button variant="outline" color="primary">Outline</Button>
            <Button variant="ghost" color="primary">Ghost</Button>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Badges</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Inputs</h3>
          <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
            <Input variant="outline" placeholder="Outline input" />
            <Input variant="filled" placeholder="Filled input" />
            <Input variant="underline" placeholder="Underline input" />
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tabs</h3>
          <div style="display: flex; gap: 8px">
            <Tab variant="underline" :selected="true">Overview</Tab>
            <Tab variant="underline">Activity</Tab>
            <Tab variant="underline">Settings</Tab>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Avatars</h3>
          <div style="display: flex; gap: 12px; align-items: center">
            <Avatar size="sm" fallback="SM">SM</Avatar>
            <Avatar size="md" fallback="MD">MD</Avatar>
            <Avatar size="lg" fallback="LG">LG</Avatar>
            <Avatar size="lg" shape="square" fallback="SQ">SQ</Avatar>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Divider</h3>
          <Divider spacing="md" />
        </div>
      </div>
    `,
  }),
};

export const DarkTheme: Story = {
  render: () => ({
    components: { Button, Badge, Input, Tab, Avatar, Divider },
    template: `
      <div data-theme="dark" style="padding: 32px; min-height: 400px; background: #1A1A1A; color: #FFFFFF">
        <h2 style="margin-bottom: 8px; font-size: 24px; font-weight: 600">Dark Theme</h2>
        <p style="margin-bottom: 24px; color: #C4C4C4">Preview of all components in dark theme</p>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Buttons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="filled" color="secondary">Secondary</Button>
            <Button variant="filled" color="danger">Danger</Button>
            <Button variant="filled" color="success">Success</Button>
            <Button variant="outline" color="primary">Outline</Button>
            <Button variant="ghost" color="primary">Ghost</Button>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Badges</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Inputs</h3>
          <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px">
            <Input variant="outline" placeholder="Outline input" />
            <Input variant="filled" placeholder="Filled input" />
            <Input variant="underline" placeholder="Underline input" />
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tabs</h3>
          <div style="display: flex; gap: 8px">
            <Tab variant="underline" :selected="true">Overview</Tab>
            <Tab variant="underline">Activity</Tab>
            <Tab variant="underline">Settings</Tab>
          </div>
        </div>

        <div style="margin-bottom: 32px">
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Avatars</h3>
          <div style="display: flex; gap: 12px; align-items: center">
            <Avatar size="sm" fallback="SM">SM</Avatar>
            <Avatar size="md" fallback="MD">MD</Avatar>
            <Avatar size="lg" fallback="LG">LG</Avatar>
            <Avatar size="lg" shape="square" fallback="SQ">SQ</Avatar>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Divider</h3>
          <Divider spacing="md" />
        </div>
      </div>
    `,
  }),
};
