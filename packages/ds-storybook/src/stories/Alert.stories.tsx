import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@woosgem/ds-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'subtle'],
      description: 'Visual variant of the alert',
      table: { category: 'Style' },
    },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Status type of the alert',
      table: { category: 'Style' },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be closed',
      table: { category: 'Behavior' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'subtle',
    status: 'info',
    children: 'This is an informational message.',
  },
};

export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert status="info">This is an informational message.</Alert>
      <Alert status="success">Operation completed successfully!</Alert>
      <Alert status="warning">Please review before proceeding.</Alert>
      <Alert status="error">An error occurred. Please try again.</Alert>
    </div>
  ),
};

export const FilledVariant: Story = {
  name: 'Filled Variant',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert variant="filled" status="info">Info: Check your email for verification.</Alert>
      <Alert variant="filled" status="success">Success: Your changes have been saved.</Alert>
      <Alert variant="filled" status="warning">Warning: This action cannot be undone.</Alert>
      <Alert variant="filled" status="error">Error: Failed to connect to server.</Alert>
    </div>
  ),
};

export const OutlineVariant: Story = {
  name: 'Outline Variant',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert variant="outline" status="info">Info: New features available.</Alert>
      <Alert variant="outline" status="success">Success: Account verified.</Alert>
      <Alert variant="outline" status="warning">Warning: Session expires soon.</Alert>
      <Alert variant="outline" status="error">Error: Invalid credentials.</Alert>
    </div>
  ),
};

export const SubtleVariant: Story = {
  name: 'Subtle Variant',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert variant="subtle" status="info">Info: Tip for better experience.</Alert>
      <Alert variant="subtle" status="success">Success: Profile updated.</Alert>
      <Alert variant="subtle" status="warning">Warning: Limited storage remaining.</Alert>
      <Alert variant="subtle" status="error">Error: Payment failed.</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  name: 'With Title and Description',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert status="info">
        <div className="alert-content">
          <div className="alert-title">New Update Available</div>
          <div className="alert-description">
            A new version of the application is available. Please update to get the latest features.
          </div>
        </div>
      </Alert>
      <Alert variant="filled" status="error">
        <div className="alert-content">
          <div className="alert-title">Connection Error</div>
          <div className="alert-description">
            Unable to connect to the server. Please check your internet connection and try again.
          </div>
        </div>
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
      <Alert status="info" closable>
        This alert can be dismissed by clicking the close button.
      </Alert>
      <Alert variant="filled" status="success" closable>
        Your settings have been saved successfully.
      </Alert>
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'All Variants Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      {(['info', 'success', 'warning', 'error'] as const).map((status) => (
        <div key={status}>
          <h3 style={{
            margin: '0 0 12px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--wg-color-text, #111)',
            textTransform: 'capitalize'
          }}>
            {status}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Alert variant="subtle" status={status}>Subtle: {status} message</Alert>
            <Alert variant="outline" status={status}>Outline: {status} message</Alert>
            <Alert variant="filled" status={status}>Filled: {status} message</Alert>
          </div>
        </div>
      ))}
    </div>
  ),
};
