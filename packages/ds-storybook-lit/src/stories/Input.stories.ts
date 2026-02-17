import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Input',
  component: 'wg-input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underline'],
      description: 'Visual style of the input',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
      table: { category: 'Style' },
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
      table: { category: 'State' },
    },
    success: {
      control: 'boolean',
      description: 'Shows success state',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
      table: { category: 'State' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'outline',
    size: 'md',
  },
  render: (args) => html`
    <wg-input
      variant=${args.variant}
      size=${args.size}
      placeholder=${args.placeholder}
      ?error=${args.error}
      ?success=${args.success}
      ?disabled=${args.disabled}
    ></wg-input>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input variant="outline" placeholder="Outline variant"></wg-input>
      <wg-input variant="filled" placeholder="Filled variant"></wg-input>
      <wg-input variant="underline" placeholder="Underline variant"></wg-input>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input size="sm" placeholder="Small input"></wg-input>
      <wg-input size="md" placeholder="Medium input"></wg-input>
      <wg-input size="lg" placeholder="Large input"></wg-input>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input placeholder="Normal input"></wg-input>
      <wg-input error placeholder="Error state"></wg-input>
      <wg-input success placeholder="Success state"></wg-input>
      <wg-input disabled placeholder="Disabled state"></wg-input>
    </div>
  `,
};

export const FilledVariantStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input variant="filled" placeholder="Normal"></wg-input>
      <wg-input variant="filled" error placeholder="Error"></wg-input>
      <wg-input variant="filled" success placeholder="Success"></wg-input>
      <wg-input variant="filled" disabled placeholder="Disabled"></wg-input>
    </div>
  `,
};

export const UnderlineVariantStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input variant="underline" placeholder="Normal"></wg-input>
      <wg-input variant="underline" error placeholder="Error"></wg-input>
      <wg-input variant="underline" success placeholder="Success"></wg-input>
      <wg-input variant="underline" disabled placeholder="Disabled"></wg-input>
    </div>
  `,
};

export const InputTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
      <wg-input type="text" placeholder="Text input"></wg-input>
      <wg-input type="email" placeholder="Email input"></wg-input>
      <wg-input type="password" placeholder="Password input"></wg-input>
      <wg-input type="number" placeholder="Number input"></wg-input>
      <wg-input type="search" placeholder="Search input"></wg-input>
    </div>
  `,
};

export const Error: Story = {
  args: { placeholder: 'Invalid email address', error: true },
  render: (args) => html`
    <wg-input placeholder=${args.placeholder} ?error=${args.error}></wg-input>
  `,
};

export const Success: Story = {
  args: { placeholder: 'Valid input', success: true },
  render: (args) => html`
    <wg-input placeholder=${args.placeholder} ?success=${args.success}></wg-input>
  `,
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled input', disabled: true },
  render: (args) => html`
    <wg-input placeholder=${args.placeholder} ?disabled=${args.disabled}></wg-input>
  `,
};
