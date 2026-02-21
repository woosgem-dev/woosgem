import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, Button, Overlay } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Side from which the drawer slides in',
      table: { category: 'Style' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Width (left/right) or height (top/bottom) of the drawer',
      table: { category: 'Style' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Shared page background for all stories
const PageBackground = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    minHeight: '100vh',
    padding: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }}>
    {children}
  </div>
);

// Shared drawer content
const DrawerContent = ({
  title = 'Drawer',
  onClose,
}: {
  title?: string;
  onClose: () => void;
}) => (
  <div style={{ padding: '24px' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    }}>
      <h3 style={{ margin: 0, color: '#333' }}>{title}</h3>
      <button
        onClick={onClose}
        aria-label="Close drawer"
        style={{
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          color: '#666',
          padding: '4px 8px',
        }}
      >
        &times;
      </button>
    </div>
    <p style={{ color: '#666', lineHeight: 1.6 }}>
      This is the drawer content area. You can place any content here, such as
      navigation menus, forms, or detail panels.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    position: 'right',
    size: 'md',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Drawer Demo</h2>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Click the button to open a drawer from the right side.
          </p>
          <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        </div>

        {open && (
          <Drawer {...args}>
            <DrawerContent title="Right Drawer" onClose={() => setOpen(false)} />
          </Drawer>
        )}
      </PageBackground>
    );
  },
};

export const Positions: Story = {
  name: 'All Positions',
  render: () => {
    const [openPosition, setOpenPosition] = useState<
      'left' | 'right' | 'top' | 'bottom' | null
    >(null);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#333' }}>
            Drawer Positions
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {(['left', 'right', 'top', 'bottom'] as const).map((pos) => (
              <Button key={pos} onClick={() => setOpenPosition(pos)}>
                {pos.charAt(0).toUpperCase() + pos.slice(1)}
              </Button>
            ))}
          </div>
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#f5f5f5',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#666',
          }}>
            <strong>Position descriptions:</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
              <li>left: Slides in from the left edge</li>
              <li>right: Slides in from the right edge (default)</li>
              <li>top: Slides down from the top edge</li>
              <li>bottom: Slides up from the bottom edge</li>
            </ul>
          </div>
        </div>

        {openPosition && (
          <Drawer position={openPosition}>
            <DrawerContent
              title={`${openPosition.charAt(0).toUpperCase() + openPosition.slice(1)} Drawer`}
              onClose={() => setOpenPosition(null)}
            />
          </Drawer>
        )}
      </PageBackground>
    );
  },
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => {
    const [openSize, setOpenSize] = useState<
      'sm' | 'md' | 'lg' | 'full' | null
    >(null);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#333' }}>
            Drawer Sizes
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
              <Button key={size} onClick={() => setOpenSize(size)}>
                {size.toUpperCase()}
              </Button>
            ))}
          </div>
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#f5f5f5',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#666',
          }}>
            <strong>Size descriptions:</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
              <li>sm: Narrow panel for simple content</li>
              <li>md: Medium panel (default)</li>
              <li>lg: Wide panel for detailed content</li>
              <li>full: Takes up the entire viewport width</li>
            </ul>
          </div>
        </div>

        {openSize && (
          <Drawer position="right" size={openSize}>
            <DrawerContent
              title={`Size: ${openSize.toUpperCase()}`}
              onClose={() => setOpenSize(null)}
            />
          </Drawer>
        )}
      </PageBackground>
    );
  },
};

export const WithOverlay: Story = {
  name: 'With Overlay',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Drawer with Overlay</h2>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            The overlay dims the background. Clicking it closes the drawer.
          </p>
          <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        </div>

        {open && (
          <>
            <Overlay
              visible
              opacity="medium"
              onClick={() => setOpen(false)}
              style={{ cursor: 'pointer' }}
            />
            <Drawer position="right" size="md">
              <DrawerContent
                title="Overlay Drawer"
                onClose={() => setOpen(false)}
              />
            </Drawer>
          </>
        )}
      </PageBackground>
    );
  },
};

export const NavigationDrawer: Story = {
  name: 'Navigation Drawer',
  render: () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
      { label: 'Dashboard', icon: '\u25A0' },
      { label: 'Projects', icon: '\u25B6' },
      { label: 'Team', icon: '\u25CF' },
      { label: 'Settings', icon: '\u2699' },
      { label: 'Help', icon: '\u2753' },
    ];

    return (
      <PageBackground>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Navigation Drawer</h2>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            A left-positioned drawer with navigation menu items.
          </p>
          <Button onClick={() => setOpen(true)}>Open Navigation</Button>
        </div>

        {open && (
          <>
            <Overlay
              visible
              opacity="medium"
              onClick={() => setOpen(false)}
              style={{ cursor: 'pointer' }}
            />
            <Drawer position="left" size="sm">
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #eee',
                }}>
                  <h3 style={{ margin: 0, color: '#333' }}>Menu</h3>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation"
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: '#666',
                      padding: '4px 8px',
                    }}
                  >
                    &times;
                  </button>
                </div>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => setOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            padding: '12px 16px',
                            background: 'none',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '15px',
                            color: '#333',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f5f5f5';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'none';
                          }}
                        >
                          <span style={{ fontSize: '16px' }}>{item.icon}</span>
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Drawer>
          </>
        )}
      </PageBackground>
    );
  },
};
