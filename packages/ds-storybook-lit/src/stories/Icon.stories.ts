import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const bellSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" /></svg>`;
const checkCircleSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" /></svg>`;
const alertTriangleSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>`;
const heartSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>`;
const settingsSvg = html`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>`;

const meta: Meta = {
  title: 'Components/Icon',
  component: 'wg-icon',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size (xs: 12px, sm: 16px, md: 20px, lg: 24px, xl: 32px)',
      table: { category: 'Style' },
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'danger', 'success', 'warning', 'info', 'muted'],
      description: 'Icon color',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'inherit',
  },
  render: (args) => html`
    <wg-icon size=${args.size} color=${args.color}>${bellSvg}</wg-icon>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px">
      <wg-icon size="xs">${bellSvg}</wg-icon>
      <wg-icon size="sm">${bellSvg}</wg-icon>
      <wg-icon size="md">${bellSvg}</wg-icon>
      <wg-icon size="lg">${bellSvg}</wg-icon>
      <wg-icon size="xl">${bellSvg}</wg-icon>
    </div>
  `,
};

export const SizesWithLabels: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-icon size="xs">${bellSvg}</wg-icon>
        <span>xs (12px) - Badge, Tag icon</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-icon size="sm">${bellSvg}</wg-icon>
        <span>sm (16px) - Inline text, small button</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-icon size="md">${bellSvg}</wg-icon>
        <span>md (20px) - Default button, input field (default)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-icon size="lg">${bellSvg}</wg-icon>
        <span>lg (24px) - Navigation, emphasis icon</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <wg-icon size="xl">${bellSvg}</wg-icon>
        <span>xl (32px) - Hero, empty state</span>
      </div>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px">
      <wg-icon size="lg" color="inherit">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="primary">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="secondary">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="danger">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="success">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="warning">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="info">${heartSvg}</wg-icon>
      <wg-icon size="lg" color="muted">${heartSvg}</wg-icon>
    </div>
  `,
};

export const ColorsWithLabels: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="inherit">${heartSvg}</wg-icon>
        <span style="font-size: 12px">inherit</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="primary">${heartSvg}</wg-icon>
        <span style="font-size: 12px">primary</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="secondary">${heartSvg}</wg-icon>
        <span style="font-size: 12px">secondary</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="danger">${heartSvg}</wg-icon>
        <span style="font-size: 12px">danger</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="success">${checkCircleSvg}</wg-icon>
        <span style="font-size: 12px">success</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="warning">${alertTriangleSvg}</wg-icon>
        <span style="font-size: 12px">warning</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="info">${bellSvg}</wg-icon>
        <span style="font-size: 12px">info</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
        <wg-icon size="lg" color="muted">${settingsSvg}</wg-icon>
        <span style="font-size: 12px">muted</span>
      </div>
    </div>
  `,
};

export const IconGallery: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px">
      ${[
        { icon: bellSvg, name: 'bell' },
        { icon: checkCircleSvg, name: 'check-circle' },
        { icon: alertTriangleSvg, name: 'alert-triangle' },
        { icon: heartSvg, name: 'heart' },
        { icon: settingsSvg, name: 'settings' },
      ].map(
        ({ icon, name }) => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px">
            <wg-icon size="lg">${icon}</wg-icon>
            <span style="font-size: 12px; color: #6b7280">${name}</span>
          </div>
        `,
      )}
    </div>
  `,
};

export const InheritColor: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="color: #ef4444; display: flex; align-items: center; gap: 8px">
        <wg-icon size="md">${heartSvg}</wg-icon>
        <span>Red text with inherit icon</span>
      </div>
      <div style="color: #22c55e; display: flex; align-items: center; gap: 8px">
        <wg-icon size="md">${checkCircleSvg}</wg-icon>
        <span>Green text with inherit icon</span>
      </div>
      <div style="color: #3b82f6; display: flex; align-items: center; gap: 8px">
        <wg-icon size="md">${bellSvg}</wg-icon>
        <span>Blue text with inherit icon</span>
      </div>
    </div>
  `,
};

export const InlineWithText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 14px">
      <p style="display: flex; align-items: center; gap: 4px; margin: 0">
        <wg-icon size="sm" color="success">${checkCircleSvg}</wg-icon>
        Operation completed successfully
      </p>
      <p style="display: flex; align-items: center; gap: 4px; margin: 0">
        <wg-icon size="sm" color="warning">${alertTriangleSvg}</wg-icon>
        Please review the changes before proceeding
      </p>
      <p style="display: flex; align-items: center; gap: 4px; margin: 0">
        <wg-icon size="sm" color="info">${bellSvg}</wg-icon>
        You have 3 new notifications
      </p>
    </div>
  `,
};
