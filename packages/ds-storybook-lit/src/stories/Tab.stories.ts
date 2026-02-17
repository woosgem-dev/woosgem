import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Tab',
  component: 'wg-tab',
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
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'underline', size: 'md', selected: false, disabled: false },
  render: (args) => html`
    <wg-tab variant=${args.variant} size=${args.size} ?selected=${args.selected} ?disabled=${args.disabled}>Tab</wg-tab>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <wg-tab variant="underline">Underline</wg-tab>
      <wg-tab variant="filled">Filled</wg-tab>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center">
      <wg-tab size="sm">Small</wg-tab>
      <wg-tab size="md">Medium</wg-tab>
      <wg-tab size="lg">Large</wg-tab>
    </div>
  `,
};

export const UnderlineStates: Story = {
  name: 'Underline - States',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px">
      <div>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Default / Hover / Selected / Disabled</div>
        <div style="display: flex; gap: 0">
          <wg-tab variant="underline">Default</wg-tab>
          <wg-tab variant="underline" style="--wg-tab-color: var(--wg-color-text); --wg-tab-border: var(--wg-color-border-hover)">Hovered</wg-tab>
          <wg-tab variant="underline" selected>Selected</wg-tab>
          <wg-tab variant="underline" disabled>Disabled</wg-tab>
        </div>
      </div>
    </div>
  `,
};

export const FilledStates: Story = {
  name: 'Filled - States',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px">
      <div>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Default / Hover / Selected / Selected Hover / Disabled</div>
        <div style="display: flex; gap: 4px">
          <wg-tab variant="filled">Default</wg-tab>
          <wg-tab variant="filled" style="--wg-tab-bg: var(--wg-color-background-muted)">Hovered</wg-tab>
          <wg-tab variant="filled" selected>Selected</wg-tab>
          <wg-tab variant="filled" selected style="--wg-tab-bg: var(--wg-color-primary-hover)">Selected Hover</wg-tab>
          <wg-tab variant="filled" disabled>Disabled</wg-tab>
        </div>
      </div>
    </div>
  `,
};

export const UnderlineSizes: Story = {
  name: 'Underline - Sizes',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
      <div style="display: flex; gap: 0">
        <wg-tab variant="underline" size="sm" selected>Small</wg-tab>
        <wg-tab variant="underline" size="sm">Tab 2</wg-tab>
        <wg-tab variant="underline" size="sm">Tab 3</wg-tab>
      </div>
      <div style="display: flex; gap: 0">
        <wg-tab variant="underline" size="md" selected>Medium</wg-tab>
        <wg-tab variant="underline" size="md">Tab 2</wg-tab>
        <wg-tab variant="underline" size="md">Tab 3</wg-tab>
      </div>
      <div style="display: flex; gap: 0">
        <wg-tab variant="underline" size="lg" selected>Large</wg-tab>
        <wg-tab variant="underline" size="lg">Tab 2</wg-tab>
        <wg-tab variant="underline" size="lg">Tab 3</wg-tab>
      </div>
    </div>
  `,
};

export const FilledSizes: Story = {
  name: 'Filled - Sizes',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
      <div style="display: flex; gap: 4px">
        <wg-tab variant="filled" size="sm" selected>Small</wg-tab>
        <wg-tab variant="filled" size="sm">Tab 2</wg-tab>
        <wg-tab variant="filled" size="sm">Tab 3</wg-tab>
      </div>
      <div style="display: flex; gap: 4px">
        <wg-tab variant="filled" size="md" selected>Medium</wg-tab>
        <wg-tab variant="filled" size="md">Tab 2</wg-tab>
        <wg-tab variant="filled" size="md">Tab 3</wg-tab>
      </div>
      <div style="display: flex; gap: 4px">
        <wg-tab variant="filled" size="lg" selected>Large</wg-tab>
        <wg-tab variant="filled" size="lg">Tab 2</wg-tab>
        <wg-tab variant="filled" size="lg">Tab 3</wg-tab>
      </div>
    </div>
  `,
};

export const FullWidth: Story = {
  render: () => html`
    <div style="width: 400px">
      <div style="display: flex; gap: 0">
        <wg-tab variant="underline" fullWidth selected>Home</wg-tab>
        <wg-tab variant="underline" fullWidth>Profile</wg-tab>
        <wg-tab variant="underline" fullWidth>Settings</wg-tab>
      </div>
    </div>
  `,
};

export const AllStates: Story = {
  name: 'All States Overview',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px">
      <!-- Underline variant -->
      <div>
        <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600">Underline Variant</h3>
        <table style="border-collapse: collapse; width: 100%">
          <thead>
            <tr>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">State</th>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Example</th>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Default</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="underline">Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Muted text, light border</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Hover</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="underline" style="--wg-tab-color: var(--wg-color-text); --wg-tab-border: var(--wg-color-border-hover)">Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Normal text, darker border</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Selected</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="underline" selected>Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Primary text, primary border</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Disabled</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="underline" disabled>Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Subtle text, light border, 50% opacity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Filled variant -->
      <div>
        <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600">Filled Variant</h3>
        <table style="border-collapse: collapse; width: 100%">
          <thead>
            <tr>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">State</th>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Example</th>
              <th style="padding: 8px; text-align: left; font-size: 12px; color: var(--wg-color-text-muted, #666); border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Default</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="filled">Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Transparent background</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Hover</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="filled" style="--wg-tab-bg: var(--wg-color-background-muted)">Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Muted background</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Selected</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="filled" selected>Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Primary background, inverse text</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Selected + Hover</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="filled" selected style="--wg-tab-bg: var(--wg-color-primary-hover)">Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">Darker primary background</td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">Disabled</td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
                <wg-tab variant="filled" disabled>Tab</wg-tab>
              </td>
              <td style="padding: 12px 8px; border-bottom: 1px solid var(--wg-color-border, #e5e7eb); font-size: 12px; color: var(--wg-color-text-muted, #666)">50% opacity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

export const TabGroup: Story = {
  name: 'Tab Group Example',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; width: 500px">
      <div>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Underline Tabs</div>
        <div style="display: flex; gap: 0; border-bottom: 1px solid var(--wg-color-border, #e5e7eb)">
          <wg-tab variant="underline" selected>Overview</wg-tab>
          <wg-tab variant="underline">Activity</wg-tab>
          <wg-tab variant="underline">Analytics</wg-tab>
          <wg-tab variant="underline" disabled>Reports</wg-tab>
        </div>
      </div>
      <div>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-bottom: 8px">Filled Tabs</div>
        <div style="display: flex; gap: 4px; padding: 4px; background-color: var(--wg-color-background-muted, #f5f5f5); border-radius: 8px">
          <wg-tab variant="filled" selected>All</wg-tab>
          <wg-tab variant="filled">Active</wg-tab>
          <wg-tab variant="filled">Completed</wg-tab>
          <wg-tab variant="filled">Archived</wg-tab>
        </div>
      </div>
    </div>
  `,
};
