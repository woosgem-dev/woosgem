import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '@woosgem/ds-react';

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
    children: '⌘K',
    size: 'sm',
    variant: 'raised',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Kbd size="sm">⌘K</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Kbd size="md">⌘K</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Kbd size="lg">⌘K</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>lg</div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Kbd variant="raised">Shift</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>raised</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Kbd variant="flat">Shift</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>flat</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Kbd variant="outline">Shift</Kbd>
        <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)', marginTop: '8px' }}>outline</div>
      </div>
    </div>
  ),
};

export const KeyboardShortcut: Story = {
  name: 'Keyboard Shortcut',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
        Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open command palette
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
        Press <Kbd>Esc</Kbd> to close
      </div>
    </div>
  ),
};
