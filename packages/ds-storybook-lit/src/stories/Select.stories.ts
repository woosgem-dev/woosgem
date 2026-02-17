import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Select',
  component: 'wg-select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'Visual style of the select',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
      table: { category: 'Style' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: { category: 'State' },
    },
    open: {
      control: 'boolean',
      description: 'Controls dropdown open state',
      table: { category: 'State' },
    },
    multiple: {
      control: 'boolean',
      description: 'Enables multiple selection',
      table: { category: 'Behavior' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value selected',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { placeholder: 'Select an option...', variant: 'outline', size: 'md' },
  render: (args) => html`
    <wg-select variant=${args.variant} size=${args.size} placeholder=${args.placeholder}></wg-select>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-select variant="outline" placeholder="Outline variant" aria-label="Outline select"></wg-select>
      <wg-select variant="filled" placeholder="Filled variant" aria-label="Filled select"></wg-select>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-select size="sm" placeholder="Small select" aria-label="Small select"></wg-select>
      <wg-select size="md" placeholder="Medium select" aria-label="Medium select"></wg-select>
      <wg-select size="lg" placeholder="Large select" aria-label="Large select"></wg-select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-select disabled placeholder="Disabled outline" aria-label="Disabled outline select"></wg-select>
      <wg-select variant="filled" disabled placeholder="Disabled filled" aria-label="Disabled filled select"></wg-select>
    </div>
  `,
};

export const Error: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-select error placeholder="Error state outline" aria-label="Error outline select"></wg-select>
      <wg-select variant="filled" error placeholder="Error state filled" aria-label="Error filled select"></wg-select>
    </div>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-select ?multiple=${true} placeholder="Multiple selection" aria-label="Multiple select"></wg-select>
      <wg-select ?multiple=${true} ?open=${true} placeholder="Multiple (open)" aria-label="Multiple select open"></wg-select>
    </div>
  `,
};

export const WithOptions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <div style="position: relative">
        <wg-select ?open=${true} placeholder="With menu open" aria-label="Open select with menu"></wg-select>
        <wg-select-menu ?open=${true} size="md" style="position: absolute; top: 100%; width: 100%; margin-top: 4px">
          <wg-select-option value="react" size="md">React</wg-select-option>
          <wg-select-option value="vue" size="md" selected>Vue</wg-select-option>
          <wg-select-option value="angular" size="md">Angular</wg-select-option>
          <wg-select-option value="svelte" size="md" disabled>Svelte (disabled)</wg-select-option>
        </wg-select-menu>
      </div>
    </div>
  `,
};

class SelectInteractiveDemo extends LitElement {
  @state() isOpen = false;
  @state() selectedValue = '';
  createRenderRoot() { return this; }

  private options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  handleSelect(value: string) {
    this.selectedValue = value;
    this.isOpen = false;
  }

  render() {
    return html`
      <div style="position: relative; width: 300px">
        <wg-select
          ?open=${this.isOpen}
          placeholder="Click to open"
          .value=${this.selectedValue}
          @click=${() => { this.isOpen = !this.isOpen; }}
          aria-label="Interactive select"
        >${this.selectedValue ? this.options.find((o) => o.value === this.selectedValue)?.label : ''}</wg-select>
        ${this.isOpen ? html`
          <wg-select-menu ?open=${this.isOpen} size="md" style="position: absolute; top: 100%; width: 100%; margin-top: 4px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 1000">
            ${this.options.map(
              (option) => html`
                <wg-select-option
                  value=${option.value}
                  size="md"
                  ?selected=${this.selectedValue === option.value}
                  @click=${() => this.handleSelect(option.value)}
                  style="cursor: pointer"
                >${option.label}</wg-select-option>
              `,
            )}
          </wg-select-menu>
        ` : ''}
        ${this.selectedValue ? html`
          <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px">
            <p style="margin: 0; font-size: 14px">Selected: <strong>${this.options.find((o) => o.value === this.selectedValue)?.label}</strong></p>
          </div>
        ` : ''}
      </div>
    `;
  }
}
customElements.define('select-interactive-demo', SelectInteractiveDemo);

export const Interactive: Story = {
  render: () => html`<select-interactive-demo></select-interactive-demo>`,
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 300px">
      <div>
        <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600">Outline Variant</h4>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <wg-select variant="outline" placeholder="Normal" aria-label="Outline normal"></wg-select>
          <wg-select variant="outline" error placeholder="Error" aria-label="Outline error"></wg-select>
          <wg-select variant="outline" disabled placeholder="Disabled" aria-label="Outline disabled"></wg-select>
          <wg-select variant="outline" ?open=${true} placeholder="Open" aria-label="Outline open"></wg-select>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600">Filled Variant</h4>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <wg-select variant="filled" placeholder="Normal" aria-label="Filled normal"></wg-select>
          <wg-select variant="filled" error placeholder="Error" aria-label="Filled error"></wg-select>
          <wg-select variant="filled" disabled placeholder="Disabled" aria-label="Filled disabled"></wg-select>
          <wg-select variant="filled" ?open=${true} placeholder="Open" aria-label="Filled open"></wg-select>
        </div>
      </div>
    </div>
  `,
};
