
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@woosgem/ds-react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    shape: 'circle',
    fallback: 'JD',
    children: 'JD',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="xs" fallback="XS">XS</Avatar>
      <Avatar size="sm" fallback="SM">SM</Avatar>
      <Avatar size="md" fallback="MD">MD</Avatar>
      <Avatar size="lg" fallback="LG">LG</Avatar>
      <Avatar size="xl" fallback="XL">XL</Avatar>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar shape="circle" fallback="JD">JD</Avatar>
      <Avatar shape="square" fallback="JD">JD</Avatar>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        size="md"
        shape="circle"
        src="https://i.pravatar.cc/150?img=1"
        alt="User avatar"
      />
      <Avatar
        size="lg"
        shape="circle"
        src="https://i.pravatar.cc/150?img=2"
        alt="User avatar"
      />
      <Avatar
        size="xl"
        shape="circle"
        src="https://i.pravatar.cc/150?img=3"
        alt="User avatar"
      />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar fallback="AB">AB</Avatar>
      <Avatar fallback="CD">CD</Avatar>
      <Avatar fallback="EF">EF</Avatar>
      <Avatar fallback="GH">GH</Avatar>
    </div>
  ),
};

export const SquareWithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        size="sm"
        shape="square"
        src="https://i.pravatar.cc/150?img=4"
        alt="User avatar"
      />
      <Avatar
        size="md"
        shape="square"
        src="https://i.pravatar.cc/150?img=5"
        alt="User avatar"
      />
      <Avatar
        size="lg"
        shape="square"
        src="https://i.pravatar.cc/150?img=6"
        alt="User avatar"
      />
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=7"
          alt="John Doe"
        />
        <div>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>John Doe</div>
          <div style={{ fontSize: '14px', color: '#666' }}>john.doe@example.com</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Avatar size="sm" fallback="JD">JD</Avatar>
        <Avatar size="sm" fallback="AB">AB</Avatar>
        <Avatar size="sm" fallback="CD">CD</Avatar>
        <Avatar size="sm" fallback="EF">EF</Avatar>
        <span style={{ fontSize: '14px', color: '#666' }}>+5 more</span>
      </div>
    </div>
  ),
};
