import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer, useToast } from '@woosgem/ds-react';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual variant indicating the type of message',
      table: { category: 'Style' },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Position where toast appears on screen',
      table: { category: 'Layout' },
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds (0 = no auto-dismiss)',
      table: { category: 'Behavior' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show close button',
      table: { category: 'Behavior' },
    },
    visible: {
      control: 'boolean',
      description: 'Whether toast is visible',
      table: { category: 'State' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'info',
    position: 'top-right',
    duration: 0, // Disable auto-dismiss for interactive demo
    closable: true,
    visible: true,
    children: 'This is a toast notification.',
  },
};

export const Variants: Story = {
  render: () => {
    const [visibleToasts, setVisibleToasts] = useState({
      info: true,
      success: true,
      warning: true,
      error: true,
    });

    return (
      <div style={{ position: 'relative', width: '400px', height: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {visibleToasts.info && (
            <Toast
              variant="info"
              position="top-right"
              duration={0}
              onClose={() => setVisibleToasts(prev => ({ ...prev, info: false }))}
            >
              Info: Check your email for verification.
            </Toast>
          )}
          {visibleToasts.success && (
            <Toast
              variant="success"
              position="top-right"
              duration={0}
              onClose={() => setVisibleToasts(prev => ({ ...prev, success: false }))}
            >
              Success: Your changes have been saved.
            </Toast>
          )}
          {visibleToasts.warning && (
            <Toast
              variant="warning"
              position="top-right"
              duration={0}
              onClose={() => setVisibleToasts(prev => ({ ...prev, warning: false }))}
            >
              Warning: This action cannot be undone.
            </Toast>
          )}
          {visibleToasts.error && (
            <Toast
              variant="error"
              position="top-right"
              duration={0}
              onClose={() => setVisibleToasts(prev => ({ ...prev, error: false }))}
            >
              Error: Failed to connect to server.
            </Toast>
          )}
        </div>
        <button
          onClick={() => setVisibleToasts({ info: true, success: true, warning: true, error: true })}
          style={{
            marginTop: '16px',
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset All Toasts
        </button>
      </div>
    );
  },
};

export const Positions: Story = {
  name: 'All Positions',
  render: () => {
    const positions = [
      'top-right',
      'top-left',
      'bottom-right',
      'bottom-left',
      'top-center',
      'bottom-center',
    ] as const;

    const [visiblePositions, setVisiblePositions] = useState(
      positions.reduce((acc, pos) => ({ ...acc, [pos]: true }), {} as Record<string, boolean>)
    );

    return (
      <div style={{ position: 'relative', width: '600px', height: '400px', border: '2px dashed #ccc' }}>
        {positions.map((position) =>
          visiblePositions[position] ? (
            <Toast
              key={position}
              variant="info"
              position={position}
              duration={0}
              onClose={() => setVisiblePositions(prev => ({ ...prev, [position]: false }))}
            >
              {position}
            </Toast>
          ) : null
        )}
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
          <button
            onClick={() =>
              setVisiblePositions(positions.reduce((acc, pos) => ({ ...acc, [pos]: true }), {}))
            }
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset All Positions
          </button>
        </div>
      </div>
    );
  },
};

export const WithClose: Story = {
  name: 'With Close Button',
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <div style={{ position: 'relative', width: '400px', height: '200px' }}>
        {visible && (
          <Toast
            variant="success"
            position="top-right"
            duration={0}
            closable
            onClose={() => setVisible(false)}
          >
            You can close this toast by clicking the close button.
          </Toast>
        )}
        {!visible && (
          <button
            onClick={() => setVisible(true)}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show Toast
          </button>
        )}
      </div>
    );
  },
};

export const AutoDismiss: Story = {
  name: 'Auto-Dismiss with Duration',
  render: () => {
    const [visible, setVisible] = useState(true);
    const [countdown, setCountdown] = useState(5);

    const handleShow = () => {
      setVisible(true);
      setCountdown(5);

      // Countdown timer for visual feedback
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    return (
      <div style={{ position: 'relative', width: '400px', height: '200px' }}>
        {visible && (
          <Toast
            variant="info"
            position="top-center"
            duration={5000}
            closable
            onClose={() => {
              setVisible(false);
              setCountdown(0);
            }}
          >
            This toast will auto-dismiss in {countdown} seconds.
          </Toast>
        )}
        {!visible && (
          <button
            onClick={handleShow}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show Toast (5s auto-dismiss)
          </button>
        )}
      </div>
    );
  },
};

export const Interactive: Story = {
  name: 'Interactive with useToast Hook',
  render: () => {
    const ToastDemo = () => {
      const { toasts, addToast, removeToast, clearAll } = useToast({
        maxToasts: 5,
        defaultDuration: 5000,
        defaultPosition: 'top-right',
      });

      return (
        <div style={{ position: 'relative', width: '600px', minHeight: '400px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <button
              onClick={() => addToast('Info notification', { variant: 'info' })}
              style={{
                padding: '8px 16px',
                border: '1px solid #0066cc',
                background: '#e6f3ff',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Show Info
            </button>
            <button
              onClick={() => addToast('Operation successful!', { variant: 'success' })}
              style={{
                padding: '8px 16px',
                border: '1px solid #00aa44',
                background: '#e6ffe6',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Show Success
            </button>
            <button
              onClick={() => addToast('Warning: Please review', { variant: 'warning' })}
              style={{
                padding: '8px 16px',
                border: '1px solid #ff9900',
                background: '#fff3e6',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Show Warning
            </button>
            <button
              onClick={() => addToast('Error: Something went wrong', { variant: 'error' })}
              style={{
                padding: '8px 16px',
                border: '1px solid #cc0000',
                background: '#ffe6e6',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Show Error
            </button>
            <button
              onClick={() =>
                addToast('Bottom center toast', {
                  variant: 'info',
                  position: 'bottom-center',
                  duration: 3000,
                })
              }
              style={{
                padding: '8px 16px',
                border: '1px solid #666',
                background: '#f0f0f0',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Show at Bottom
            </button>
            <button
              onClick={() =>
                addToast('No auto-dismiss', { variant: 'warning', duration: 0 })
              }
              style={{
                padding: '8px 16px',
                border: '1px solid #ff9900',
                background: '#fff3e6',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              No Auto-Dismiss
            </button>
            <button
              onClick={clearAll}
              style={{
                padding: '8px 16px',
                border: '1px solid #cc0000',
                background: '#ffe6e6',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Clear All
            </button>
          </div>
          <div
            style={{
              padding: '12px',
              background: '#f5f5f5',
              borderRadius: '4px',
              fontSize: '14px',
              color: '#666',
            }}
          >
            Active toasts: {toasts.length} / 5 (max)
          </div>
          <ToastContainer toasts={toasts} onDismiss={removeToast} />
        </div>
      );
    };

    return <ToastDemo />;
  },
};

export const MultipleToasts: Story = {
  name: 'Multiple Toasts in Container',
  render: () => {
    const ToastContainerDemo = () => {
      const { toasts, addToast, removeToast } = useToast({
        maxToasts: 3,
        defaultDuration: 0, // No auto-dismiss for demo
      });

      const addMultiple = () => {
        addToast('First toast', { variant: 'info' });
        setTimeout(() => addToast('Second toast', { variant: 'success' }), 200);
        setTimeout(() => addToast('Third toast', { variant: 'warning' }), 400);
      };

      return (
        <div style={{ position: 'relative', width: '500px', minHeight: '400px' }}>
          <button
            onClick={addMultiple}
            style={{
              padding: '8px 16px',
              border: '1px solid #0066cc',
              background: '#e6f3ff',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '16px',
            }}
          >
            Add 3 Toasts
          </button>
          <ToastContainer toasts={toasts} onDismiss={removeToast} position="top-right" />
        </div>
      );
    };

    return <ToastContainerDemo />;
  },
};

export const WithoutClosable: Story = {
  name: 'Without Close Button',
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <div style={{ position: 'relative', width: '400px', height: '200px' }}>
        {visible && (
          <Toast
            variant="info"
            position="top-center"
            duration={5000}
            closable={false}
            onClose={() => setVisible(false)}
          >
            This toast has no close button. It will auto-dismiss in 5 seconds.
          </Toast>
        )}
        {!visible && (
          <button
            onClick={() => setVisible(true)}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show Toast
          </button>
        )}
      </div>
    );
  },
};
