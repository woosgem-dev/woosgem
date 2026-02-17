import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'wg-alert',
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
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'subtle',
    status: 'info',
  },
  render: (args) => html`
    <wg-alert variant=${args.variant} status=${args.status}>
      This is an informational message.
    </wg-alert>
  `,
};

export const Statuses: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert status="info">This is an informational message.</wg-alert>
      <wg-alert status="success">Operation completed successfully!</wg-alert>
      <wg-alert status="warning">Please review before proceeding.</wg-alert>
      <wg-alert status="error">An error occurred. Please try again.</wg-alert>
    </div>
  `,
};

export const FilledVariant: Story = {
  name: 'Filled Variant',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert variant="filled" status="info">Info: Check your email for verification.</wg-alert>
      <wg-alert variant="filled" status="success">Success: Your changes have been saved.</wg-alert>
      <wg-alert variant="filled" status="warning">Warning: This action cannot be undone.</wg-alert>
      <wg-alert variant="filled" status="error">Error: Failed to connect to server.</wg-alert>
    </div>
  `,
};

export const OutlineVariant: Story = {
  name: 'Outline Variant',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert variant="outline" status="info">Info: New features available.</wg-alert>
      <wg-alert variant="outline" status="success">Success: Account verified.</wg-alert>
      <wg-alert variant="outline" status="warning">Warning: Session expires soon.</wg-alert>
      <wg-alert variant="outline" status="error">Error: Invalid credentials.</wg-alert>
    </div>
  `,
};

export const SubtleVariant: Story = {
  name: 'Subtle Variant',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert variant="subtle" status="info">Info: Tip for better experience.</wg-alert>
      <wg-alert variant="subtle" status="success">Success: Profile updated.</wg-alert>
      <wg-alert variant="subtle" status="warning">Warning: Limited storage remaining.</wg-alert>
      <wg-alert variant="subtle" status="error">Error: Payment failed.</wg-alert>
    </div>
  `,
};

export const WithTitle: Story = {
  name: 'With Title and Description',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert status="info">
        <div class="alert-content">
          <div class="alert-title">New Update Available</div>
          <div class="alert-description">
            A new version of the application is available. Please update to get the latest features.
          </div>
        </div>
      </wg-alert>
      <wg-alert variant="filled" status="error">
        <div class="alert-content">
          <div class="alert-title">Connection Error</div>
          <div class="alert-description">
            Unable to connect to the server. Please check your internet connection and try again.
          </div>
        </div>
      </wg-alert>
    </div>
  `,
};

export const Closable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px">
      <wg-alert status="info" ?closable=${true}>
        This alert can be dismissed by clicking the close button.
      </wg-alert>
      <wg-alert variant="filled" status="success" ?closable=${true}>
        Your settings have been saved successfully.
      </wg-alert>
    </div>
  `,
};

export const AllVariants: Story = {
  name: 'All Variants Overview',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px">
      ${(['info', 'success', 'warning', 'error'] as const).map(
        (status) => html`
          <div>
            <h3 style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: var(--wg-color-text, #111); text-transform: capitalize">
              ${status}
            </h3>
            <div style="display: flex; flex-direction: column; gap: 8px">
              <wg-alert variant="subtle" status=${status}>Subtle: ${status} message</wg-alert>
              <wg-alert variant="outline" status=${status}>Outline: ${status} message</wg-alert>
              <wg-alert variant="filled" status=${status}>Filled: ${status} message</wg-alert>
            </div>
          </div>
        `,
      )}
    </div>
  `,
};
