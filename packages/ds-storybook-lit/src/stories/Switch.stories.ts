import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'wg-switch',
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
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'md', color: 'primary', checked: false, disabled: false },
  render: (args) => html`
    <wg-switch size=${args.size} color=${args.color} ?checked=${args.checked} ?disabled=${args.disabled}></wg-switch>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center">
        <wg-switch size="sm" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
      </div>
      <div style="text-align: center">
        <wg-switch size="md" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
      </div>
      <div style="text-align: center">
        <wg-switch size="lg" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
      </div>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center">
        <wg-switch color="primary" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
      </div>
      <div style="text-align: center">
        <wg-switch color="secondary" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">secondary</div>
      </div>
      <div style="text-align: center">
        <wg-switch color="success" checked></wg-switch>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">success</div>
      </div>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; align-items: center; gap: 12px">
        <wg-switch></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Unchecked</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <wg-switch checked></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Checked</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <wg-switch disabled></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Disabled</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <wg-switch checked disabled></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Checked + Disabled</span>
      </div>
    </div>
  `,
};

class SwitchInteractiveDemo extends LitElement {
  @state() notifications = true;
  @state() darkMode = false;
  @state() autoSave = true;
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; background-color: var(--wg-color-background-muted, #f5f5f5); border-radius: 12px; min-width: 300px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Notifications</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Receive push notifications</div>
          </div>
          <wg-switch ?checked=${this.notifications} @click=${() => { this.notifications = !this.notifications; }}></wg-switch>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Dark Mode</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Enable dark theme</div>
          </div>
          <wg-switch ?checked=${this.darkMode} @click=${() => { this.darkMode = !this.darkMode; }}></wg-switch>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>
            <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Auto-save</div>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Save changes automatically</div>
          </div>
          <wg-switch color="success" ?checked=${this.autoSave} @click=${() => { this.autoSave = !this.autoSave; }}></wg-switch>
        </div>
      </div>
    `;
  }
}
customElements.define('switch-interactive-demo', SwitchInteractiveDemo);

export const Interactive: Story = {
  render: () => html`<switch-interactive-demo></switch-interactive-demo>`,
};

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <label style="display: flex; align-items: center; gap: 12px; cursor: pointer">
        <wg-switch checked></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Enable feature</span>
      </label>
      <label style="display: flex; align-items: center; gap: 12px; cursor: pointer">
        <wg-switch></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Send newsletters</span>
      </label>
      <label style="display: flex; align-items: center; gap: 12px; cursor: not-allowed">
        <wg-switch disabled></wg-switch>
        <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Premium only</span>
      </label>
    </div>
  `,
};
