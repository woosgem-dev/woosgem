import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Progress',
  component: 'wg-progress',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gradient'],
      description: 'Visual variant of the progress bar',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
      description: 'Color theme of the progress bar',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress bar',
      table: { category: 'Style' },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
      table: { category: 'State' },
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value',
      table: { category: 'State' },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label inside the progress bar',
      table: { category: 'Display' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 65,
    variant: 'default',
    color: 'primary',
    size: 'md',
    showLabel: false,
  },
  render: (args) => html`
    <wg-progress
      .value=${args.value}
      variant=${args.variant}
      color=${args.color}
      size=${args.size}
      ?showLabel=${args.showLabel}
    ></wg-progress>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <wg-progress .value=${50} size="sm"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
      </div>
      <div>
        <wg-progress .value=${50} size="md"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
      </div>
      <div>
        <wg-progress .value=${50} size="lg"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
      </div>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <wg-progress .value=${80} color="primary"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
      </div>
      <div>
        <wg-progress .value=${90} color="success"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">success</div>
      </div>
      <div>
        <wg-progress .value=${60} color="warning"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">warning</div>
      </div>
      <div>
        <wg-progress .value=${30} color="danger"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">danger</div>
      </div>
      <div>
        <wg-progress .value=${50} color="neutral"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">neutral</div>
      </div>
    </div>
  `,
};

export const WithLabel: Story = {
  name: 'With Label',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <wg-progress .value=${25} showLabel></wg-progress>
      <wg-progress .value=${50} showLabel color="success"></wg-progress>
      <wg-progress .value=${75} showLabel color="warning"></wg-progress>
      <wg-progress .value=${100} showLabel color="danger"></wg-progress>
    </div>
  `,
};

export const GradientVariant: Story = {
  name: 'Gradient Variant',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <wg-progress .value=${70} variant="gradient" color="primary"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">primary</div>
      </div>
      <div>
        <wg-progress .value=${85} variant="gradient" color="success"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">success</div>
      </div>
      <div>
        <wg-progress .value=${55} variant="gradient" color="warning"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">warning</div>
      </div>
      <div>
        <wg-progress .value=${40} variant="gradient" color="danger"></wg-progress>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">danger</div>
      </div>
    </div>
  `,
};

export const CustomMax: Story = {
  name: 'Custom Max',
  args: {
    value: 3,
    max: 5,
    showLabel: true,
    color: 'primary',
  },
  render: (args) => html`
    <wg-progress .value=${args.value} .max=${args.max} ?showLabel=${args.showLabel} color=${args.color}></wg-progress>
  `,
};
