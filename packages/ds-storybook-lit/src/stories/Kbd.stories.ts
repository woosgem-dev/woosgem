import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Kbd',
  component: 'wg-kbd',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the keyboard key',
      table: { category: 'Style' },
    },
    variant: {
      control: 'select',
      options: ['raised', 'flat', 'outline'],
      description: 'Visual variant of the keyboard key',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'sm',
    variant: 'raised',
  },
  render: (args) => html`
    <wg-kbd size=${args.size} variant=${args.variant}>\u2318K</wg-kbd>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center">
        <wg-kbd size="sm">\u2318K</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
      </div>
      <div style="text-align: center">
        <wg-kbd size="md">\u2318K</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
      </div>
      <div style="text-align: center">
        <wg-kbd size="lg">\u2318K</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
      </div>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center">
      <div style="text-align: center">
        <wg-kbd variant="raised">Shift</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">raised</div>
      </div>
      <div style="text-align: center">
        <wg-kbd variant="flat">Shift</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">flat</div>
      </div>
      <div style="text-align: center">
        <wg-kbd variant="outline">Shift</wg-kbd>
        <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">outline</div>
      </div>
    </div>
  `,
};

export const KeyboardShortcut: Story = {
  name: 'Keyboard Shortcut',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
        Press <wg-kbd>\u2318</wg-kbd> + <wg-kbd>K</wg-kbd> to search
      </div>
      <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
        Press <wg-kbd>Ctrl</wg-kbd> + <wg-kbd>Shift</wg-kbd> + <wg-kbd>P</wg-kbd> to open command palette
      </div>
      <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
        Press <wg-kbd>Esc</wg-kbd> to close
      </div>
    </div>
  `,
};
