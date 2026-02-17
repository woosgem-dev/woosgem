import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'wg-skeleton',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Shape variant of the skeleton',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the skeleton',
      table: { category: 'Style' },
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type',
      table: { category: 'Style' },
    },
    width: {
      control: 'text',
      description: 'Custom width (string or number)',
      table: { category: 'Dimensions' },
    },
    height: {
      control: 'text',
      description: 'Custom height (string or number)',
      table: { category: 'Dimensions' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'text', size: 'md', animation: 'pulse' },
  render: (args) => html`
    <wg-skeleton variant=${args.variant} size=${args.size} animation=${args.animation}></wg-skeleton>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center">
        <wg-skeleton variant="text" .width=${120}></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">text</div>
      </div>
      <div style="text-align: center">
        <wg-skeleton variant="circular" size="lg"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">circular</div>
      </div>
      <div style="text-align: center">
        <wg-skeleton variant="rectangular" .width=${120} .height=${80}></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">rectangular</div>
      </div>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
      <div>
        <wg-skeleton variant="text" size="sm"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
      </div>
      <div>
        <wg-skeleton variant="text" size="md"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
      </div>
      <div>
        <wg-skeleton variant="text" size="lg"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
      </div>
      <div>
        <wg-skeleton variant="text" size="full"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">full</div>
      </div>
    </div>
  `,
};

export const Animations: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center; flex: 1">
        <wg-skeleton variant="text" animation="pulse"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">pulse</div>
      </div>
      <div style="text-align: center; flex: 1">
        <wg-skeleton variant="text" animation="wave"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">wave</div>
      </div>
      <div style="text-align: center; flex: 1">
        <wg-skeleton variant="text" animation="none"></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">none</div>
      </div>
    </div>
  `,
};

export const CustomDimensions: Story = {
  name: 'Custom Dimensions',
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: flex-start">
      <div style="text-align: center">
        <wg-skeleton variant="rectangular" .width=${200} .height=${100}></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">200 x 100</div>
      </div>
      <div style="text-align: center">
        <wg-skeleton variant="rectangular" .width=${150} .height=${150}></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">150 x 150</div>
      </div>
      <div style="text-align: center">
        <wg-skeleton variant="rectangular" width="100%" .height=${60}></wg-skeleton>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">100% x 60</div>
      </div>
    </div>
  `,
};

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  render: () => html`
    <div style="max-width: 320px; padding: 16px; border: 1px solid var(--wg-color-border, #e5e7eb); border-radius: 12px">
      <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px">
        <wg-skeleton variant="circular" size="lg"></wg-skeleton>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 8px">
          <wg-skeleton variant="text" size="md" width="60%"></wg-skeleton>
          <wg-skeleton variant="text" size="sm" width="40%"></wg-skeleton>
        </div>
      </div>
      <wg-skeleton variant="rectangular" width="100%" .height=${160}></wg-skeleton>
      <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px">
        <wg-skeleton variant="text" size="md"></wg-skeleton>
        <wg-skeleton variant="text" size="md" width="80%"></wg-skeleton>
        <wg-skeleton variant="text" size="sm" width="50%"></wg-skeleton>
      </div>
    </div>
  `,
};
