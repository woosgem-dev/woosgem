import type { Meta, StoryObj } from '@storybook/vue3';
import { Kbd } from '@woosgem/ds-vue';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
    variant: 'raised',
  },
  render: (args) => ({
    components: { Kbd },
    setup() { return { args }; },
    template: '<Kbd v-bind="args">\u2318K</Kbd>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Kbd size="sm">\u2318K</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">sm</div>
        </div>
        <div style="text-align: center">
          <Kbd size="md">\u2318K</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">md</div>
        </div>
        <div style="text-align: center">
          <Kbd size="lg">\u2318K</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">lg</div>
        </div>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <div style="text-align: center">
          <Kbd variant="raised">Shift</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">raised</div>
        </div>
        <div style="text-align: center">
          <Kbd variant="flat">Shift</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">flat</div>
        </div>
        <div style="text-align: center">
          <Kbd variant="outline">Shift</Kbd>
          <div style="font-size: 12px; color: var(--wg-color-text-muted, #666); margin-top: 8px">outline</div>
        </div>
      </div>
    `,
  }),
};

export const KeyboardShortcut: Story = {
  name: 'Keyboard Shortcut',
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
          Press <Kbd>\u2318</Kbd> + <Kbd>K</Kbd> to search
        </div>
        <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
          Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open command palette
        </div>
        <div style="display: flex; align-items: center; gap: 6px; font-size: 14px">
          Press <Kbd>Esc</Kbd> to close
        </div>
      </div>
    `,
  }),
};
