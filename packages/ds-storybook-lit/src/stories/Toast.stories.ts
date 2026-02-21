import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Toast',
  component: 'wg-toast',
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
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'info',
    position: 'top-right',
    duration: 0,
    closable: true,
    visible: true,
  },
  render: (args) => html`
    <wg-toast
      variant=${args.variant}
      position=${args.position}
      .duration=${args.duration}
      ?closable=${args.closable}
      ?visible=${args.visible}
    >This is a toast notification.</wg-toast>
  `,
};

class ToastVariantsDemo extends LitElement {
  @state() visibleToasts = { info: true, success: true, warning: true, error: true };
  override createRenderRoot() { return this; }

  hideToast(key: string) {
    this.visibleToasts = { ...this.visibleToasts, [key]: false };
  }

  resetAll() {
    this.visibleToasts = { info: true, success: true, warning: true, error: true };
  }

  override render() {
    return html`
      <div style="position: relative; width: 400px; height: 600px">
        <div style="display: flex; flex-direction: column; gap: 12px">
          ${this.visibleToasts.info ? html`
            <wg-toast variant="info" position="top-right" .duration=${0} @close=${() => this.hideToast('info')}>
              Info: Check your email for verification.
            </wg-toast>
          ` : ''}
          ${this.visibleToasts.success ? html`
            <wg-toast variant="success" position="top-right" .duration=${0} @close=${() => this.hideToast('success')}>
              Success: Your changes have been saved.
            </wg-toast>
          ` : ''}
          ${this.visibleToasts.warning ? html`
            <wg-toast variant="warning" position="top-right" .duration=${0} @close=${() => this.hideToast('warning')}>
              Warning: This action cannot be undone.
            </wg-toast>
          ` : ''}
          ${this.visibleToasts.error ? html`
            <wg-toast variant="error" position="top-right" .duration=${0} @close=${() => this.hideToast('error')}>
              Error: Failed to connect to server.
            </wg-toast>
          ` : ''}
        </div>
        <button
          @click=${() => this.resetAll()}
          style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
        >
          Reset All Toasts
        </button>
      </div>
    `;
  }
}
customElements.define('toast-variants-demo', ToastVariantsDemo);

export const Variants: Story = {
  render: () => html`<toast-variants-demo></toast-variants-demo>`,
};

class ToastPositionsDemo extends LitElement {
  @state() visiblePositions: Record<string, boolean> = {
    'top-right': true,
    'top-left': true,
    'bottom-right': true,
    'bottom-left': true,
    'top-center': true,
    'bottom-center': true,
  };
  override createRenderRoot() { return this; }

  hidePosition(pos: string) {
    this.visiblePositions = { ...this.visiblePositions, [pos]: false };
  }

  resetAll() {
    this.visiblePositions = {
      'top-right': true,
      'top-left': true,
      'bottom-right': true,
      'bottom-left': true,
      'top-center': true,
      'bottom-center': true,
    };
  }

  override render() {
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'] as const;
    return html`
      <div style="position: relative; width: 600px; height: 400px; border: 2px dashed #ccc">
        ${positions.map((position) =>
          this.visiblePositions[position] ? html`
            <wg-toast variant="info" position=${position} .duration=${0} @close=${() => this.hidePosition(position)}>
              ${position}
            </wg-toast>
          ` : '',
        )}
        <div style="text-align: center; margin-top: 150px">
          <button
            @click=${() => this.resetAll()}
            style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
          >
            Reset All Positions
          </button>
        </div>
      </div>
    `;
  }
}
customElements.define('toast-positions-demo', ToastPositionsDemo);

export const Positions: Story = {
  name: 'All Positions',
  render: () => html`<toast-positions-demo></toast-positions-demo>`,
};

class ToastCloseDemo extends LitElement {
  @state() visible = true;
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="position: relative; width: 400px; height: 200px">
        ${this.visible ? html`
          <wg-toast
            variant="success"
            position="top-right"
            .duration=${0}
            closable
            @close=${() => { this.visible = false; }}
          >
            You can close this toast by clicking the close button.
          </wg-toast>
        ` : html`
          <button
            @click=${() => { this.visible = true; }}
            style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
          >
            Show Toast
          </button>
        `}
      </div>
    `;
  }
}
customElements.define('toast-close-demo', ToastCloseDemo);

export const WithClose: Story = {
  name: 'With Close Button',
  render: () => html`<toast-close-demo></toast-close-demo>`,
};

class ToastAutoDismissDemo extends LitElement {
  @state() visible = true;
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="position: relative; width: 400px; height: 200px">
        ${this.visible ? html`
          <wg-toast
            variant="info"
            position="top-center"
            .duration=${5000}
            closable
            @close=${() => { this.visible = false; }}
          >
            This toast will auto-dismiss in 5 seconds.
          </wg-toast>
        ` : html`
          <button
            @click=${() => { this.visible = true; }}
            style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
          >
            Show Toast (5s auto-dismiss)
          </button>
        `}
      </div>
    `;
  }
}
customElements.define('toast-autodismiss-demo', ToastAutoDismissDemo);

export const AutoDismiss: Story = {
  name: 'Auto-Dismiss with Duration',
  render: () => html`<toast-autodismiss-demo></toast-autodismiss-demo>`,
};

class ToastInteractiveDemo extends LitElement {
  @state() toasts: Array<{ id: number; message: string; variant: string; position: string }> = [];
  private nextId = 0;
  override createRenderRoot() { return this; }

  addToast(message: string, variant: string, position = 'top-right') {
    this.toasts = [...this.toasts, { id: this.nextId++, message, variant, position }];
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }

  clearAll() {
    this.toasts = [];
  }

  override render() {
    return html`
      <div style="position: relative; width: 600px; min-height: 400px">
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px">
          <button
            @click=${() => this.addToast('Info notification', 'info')}
            style="padding: 8px 16px; border: 1px solid #0066cc; background: #e6f3ff; border-radius: 4px; cursor: pointer"
          >Show Info</button>
          <button
            @click=${() => this.addToast('Operation successful!', 'success')}
            style="padding: 8px 16px; border: 1px solid #00aa44; background: #e6ffe6; border-radius: 4px; cursor: pointer"
          >Show Success</button>
          <button
            @click=${() => this.addToast('Warning: Please review', 'warning')}
            style="padding: 8px 16px; border: 1px solid #ff9900; background: #fff3e6; border-radius: 4px; cursor: pointer"
          >Show Warning</button>
          <button
            @click=${() => this.addToast('Error: Something went wrong', 'error')}
            style="padding: 8px 16px; border: 1px solid #cc0000; background: #ffe6e6; border-radius: 4px; cursor: pointer"
          >Show Error</button>
          <button
            @click=${() => this.addToast('Bottom center toast', 'info', 'bottom-center')}
            style="padding: 8px 16px; border: 1px solid #666; background: #f0f0f0; border-radius: 4px; cursor: pointer"
          >Show at Bottom</button>
          <button
            @click=${() => this.clearAll()}
            style="padding: 8px 16px; border: 1px solid #cc0000; background: #ffe6e6; border-radius: 4px; cursor: pointer"
          >Clear All</button>
        </div>
        <div style="padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 14px; color: #666">
          Active toasts: ${this.toasts.length} / 5 (max)
        </div>
        ${this.toasts.map((toast) => html`
          <wg-toast
            variant=${toast.variant}
            position=${toast.position}
            .duration=${5000}
            closable
            visible
            @close=${() => this.removeToast(toast.id)}
          >${toast.message}</wg-toast>
        `)}
      </div>
    `;
  }
}
customElements.define('toast-interactive-demo', ToastInteractiveDemo);

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => html`<toast-interactive-demo></toast-interactive-demo>`,
};

class ToastNonClosableDemo extends LitElement {
  @state() visible = true;
  override createRenderRoot() { return this; }
  override render() {
    return html`
      <div style="position: relative; width: 400px; height: 200px">
        ${this.visible ? html`
          <wg-toast
            variant="info"
            position="top-center"
            .duration=${5000}
            .closable=${false}
            @close=${() => { this.visible = false; }}
          >
            This toast has no close button. It will auto-dismiss in 5 seconds.
          </wg-toast>
        ` : html`
          <button
            @click=${() => { this.visible = true; }}
            style="margin-top: 16px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer"
          >
            Show Toast
          </button>
        `}
      </div>
    `;
  }
}
customElements.define('toast-nonclosable-demo', ToastNonClosableDemo);

export const WithoutClosable: Story = {
  name: 'Without Close Button',
  render: () => html`<toast-nonclosable-demo></toast-nonclosable-demo>`,
};
