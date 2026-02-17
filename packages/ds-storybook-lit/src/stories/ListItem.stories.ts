import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/ListItem',
  component: 'wg-list-item',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'interactive'],
      description: 'Visual style of the list item',
      table: { category: 'Style' },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the item is selected',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the item',
      table: { category: 'State' },
    },
    divider: {
      control: 'boolean',
      description: 'Shows bottom divider',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant=${args.variant}>List Item</wg-list-item>
    </ul>
  `,
};

export const Variants: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant="default">Default Variant</wg-list-item>
      <wg-list-item variant="interactive">Interactive Variant</wg-list-item>
    </ul>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant="interactive" @click=${() => alert('Clicked!')}>Click me</wg-list-item>
      <wg-list-item variant="interactive" @click=${() => alert('Another click!')}>Click me too</wg-list-item>
    </ul>
  `,
};

export const Selected: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant="interactive" selected>Selected Item</wg-list-item>
      <wg-list-item variant="interactive">Unselected Item</wg-list-item>
      <wg-list-item variant="interactive">Another Item</wg-list-item>
    </ul>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant="interactive">Normal Item</wg-list-item>
      <wg-list-item variant="interactive" disabled>Disabled Item</wg-list-item>
      <wg-list-item variant="interactive">Another Item</wg-list-item>
    </ul>
  `,
};

export const WithDivider: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item ?divider=${true}>First Item</wg-list-item>
      <wg-list-item ?divider=${true}>Second Item</wg-list-item>
      <wg-list-item ?divider=${true}>Third Item</wg-list-item>
      <wg-list-item>Last Item (no divider)</wg-list-item>
    </ul>
  `,
};

export const CompleteExample: Story = {
  render: () => html`
    <div style="width: 400px">
      <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600">Navigation Menu</h3>
      <ul style="list-style: none; padding: 0; margin: 0; border: 1px solid #e5e5e5; border-radius: 8px">
        <wg-list-item variant="interactive" selected ?divider=${true}>Dashboard</wg-list-item>
        <wg-list-item variant="interactive" ?divider=${true}>Projects</wg-list-item>
        <wg-list-item variant="interactive" ?divider=${true}>Team</wg-list-item>
        <wg-list-item variant="interactive" disabled ?divider=${true}>Settings (Coming Soon)</wg-list-item>
        <wg-list-item variant="interactive">Logout</wg-list-item>
      </ul>
    </div>
  `,
};

export const AllStates: Story = {
  render: () => html`
    <ul style="width: 300px; list-style: none; padding: 0; margin: 0">
      <wg-list-item variant="default">Default</wg-list-item>
      <wg-list-item variant="interactive">Interactive</wg-list-item>
      <wg-list-item variant="interactive" selected>Selected</wg-list-item>
      <wg-list-item variant="interactive" disabled>Disabled</wg-list-item>
      <wg-list-item variant="interactive" ?divider=${true}>With Divider</wg-list-item>
    </ul>
  `,
};
