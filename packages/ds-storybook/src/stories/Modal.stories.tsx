import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: { category: 'State' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size',
      table: { category: 'Style' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the modal can be closed via close button or ESC key',
      table: { category: 'Behavior' },
    },
    title: {
      control: 'text',
      description: 'Modal title for aria-labelledby',
      table: { category: 'Accessibility' },
    },
    disableFocusTrap: {
      control: 'boolean',
      description: 'Disable focus trap',
      table: { category: 'Behavior' },
    },
    disableEscapeKey: {
      control: 'boolean',
      description: 'Disable ESC key close',
      table: { category: 'Behavior' },
    },
    disableOverlayClick: {
      control: 'boolean',
      description: 'Disable overlay click close',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for page background
const PageBackground = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    minHeight: '100vh',
    padding: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }}>
    {children}
  </div>
);

// Helper component for demo content
const DemoContent = ({ title = 'Modal Demo' }: { title?: string }) => (
  <div style={{
    maxWidth: '600px',
    margin: '0 auto',
    padding: '32px',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  }}>
    <h2 style={{ marginTop: 0, color: '#333' }}>{title}</h2>
    <p style={{ color: '#666', lineHeight: 1.6 }}>
      This is the main page content. Click the button to open the modal.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    open: true,
    size: 'md',
    closable: true,
    title: 'Default Modal',
  },
  render: (args) => (
    <PageBackground>
      <DemoContent />
      <Modal {...args}>
        <ModalBody>
          <p style={{ margin: 0 }}>
            This is the default modal with basic content.
            You can close it by clicking the overlay, pressing ESC, or using the close button if a header is present.
          </p>
        </ModalBody>
      </Modal>
    </PageBackground>
  ),
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => {
    const [openSize, setOpenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#333' }}>Modal Sizes</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setOpenSize(size)}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'white',
                  background: '#667eea',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {size}
              </button>
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
              <li>sm: Small modal (400px)</li>
              <li>md: Medium modal (600px)</li>
              <li>lg: Large modal (800px)</li>
              <li>xl: Extra large modal (1000px)</li>
              <li>full: Full-screen modal</li>
            </ul>
          </div>
        </div>

        {openSize && (
          <Modal open onClose={() => setOpenSize(null)} size={openSize} title={`${openSize.toUpperCase()} Modal`}>
            <ModalBody>
              <h3 style={{ marginTop: 0 }}>Size: {openSize.toUpperCase()}</h3>
              <p>
                This modal is displayed with <code>size="{openSize}"</code>.
              </p>
              <p style={{ color: '#666' }}>
                Click outside the modal, press ESC, or click the button below to close.
              </p>
              <button
                onClick={() => setOpenSize(null)}
                style={{
                  marginTop: '16px',
                  padding: '10px 20px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Close Modal
              </button>
            </ModalBody>
          </Modal>
        )}
      </PageBackground>
    );
  },
};

export const WithHeader: Story = {
  name: 'With Header',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <DemoContent title="Modal with Header" />
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Open Modal
          </button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} title="Modal with Header">
          <ModalHeader onClose={() => setOpen(false)}>
            Confirmation
          </ModalHeader>
          <ModalBody>
            <p>
              This modal includes a header with a title and close button.
              The close button has an aria-label for accessibility.
            </p>
          </ModalBody>
        </Modal>
      </PageBackground>
    );
  },
};

export const WithFooter: Story = {
  name: 'With Footer',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <DemoContent title="Modal with Footer" />
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Open Modal
          </button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} title="Modal with Footer">
          <ModalBody>
            <p>
              This modal includes a footer with action buttons.
              The footer alignment defaults to "end" (right-aligned).
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                marginRight: '8px',
                background: 'transparent',
                color: '#667eea',
                border: '1px solid #667eea',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      </PageBackground>
    );
  },
};

export const FullStructure: Story = {
  name: 'Full Structure (Header + Body + Footer)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <DemoContent title="Complete Modal Structure" />
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Open Modal
          </button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} size="lg" title="Complete Modal">
          <ModalHeader onClose={() => setOpen(false)}>
            Delete Account
          </ModalHeader>
          <ModalBody>
            <h4 style={{ marginTop: 0, color: '#333' }}>Are you sure?</h4>
            <p style={{ color: '#666', lineHeight: 1.6 }}>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </p>
            <div style={{
              marginTop: '16px',
              padding: '16px',
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
            }}>
              <strong style={{ color: '#856404' }}>Warning:</strong>
              <p style={{ margin: '8px 0 0', color: '#856404' }}>
                All your projects, settings, and personal information will be lost.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                marginRight: '8px',
                background: 'transparent',
                color: '#667eea',
                border: '1px solid #667eea',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Delete Account
            </button>
          </ModalFooter>
        </Modal>
      </PageBackground>
    );
  },
};

export const NonClosable: Story = {
  name: 'Non-Closable (closable=false)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <DemoContent title="Non-Closable Modal" />
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Open Modal
          </button>
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            This modal cannot be closed by clicking the overlay or pressing ESC.
            You must use the explicit action button.
          </p>
        </div>

        <Modal open={open} closable={false} title="Non-Closable Modal">
          <ModalHeader showClose={false}>
            Important Action Required
          </ModalHeader>
          <ModalBody>
            <p>
              This modal has <code>closable=false</code>, which means:
            </p>
            <ul style={{ color: '#666', lineHeight: 1.8 }}>
              <li>ESC key does not close the modal</li>
              <li>Clicking the overlay does not close the modal</li>
              <li>Close button is hidden in the header</li>
              <li>User must take explicit action</li>
            </ul>
            <p style={{ marginTop: '16px', color: '#333' }}>
              This is useful for critical actions that require user acknowledgment.
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              I Understand
            </button>
          </ModalFooter>
        </Modal>
      </PageBackground>
    );
  },
};

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
    const [closable, setClosable] = useState(true);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Interactive Modal Demo</h2>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Configure the modal settings below and click "Open Modal" to see the result.
          </p>

          <div style={{
            marginTop: '24px',
            padding: '24px',
            background: '#f5f5f5',
            borderRadius: '8px',
          }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#333' }}>
                Size:
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as typeof size)}
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  background: 'white',
                }}
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
                <option value="full">Full Screen</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={closable}
                  onChange={(e) => setClosable(e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                <span style={{ fontWeight: 600, color: '#333' }}>Closable</span>
              </label>
              <p style={{ margin: '4px 0 0 24px', fontSize: '12px', color: '#666' }}>
                Allow closing via ESC key, overlay click, or close button
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              style={{
                marginTop: '8px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 600,
                color: 'white',
                background: '#667eea',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Open Modal
            </button>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '16px',
            background: '#e7f3ff',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#004085',
          }}>
            <strong>Current configuration:</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
              <li>Size: {size}</li>
              <li>Closable: {closable ? 'Yes' : 'No'}</li>
            </ul>
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} size={size} closable={closable} title="Interactive Modal">
          <ModalHeader onClose={() => setOpen(false)} showClose={closable}>
            Interactive Modal ({size})
          </ModalHeader>
          <ModalBody>
            <h4 style={{ marginTop: 0, color: '#333' }}>Current Settings</h4>
            <ul style={{ color: '#666', lineHeight: 1.8 }}>
              <li>Size: <strong>{size}</strong></li>
              <li>Closable: <strong>{closable ? 'Yes' : 'No'}</strong></li>
            </ul>
            <p style={{ marginTop: '16px', color: '#666' }}>
              {closable
                ? 'You can close this modal by clicking outside, pressing ESC, or using the close button.'
                : 'You must use the button below to close this modal.'}
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      </PageBackground>
    );
  },
};

export const FooterAlignment: Story = {
  name: 'Footer Alignment Options',
  render: () => {
    const [openAlign, setOpenAlign] = useState<'start' | 'center' | 'end' | null>(null);

    return (
      <PageBackground>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '24px', color: '#333' }}>Footer Alignment</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            {(['start', 'center', 'end'] as const).map((align) => (
              <button
                key={align}
                onClick={() => setOpenAlign(align)}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'white',
                  background: '#667eea',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {align}
              </button>
            ))}
          </div>
        </div>

        {openAlign && (
          <Modal open onClose={() => setOpenAlign(null)} title="Footer Alignment">
            <ModalHeader onClose={() => setOpenAlign(null)}>
              Footer Align: {openAlign}
            </ModalHeader>
            <ModalBody>
              <p>
                This modal's footer uses <code>align="{openAlign}"</code>.
              </p>
            </ModalBody>
            <ModalFooter align={openAlign}>
              <button
                onClick={() => setOpenAlign(null)}
                style={{
                  padding: '10px 20px',
                  marginRight: '8px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '1px solid #667eea',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenAlign(null)}
                style={{
                  padding: '10px 20px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Confirm
              </button>
            </ModalFooter>
          </Modal>
        )}
      </PageBackground>
    );
  },
};

export const ScrollableBody: Story = {
  name: 'Scrollable Body',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <PageBackground>
        <DemoContent title="Scrollable Modal Body" />
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
        }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              background: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Open Modal
          </button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} size="md" title="Terms and Conditions">
          <ModalHeader onClose={() => setOpen(false)}>
            Terms and Conditions
          </ModalHeader>
          <ModalBody scrollable>
            <h3 style={{ marginTop: 0 }}>1. Introduction</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>2. User Agreement</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>3. Privacy Policy</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3>4. Data Collection</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>5. Cookies</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <h3>6. Third-Party Services</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
            </p>
            <h3>7. Termination</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <h3>8. Changes to Terms</h3>
            <p style={{ lineHeight: 1.6, color: '#666' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                marginRight: '8px',
                background: 'transparent',
                color: '#667eea',
                border: '1px solid #667eea',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Decline
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Accept
            </button>
          </ModalFooter>
        </Modal>
      </PageBackground>
    );
  },
};
