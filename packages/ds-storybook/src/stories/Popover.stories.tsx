import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverArrow, Button } from '@woosgem/ds-react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position relative to the trigger element',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the popover',
      table: { category: 'Style' },
    },
    variant: {
      control: 'select',
      options: ['default', 'tooltip'],
      description: 'Visual variant of the popover',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const popoverPositionStyles: Record<string, React.CSSProperties> = {
  top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
  bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
  left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
  right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' },
};

export const Default: Story = {
  args: {
    position: 'bottom',
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button>Trigger</Button>
      <Popover
        {...args}
        style={{ position: 'absolute', ...popoverPositionStyles[args.position || 'bottom'] }}
      >
        <div style={{ padding: '12px' }}>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>Popover Title</div>
          <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
            This is a popover with some descriptive content.
          </div>
        </div>
      </Popover>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '80px',
      padding: '80px',
    }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((pos) => (
        <div key={pos} style={{ position: 'relative', display: 'inline-block', justifySelf: 'center' }}>
          <Button>{pos}</Button>
          <Popover
            position={pos}
            style={{ position: 'absolute', whiteSpace: 'nowrap', ...popoverPositionStyles[pos] }}
          >
            <div style={{ padding: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Position: {pos}</div>
              <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
                Popover on the {pos}
              </div>
            </div>
          </Popover>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', padding: '20px 0 120px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} style={{ position: 'relative', display: 'inline-block' }}>
          <Button>{size}</Button>
          <Popover
            size={size}
            position="bottom"
            style={{ position: 'absolute', ...popoverPositionStyles.bottom }}
          >
            <div style={{ padding: '12px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Size: {size}</div>
              <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
                Content in a {size} popover.
              </div>
            </div>
          </Popover>
        </div>
      ))}
    </div>
  ),
};

export const WithArrow: Story = {
  name: 'With Arrow',
  render: () => (
    <div style={{ display: 'flex', gap: '80px', alignItems: 'center', padding: '80px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button>With Arrow</Button>
        <Popover
          position="bottom"
          style={{ position: 'absolute', ...popoverPositionStyles.bottom }}
        >
          <PopoverArrow />
          <div style={{ padding: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Arrow Popover</div>
            <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
              This popover includes an arrow pointing to its trigger.
            </div>
          </div>
        </Popover>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button>Without Arrow</Button>
        <Popover
          position="bottom"
          style={{ position: 'absolute', ...popoverPositionStyles.bottom }}
        >
          <div style={{ padding: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>No Arrow</div>
            <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
              This popover has no arrow.
            </div>
          </div>
        </Popover>
      </div>
    </div>
  ),
};

export const TooltipVariant: Story = {
  name: 'Tooltip Variant',
  render: () => (
    <div style={{ display: 'flex', gap: '80px', alignItems: 'center', padding: '80px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button>Default</Button>
        <Popover
          variant="default"
          position="top"
          style={{ position: 'absolute', ...popoverPositionStyles.top }}
        >
          <div style={{ padding: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Default Variant</div>
            <div style={{ fontSize: '13px' }}>Standard popover styling.</div>
          </div>
        </Popover>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button>Tooltip</Button>
        <Popover
          variant="tooltip"
          position="top"
          style={{ position: 'absolute', ...popoverPositionStyles.top }}
        >
          <div style={{ padding: '8px 12px' }}>
            <div style={{ fontSize: '13px' }}>Compact tooltip-style popover</div>
          </div>
        </Popover>
      </div>
    </div>
  ),
};

const InteractivePopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close Popover' : 'Open Popover'}
      </Button>
      {open && (
        <Popover
          position="bottom"
          style={{ position: 'absolute', ...popoverPositionStyles.bottom }}
        >
          <PopoverArrow />
          <div style={{ padding: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Interactive Popover</div>
            <div style={{ fontSize: '13px', color: 'var(--wg-color-text-muted, #666)' }}>
              Click the button again to toggle this popover.
            </div>
          </div>
        </Popover>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractivePopover />,
};

const UserProfilePopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          background: 'var(--wg-color-primary, #667eea)',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
        aria-label="User profile"
      >
        JD
      </button>
      {open && (
        <Popover
          position="bottom"
          size="md"
          style={{ position: 'absolute', ...popoverPositionStyles.bottom, left: '50%', transform: 'translateX(-50%)' }}
        >
          <PopoverArrow />
          <div style={{ padding: '16px', minWidth: '220px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--wg-color-primary, #667eea)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 600,
              }}>
                JD
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--wg-color-text, #111)' }}>
                  Jane Doe
                </div>
                <div style={{ fontSize: '12px', color: 'var(--wg-color-text-muted, #666)' }}>
                  jane.doe@example.com
                </div>
              </div>
            </div>
            <div style={{
              borderTop: '1px solid var(--wg-color-border, #e5e5e5)',
              paddingTop: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '8px 12px',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--wg-color-text, #111)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--wg-color-background-muted, #f5f5f5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
              >
                View Profile
              </button>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '8px 12px',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--wg-color-text, #111)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--wg-color-background-muted, #f5f5f5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
              >
                Settings
              </button>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '8px 12px',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--wg-color-danger, #dc3545)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--wg-color-background-muted, #f5f5f5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
                onClick={() => setOpen(false)}
              >
                Sign Out
              </button>
            </div>
          </div>
        </Popover>
      )}
    </div>
  );
};

export const UserProfile: Story = {
  name: 'User Profile',
  render: () => <UserProfilePopover />,
};
