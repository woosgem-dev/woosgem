import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@woosgem/ds-react';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'filled'],
      description: 'Visual style of the tab',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color of the tab when selected',
      table: { category: 'Style' },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the tab is selected',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tab',
      table: { category: 'State' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes tab full width',
      table: { category: 'Layout' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tab',
    variant: 'underline',
    size: 'md',
    selected: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tab variant="underline">Underline</Tab>
      <Tab variant="filled">Filled</Tab>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tab size="sm">Small</Tab>
      <Tab size="md">Medium</Tab>
      <Tab size="lg">Large</Tab>
    </div>
  ),
};

// Underline variant states
export const UnderlineStates: Story = {
  name: 'Underline - States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Default / Hover / Selected / Disabled</div>
        <div style={{ display: 'flex', gap: '0' }}>
          <Tab variant="underline">Default</Tab>
          <Tab
            variant="underline"
            style={{
              '--wg-tab-color': 'var(--wg-color-text)',
              '--wg-tab-border': 'var(--wg-color-border-hover)',
            } as React.CSSProperties}
          >
            Hovered
          </Tab>
          <Tab variant="underline" selected>Selected</Tab>
          <Tab variant="underline" disabled>Disabled</Tab>
        </div>
      </div>
    </div>
  ),
};

// Filled variant states
export const FilledStates: Story = {
  name: 'Filled - States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Default / Hover / Selected / Selected Hover / Disabled</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Tab variant="filled">Default</Tab>
          <Tab
            variant="filled"
            style={{
              '--wg-tab-bg': 'var(--wg-color-background-muted)',
            } as React.CSSProperties}
          >
            Hovered
          </Tab>
          <Tab variant="filled" selected>Selected</Tab>
          <Tab
            variant="filled"
            selected
            style={{
              '--wg-tab-bg': 'var(--wg-color-primary-hover)',
            } as React.CSSProperties}
          >
            Selected Hover
          </Tab>
          <Tab variant="filled" disabled>Disabled</Tab>
        </div>
      </div>
    </div>
  ),
};

export const UnderlineSizes: Story = {
  name: 'Underline - Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0' }}>
        <Tab variant="underline" size="sm" selected>Small</Tab>
        <Tab variant="underline" size="sm">Tab 2</Tab>
        <Tab variant="underline" size="sm">Tab 3</Tab>
      </div>
      <div style={{ display: 'flex', gap: '0' }}>
        <Tab variant="underline" size="md" selected>Medium</Tab>
        <Tab variant="underline" size="md">Tab 2</Tab>
        <Tab variant="underline" size="md">Tab 3</Tab>
      </div>
      <div style={{ display: 'flex', gap: '0' }}>
        <Tab variant="underline" size="lg" selected>Large</Tab>
        <Tab variant="underline" size="lg">Tab 2</Tab>
        <Tab variant="underline" size="lg">Tab 3</Tab>
      </div>
    </div>
  ),
};

export const FilledSizes: Story = {
  name: 'Filled - Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        <Tab variant="filled" size="sm" selected>Small</Tab>
        <Tab variant="filled" size="sm">Tab 2</Tab>
        <Tab variant="filled" size="sm">Tab 3</Tab>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <Tab variant="filled" size="md" selected>Medium</Tab>
        <Tab variant="filled" size="md">Tab 2</Tab>
        <Tab variant="filled" size="md">Tab 3</Tab>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <Tab variant="filled" size="lg" selected>Large</Tab>
        <Tab variant="filled" size="lg">Tab 2</Tab>
        <Tab variant="filled" size="lg">Tab 3</Tab>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <div style={{ display: 'flex', gap: '0' }}>
        <Tab variant="underline" fullWidth selected>Home</Tab>
        <Tab variant="underline" fullWidth>Profile</Tab>
        <Tab variant="underline" fullWidth>Settings</Tab>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Underline variant */}
      <div>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>Underline Variant</h3>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>State</th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Example</th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Default</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="underline">Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Muted text, light border</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Hover</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab
                  variant="underline"
                  style={{
                    '--wg-tab-color': 'var(--wg-color-text)',
                    '--wg-tab-border': 'var(--wg-color-border-hover)',
                  } as React.CSSProperties}
                >
                  Tab
                </Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Normal text, darker border</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Selected</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="underline" selected>Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Primary text, primary border</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Disabled</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="underline" disabled>Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Subtle text, light border, 50% opacity</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Filled variant */}
      <div>
        <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>Filled Variant</h3>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>State</th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Example</th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Default</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="filled">Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Transparent background</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Hover</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab
                  variant="filled"
                  style={{
                    '--wg-tab-bg': 'var(--wg-color-background-muted)',
                  } as React.CSSProperties}
                >
                  Tab
                </Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Muted background</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Selected</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="filled" selected>Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Primary background, inverse text</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Selected + Hover</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab
                  variant="filled"
                  selected
                  style={{
                    '--wg-tab-bg': 'var(--wg-color-primary-hover)',
                  } as React.CSSProperties}
                >
                  Tab
                </Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>Darker primary background</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>Disabled</td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
                <Tab variant="filled" disabled>Tab</Tab>
              </td>
              <td style={{ padding: '12px 8px', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)', fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>50% opacity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const TabGroup: Story = {
  name: 'Tab Group Example',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Underline Tabs</div>
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--wg-color-border, #e5e7eb)' }}>
          <Tab variant="underline" selected>Overview</Tab>
          <Tab variant="underline">Activity</Tab>
          <Tab variant="underline">Analytics</Tab>
          <Tab variant="underline" disabled>Reports</Tab>
        </div>
      </div>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginBottom: '8px' }}>Filled Tabs</div>
        <div style={{ display: 'flex', gap: '4px', padding: '4px', backgroundColor: 'var(--wg-color-background-muted, #f5f5f5)', borderRadius: '8px' }}>
          <Tab variant="filled" selected>All</Tab>
          <Tab variant="filled">Active</Tab>
          <Tab variant="filled">Completed</Tab>
          <Tab variant="filled">Archived</Tab>
        </div>
      </div>
    </div>
  ),
};
