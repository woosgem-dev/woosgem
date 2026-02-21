import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'wg-radio',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio button',
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
      description: 'Whether the radio is checked',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'md', color: 'primary', checked: false, disabled: false },
  render: (args) => html`
    <wg-radio size=${args.size} color=${args.color} ?checked=${args.checked} ?disabled=${args.disabled}></wg-radio>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      ${(['sm', 'md', 'lg'] as const).map(
        (size) => html`
          <div style="text-align: center">
            <wg-radio size=${size} checked></wg-radio>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">${size}</div>
          </div>
        `,
      )}
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      ${(['primary', 'secondary', 'success'] as const).map(
        (color) => html`
          <div style="text-align: center">
            <wg-radio color=${color} checked></wg-radio>
            <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">${color}</div>
          </div>
        `,
      )}
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px">
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-radio></wg-radio>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Unchecked</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-radio checked></wg-radio>
        <span style="font-size: 14px; color: var(--wg-color-text, #111)">Checked</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-radio disabled></wg-radio>
        <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Disabled</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-radio checked disabled></wg-radio>
        <span style="font-size: 14px; color: var(--wg-color-text-muted, #666)">Checked + Disabled</span>
      </div>
    </div>
  `,
};

class RadioInteractiveDemo extends LitElement {
  @state() selected = 'option1';
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 12px">
        ${['option1', 'option2', 'option3'].map(
          (option) => html`
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer">
              <wg-radio ?checked=${this.selected === option} @click=${() => { this.selected = option; }}></wg-radio>
              <span style="font-size: 14px; color: var(--wg-color-text, #111)">Option ${option.slice(-1)}</span>
            </label>
          `,
        )}
        <div style="margin-top: 8px; font-size: 12px; color: var(--wg-color-text-muted, #666)">Selected: ${this.selected}</div>
      </div>
    `;
  }
}
customElements.define('radio-interactive-demo', RadioInteractiveDemo);

export const Interactive: Story = {
  render: () => html`<radio-interactive-demo></radio-interactive-demo>`,
};

export const RadioGroupVertical: Story = {
  name: 'RadioGroup - Vertical',
  render: () => html`
    <wg-radio-group orientation="vertical">
      <div class="radio-item">
        <wg-radio checked></wg-radio>
        <span class="radio-label">Option A</span>
      </div>
      <div class="radio-item">
        <wg-radio></wg-radio>
        <span class="radio-label">Option B</span>
      </div>
      <div class="radio-item">
        <wg-radio></wg-radio>
        <span class="radio-label">Option C</span>
      </div>
    </wg-radio-group>
  `,
};

export const RadioGroupHorizontal: Story = {
  name: 'RadioGroup - Horizontal',
  render: () => html`
    <wg-radio-group orientation="horizontal">
      <div class="radio-item">
        <wg-radio checked></wg-radio>
        <span class="radio-label">Small</span>
      </div>
      <div class="radio-item">
        <wg-radio></wg-radio>
        <span class="radio-label">Medium</span>
      </div>
      <div class="radio-item">
        <wg-radio></wg-radio>
        <span class="radio-label">Large</span>
      </div>
    </wg-radio-group>
  `,
};

class RadioFormDemo extends LitElement {
  @state() plan = 'pro';
  override createRenderRoot() { return this; }
  override render() {
    const options = [
      { id: 'free', label: 'Free', description: 'Basic features' },
      { id: 'pro', label: 'Pro', description: 'Advanced features + Support' },
      { id: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
    ];
    return html`
      <div style="max-width: 400px; padding: 24px; background-color: var(--wg-color-background, #fff); border-radius: 12px; border: 1px solid var(--wg-color-border, #e5e7eb)">
        <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: var(--wg-color-text, #111)">Select Plan</h3>
        <div style="display: flex; flex-direction: column; gap: 12px">
          ${options.map(
            (option) => html`
              <label
                style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; border-radius: 8px; border: 1px solid ${this.plan === option.id ? 'var(--wg-color-primary, #0066ff)' : 'var(--wg-color-border, #e5e7eb)'}; background-color: ${this.plan === option.id ? 'var(--wg-color-primary-alpha-10, rgba(0, 102, 255, 0.1))' : 'transparent'}; cursor: pointer; transition: all 0.2s"
              >
                <wg-radio ?checked=${this.plan === option.id} @click=${() => { this.plan = option.id; }}></wg-radio>
                <div>
                  <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">${option.label}</div>
                  <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">${option.description}</div>
                </div>
              </label>
            `,
          )}
        </div>
      </div>
    `;
  }
}
customElements.define('radio-form-demo', RadioFormDemo);

export const FormExample: Story = {
  name: 'Form Example',
  render: () => html`<radio-form-demo></radio-form-demo>`,
};

export const WithDescription: Story = {
  name: 'With Descriptions',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 350px">
      <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer">
        <wg-radio checked style="margin-top: 2px"></wg-radio>
        <div>
          <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Email notifications</div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Receive updates via email</div>
        </div>
      </label>
      <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer">
        <wg-radio style="margin-top: 2px"></wg-radio>
        <div>
          <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">Push notifications</div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Get instant alerts on your device</div>
        </div>
      </label>
      <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer">
        <wg-radio style="margin-top: 2px"></wg-radio>
        <div>
          <div style="font-size: 14px; font-weight: 500; color: var(--wg-color-text, #111)">No notifications</div>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666)">Only check manually</div>
        </div>
      </label>
    </div>
  `,
};
