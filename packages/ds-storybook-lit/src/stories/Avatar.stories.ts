import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'wg-avatar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
      table: { category: 'Style' },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
      table: { category: 'Style' },
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      table: { category: 'Content' },
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
      table: { category: 'Accessibility' },
    },
    fallback: {
      control: 'text',
      description: 'Fallback text when no image',
      table: { category: 'Content' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    shape: 'circle',
    fallback: 'JD',
  },
  render: (args) => html`
    <wg-avatar size=${args.size} shape=${args.shape} fallback=${args.fallback}>JD</wg-avatar>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <wg-avatar size="xs" fallback="XS">XS</wg-avatar>
      <wg-avatar size="sm" fallback="SM">SM</wg-avatar>
      <wg-avatar size="md" fallback="MD">MD</wg-avatar>
      <wg-avatar size="lg" fallback="LG">LG</wg-avatar>
      <wg-avatar size="xl" fallback="XL">XL</wg-avatar>
    </div>
  `,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <wg-avatar shape="circle" fallback="JD">JD</wg-avatar>
      <wg-avatar shape="square" fallback="JD">JD</wg-avatar>
    </div>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <wg-avatar size="md" shape="circle" src="https://i.pravatar.cc/150?img=1" alt="User avatar"></wg-avatar>
      <wg-avatar size="lg" shape="circle" src="https://i.pravatar.cc/150?img=2" alt="User avatar"></wg-avatar>
      <wg-avatar size="xl" shape="circle" src="https://i.pravatar.cc/150?img=3" alt="User avatar"></wg-avatar>
    </div>
  `,
};

export const WithFallback: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <wg-avatar fallback="AB">AB</wg-avatar>
      <wg-avatar fallback="CD">CD</wg-avatar>
      <wg-avatar fallback="EF">EF</wg-avatar>
      <wg-avatar fallback="GH">GH</wg-avatar>
    </div>
  `,
};

export const SquareWithImage: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center">
      <wg-avatar size="sm" shape="square" src="https://i.pravatar.cc/150?img=4" alt="User avatar"></wg-avatar>
      <wg-avatar size="md" shape="square" src="https://i.pravatar.cc/150?img=5" alt="User avatar"></wg-avatar>
      <wg-avatar size="lg" shape="square" src="https://i.pravatar.cc/150?img=6" alt="User avatar"></wg-avatar>
    </div>
  `,
};

export const CompleteExample: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px">
      <div style="display: flex; gap: 12px; align-items: center">
        <wg-avatar size="lg" src="https://i.pravatar.cc/150?img=7" alt="John Doe"></wg-avatar>
        <div>
          <div style="font-weight: 600; margin-bottom: 4px">John Doe</div>
          <div style="font-size: 14px; color: #666">john.doe@example.com</div>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: center">
        <wg-avatar size="sm" fallback="JD">JD</wg-avatar>
        <wg-avatar size="sm" fallback="AB">AB</wg-avatar>
        <wg-avatar size="sm" fallback="CD">CD</wg-avatar>
        <wg-avatar size="sm" fallback="EF">EF</wg-avatar>
        <span style="font-size: 14px; color: #666">+5 more</span>
      </div>
    </div>
  `,
};
