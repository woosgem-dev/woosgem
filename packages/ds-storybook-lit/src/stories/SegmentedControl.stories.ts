import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/SegmentedControl',
  component: 'wg-segmented-control',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the segmented control',
      table: { category: 'Style' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes control full width',
      table: { category: 'Layout' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the entire control',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wg-segmented-control size="md">
      <wg-segmented-control item selected>Option 1</wg-segmented-control>
      <wg-segmented-control item>Option 2</wg-segmented-control>
      <wg-segmented-control item>Option 3</wg-segmented-control>
    </wg-segmented-control>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
      <wg-segmented-control size="sm">
        <wg-segmented-control item selected>Small</wg-segmented-control>
        <wg-segmented-control item>Option 2</wg-segmented-control>
        <wg-segmented-control item>Option 3</wg-segmented-control>
      </wg-segmented-control>
      <wg-segmented-control size="md">
        <wg-segmented-control item selected>Medium</wg-segmented-control>
        <wg-segmented-control item>Option 2</wg-segmented-control>
        <wg-segmented-control item>Option 3</wg-segmented-control>
      </wg-segmented-control>
      <wg-segmented-control size="lg">
        <wg-segmented-control item selected>Large</wg-segmented-control>
        <wg-segmented-control item>Option 2</wg-segmented-control>
        <wg-segmented-control item>Option 3</wg-segmented-control>
      </wg-segmented-control>
    </div>
  `,
};

export const FullWidth: Story = {
  render: () => html`
    <div style="width: 400px">
      <wg-segmented-control size="md" ?fullWidth=${true}>
        <wg-segmented-control item selected>Option 1</wg-segmented-control>
        <wg-segmented-control item>Option 2</wg-segmented-control>
        <wg-segmented-control item>Option 3</wg-segmented-control>
      </wg-segmented-control>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
      <wg-segmented-control size="md">
        <wg-segmented-control item selected>Active</wg-segmented-control>
        <wg-segmented-control item>Normal</wg-segmented-control>
        <wg-segmented-control item disabled>Disabled Item</wg-segmented-control>
      </wg-segmented-control>
      <wg-segmented-control size="md" disabled>
        <wg-segmented-control item selected>Disabled Control</wg-segmented-control>
        <wg-segmented-control item>All Disabled</wg-segmented-control>
        <wg-segmented-control item>Cannot Click</wg-segmented-control>
      </wg-segmented-control>
    </div>
  `,
};

class SegmentedBuySellDemo extends LitElement {
  @state() selected: 'buy' | 'sell' = 'buy';
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="width: 300px">
        <wg-segmented-control size="lg" ?fullWidth=${true}>
          <wg-segmented-control item ?selected=${this.selected === 'buy'} @click=${() => { this.selected = 'buy'; }}>Buy</wg-segmented-control>
          <wg-segmented-control item ?selected=${this.selected === 'sell'} @click=${() => { this.selected = 'sell'; }}>Sell</wg-segmented-control>
        </wg-segmented-control>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px">
          <div style="font-weight: 600; margin-bottom: 8px">${this.selected === 'buy' ? 'Buy Order' : 'Sell Order'}</div>
          <div style="font-size: 14px; color: #666">${this.selected === 'buy' ? 'Enter the amount you want to buy' : 'Enter the amount you want to sell'}</div>
        </div>
      </div>
    `;
  }
}
customElements.define('segmented-buysell-demo', SegmentedBuySellDemo);

export const BuySellExample: Story = {
  render: () => html`<segmented-buysell-demo></segmented-buysell-demo>`,
};

class SegmentedFilterDemo extends LitElement {
  @state() filter: 'all' | 'active' | 'completed' = 'all';
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="width: 400px">
        <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Tasks Filter</h3>
        <wg-segmented-control size="md" ?fullWidth=${true}>
          <wg-segmented-control item ?selected=${this.filter === 'all'} @click=${() => { this.filter = 'all'; }}>All</wg-segmented-control>
          <wg-segmented-control item ?selected=${this.filter === 'active'} @click=${() => { this.filter = 'active'; }}>Active</wg-segmented-control>
          <wg-segmented-control item ?selected=${this.filter === 'completed'} @click=${() => { this.filter = 'completed'; }}>Completed</wg-segmented-control>
        </wg-segmented-control>
        <div style="margin-top: 16px; padding: 12px; border: 1px solid #e5e5e5; border-radius: 8px">
          <div style="font-size: 14px; color: #666">Showing: <strong style="color: #000">${this.filter}</strong> tasks</div>
        </div>
      </div>
    `;
  }
}
customElements.define('segmented-filter-demo', SegmentedFilterDemo);

export const FilterExample: Story = {
  render: () => html`<segmented-filter-demo></segmented-filter-demo>`,
};
