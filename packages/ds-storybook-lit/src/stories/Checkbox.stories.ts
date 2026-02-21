import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'wg-checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
      table: { category: 'Style' },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: { category: 'State' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Shows indeterminate state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    checked: false,
  },
  render: (args) => html`
    <wg-checkbox size=${args.size} ?checked=${args.checked}>
      Checkbox label
    </wg-checkbox>
  `,
};

export const Checked: Story = {
  render: () => html`
    <wg-checkbox checked>Checked checkbox</wg-checkbox>
  `,
};

class CheckboxInteractiveDemo extends LitElement {
  @state() checked = false;
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <wg-checkbox
        ?checked=${this.checked}
        @click=${() => { this.checked = !this.checked; }}
      >
        Click to toggle: ${this.checked ? 'ON' : 'OFF'}
      </wg-checkbox>
    `;
  }
}
customElements.define('checkbox-interactive-demo', CheckboxInteractiveDemo);

export const Interactive: Story = {
  render: () => html`<checkbox-interactive-demo></checkbox-interactive-demo>`,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <wg-checkbox>Unchecked</wg-checkbox>
      <wg-checkbox checked>Checked</wg-checkbox>
      <wg-checkbox ?indeterminate=${true}>Indeterminate</wg-checkbox>
      <wg-checkbox disabled>Disabled</wg-checkbox>
      <wg-checkbox checked disabled>Checked & Disabled</wg-checkbox>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <wg-checkbox size="sm" checked>Small checkbox</wg-checkbox>
      <wg-checkbox size="md" checked>Medium checkbox (default)</wg-checkbox>
      <wg-checkbox size="lg" checked>Large checkbox</wg-checkbox>
    </div>
  `,
};

class CheckboxIndeterminateDemo extends LitElement {
  @state() items = [false, true, false];
  override createRenderRoot() { return this; }

  get allChecked() { return this.items.every(Boolean); }
  get someChecked() { return this.items.some(Boolean); }
  get indeterminate() { return this.someChecked && !this.allChecked; }

  toggleAll() {
    this.items = this.allChecked ? [false, false, false] : [true, true, true];
  }

  toggleItem(index: number) {
    const newItems = [...this.items];
    newItems[index] = !newItems[index];
    this.items = newItems;
  }

  override render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 8px">
        <wg-checkbox
          ?checked=${this.allChecked}
          ?indeterminate=${this.indeterminate}
          @click=${() => this.toggleAll()}
        >
          <span style="font-weight: 600">Select all items</span>
        </wg-checkbox>
        <div style="padding-left: 24px; display: flex; flex-direction: column; gap: 8px">
          ${this.items.map(
            (checked, index) => html`
              <wg-checkbox
                ?checked=${checked}
                @click=${() => this.toggleItem(index)}
              >
                Item ${index + 1}
              </wg-checkbox>
            `,
          )}
        </div>
      </div>
    `;
  }
}
customElements.define('checkbox-indeterminate-demo', CheckboxIndeterminateDemo);

export const Indeterminate: Story = {
  render: () => html`<checkbox-indeterminate-demo></checkbox-indeterminate-demo>`,
};

export const WithoutLabel: Story = {
  render: () => html`
    <wg-checkbox checked aria-label="Select this item"></wg-checkbox>
  `,
};

class CheckboxFormDemo extends LitElement {
  @state() values = { terms: false, newsletter: false, marketing: false };
  override createRenderRoot() { return this; }

  toggle(key: 'terms' | 'newsletter' | 'marketing') {
    this.values = { ...this.values, [key]: !this.values[key] };
  }

  override render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 12px">
        <wg-checkbox ?checked=${this.values.terms} @click=${() => this.toggle('terms')}>
          I agree to the Terms of Service
        </wg-checkbox>
        <wg-checkbox ?checked=${this.values.newsletter} @click=${() => this.toggle('newsletter')}>
          Subscribe to newsletter
        </wg-checkbox>
        <wg-checkbox ?checked=${this.values.marketing} @click=${() => this.toggle('marketing')}>
          Receive marketing emails
        </wg-checkbox>
      </div>
    `;
  }
}
customElements.define('checkbox-form-demo', CheckboxFormDemo);

export const FormExample: Story = {
  render: () => html`<checkbox-form-demo></checkbox-form-demo>`,
};

export const CustomIndicator: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <wg-checkbox checked>
        Custom checkmark
      </wg-checkbox>
      <wg-checkbox checked>
        Custom SVG icon
      </wg-checkbox>
    </div>
  `,
};
