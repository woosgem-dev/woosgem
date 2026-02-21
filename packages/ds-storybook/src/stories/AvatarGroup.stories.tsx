
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup, Avatar } from '@woosgem/ds-react';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of all avatars in the group',
      table: { category: 'Style' },
    },
    max: {
      control: 'number',
      description: 'Maximum number of avatars to display before showing overflow count',
      table: { category: 'Behavior' },
    },
    spacing: {
      control: 'select',
      options: ['tight', 'normal', 'loose'],
      description: 'Overlap spacing between avatars',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    max: 5,
    spacing: 'tight',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar fallback="AB">AB</Avatar>
      <Avatar fallback="CD">CD</Avatar>
      <Avatar fallback="EF">EF</Avatar>
      <Avatar fallback="GH">GH</Avatar>
    </AvatarGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: '#666', width: '24px' }}>{size}</span>
          <AvatarGroup size={size}>
            <Avatar fallback="AB">AB</Avatar>
            <Avatar fallback="CD">CD</Avatar>
            <Avatar fallback="EF">EF</Avatar>
            <Avatar fallback="GH">GH</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['tight', 'normal', 'loose'] as const).map((spacing) => (
        <div key={spacing} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: '#666', width: '56px' }}>{spacing}</span>
          <AvatarGroup spacing={spacing}>
            <Avatar fallback="AB">AB</Avatar>
            <Avatar fallback="CD">CD</Avatar>
            <Avatar fallback="EF">EF</Avatar>
            <Avatar fallback="GH">GH</Avatar>
            <Avatar fallback="IJ">IJ</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
};

export const MaxOverflow: Story = {
  name: 'Max Overflow',
  render: () => {
    const avatars = [
      { fallback: 'AB', img: 1 },
      { fallback: 'CD', img: 2 },
      { fallback: 'EF', img: 3 },
      { fallback: 'GH', img: 4 },
      { fallback: 'IJ', img: 5 },
      { fallback: 'KL', img: 6 },
      { fallback: 'MN', img: 7 },
      { fallback: 'OP', img: 8 },
    ];

    const max = 5;
    const visible = avatars.slice(0, max);
    const overflowCount = avatars.length - max;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '13px', color: '#666' }}>
          8 avatars, max={max} — showing {max} + overflow indicator
        </div>
        <AvatarGroup max={max}>
          {visible.map((avatar) => (
            <Avatar
              key={avatar.fallback}
              src={`https://i.pravatar.cc/150?img=${avatar.img}`}
              alt={avatar.fallback}
              fallback={avatar.fallback}
            />
          ))}
          {overflowCount > 0 && (
            <Avatar fallback={`+${overflowCount}`}>+{overflowCount}</Avatar>
          )}
        </AvatarGroup>
      </div>
    );
  },
};

export const WithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <AvatarGroup size="md">
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" fallback="U1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" fallback="U2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" fallback="U3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" fallback="U4" />
        <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" fallback="U5" />
      </AvatarGroup>
      <AvatarGroup size="lg" spacing="normal">
        <Avatar src="https://i.pravatar.cc/150?img=10" alt="User 10" fallback="JD" />
        <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 11" fallback="AS" />
        <Avatar src="https://i.pravatar.cc/150?img=12" alt="User 12" fallback="MK" />
      </AvatarGroup>
    </div>
  ),
};
