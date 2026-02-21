import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '@woosgem/ds-lit';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'wg-modal',
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
type Story = StoryObj;

const pageBackground = (content: unknown) => html`
  <div style="min-height: 100vh; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
    ${content}
  </div>
`;

const demoContent = (title = 'Modal Demo') => html`
  <div style="max-width: 600px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)">
    <h2 style="margin-top: 0; color: #333">${title}</h2>
    <p style="color: #666; line-height: 1.6">This is the main page content. Click the button to open the modal.</p>
  </div>
`;

export const Default: Story = {
  args: {
    open: true,
    size: 'md',
    closable: true,
    title: 'Default Modal',
  },
  render: (args) => pageBackground(html`
    ${demoContent()}
    <wg-modal ?open=${args.open} size=${args.size} ?closable=${args.closable} title=${args.title}>
      <wg-modal-body>
        <p style="margin: 0">
          This is the default modal with basic content.
          You can close it by clicking the overlay, pressing ESC, or using the close button if a header is present.
        </p>
      </wg-modal-body>
    </wg-modal>
  `),
};

class ModalSizesDemo extends LitElement {
  @state() openSize: string | null = null;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      <div style="max-width: 800px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <h2 style="margin-top: 0; margin-bottom: 24px; color: #333">Modal Sizes</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 12px">
          ${(['sm', 'md', 'lg', 'xl', 'full'] as const).map(
            (size) => html`
              <button
                @click=${() => { this.openSize = size; }}
                style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer; text-transform: uppercase"
              >${size}</button>
            `,
          )}
        </div>
      </div>
      ${this.openSize ? html`
        <wg-modal open @close=${() => { this.openSize = null; }} size=${this.openSize} title="${this.openSize.toUpperCase()} Modal">
          <wg-modal-body>
            <h3 style="margin-top: 0">Size: ${this.openSize.toUpperCase()}</h3>
            <p>This modal is displayed with <code>size="${this.openSize}"</code>.</p>
            <button
              @click=${() => { this.openSize = null; }}
              style="margin-top: 16px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer"
            >Close Modal</button>
          </wg-modal-body>
        </wg-modal>
      ` : ''}
    `);
  }
}
customElements.define('modal-sizes-demo', ModalSizesDemo);

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => html`<modal-sizes-demo></modal-sizes-demo>`,
};

class ModalWithHeaderDemo extends LitElement {
  @state() open = false;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      ${demoContent('Modal with Header')}
      <div style="max-width: 600px; margin: 20px auto; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <button
          @click=${() => { this.open = true; }}
          style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
        >Open Modal</button>
      </div>
      <wg-modal ?open=${this.open} @close=${() => { this.open = false; }} title="Modal with Header">
        <wg-modal-header @close=${() => { this.open = false; }}>Confirmation</wg-modal-header>
        <wg-modal-body>
          <p>This modal includes a header with a title and close button.</p>
        </wg-modal-body>
      </wg-modal>
    `);
  }
}
customElements.define('modal-header-demo', ModalWithHeaderDemo);

export const WithHeader: Story = {
  name: 'With Header',
  render: () => html`<modal-header-demo></modal-header-demo>`,
};

class ModalFullStructureDemo extends LitElement {
  @state() open = false;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      ${demoContent('Complete Modal Structure')}
      <div style="max-width: 600px; margin: 20px auto; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <button
          @click=${() => { this.open = true; }}
          style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
        >Open Modal</button>
      </div>
      <wg-modal ?open=${this.open} @close=${() => { this.open = false; }} size="lg" title="Complete Modal">
        <wg-modal-header @close=${() => { this.open = false; }}>Delete Account</wg-modal-header>
        <wg-modal-body>
          <h4 style="margin-top: 0; color: #333">Are you sure?</h4>
          <p style="color: #666; line-height: 1.6">
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </p>
          <div style="margin-top: 16px; padding: 16px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px">
            <strong style="color: #856404">Warning:</strong>
            <p style="margin: 8px 0 0; color: #856404">All your projects, settings, and personal information will be lost.</p>
          </div>
        </wg-modal-body>
        <wg-modal-footer>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer"
          >Cancel</button>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 6px; cursor: pointer"
          >Delete Account</button>
        </wg-modal-footer>
      </wg-modal>
    `);
  }
}
customElements.define('modal-full-demo', ModalFullStructureDemo);

export const FullStructure: Story = {
  name: 'Full Structure (Header + Body + Footer)',
  render: () => html`<modal-full-demo></modal-full-demo>`,
};

class ModalWithFooterDemo extends LitElement {
  @state() open = false;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      ${demoContent('Modal with Footer')}
      <div style="max-width: 600px; margin: 20px auto; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <button
          @click=${() => { this.open = true; }}
          style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
        >Open Modal</button>
      </div>
      <wg-modal ?open=${this.open} @close=${() => { this.open = false; }} title="Modal with Footer">
        <wg-modal-body>
          <p>This modal includes a footer with action buttons.</p>
        </wg-modal-body>
        <wg-modal-footer>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer"
          >Cancel</button>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer"
          >Confirm</button>
        </wg-modal-footer>
      </wg-modal>
    `);
  }
}
customElements.define('modal-footer-demo', ModalWithFooterDemo);

export const WithFooter: Story = {
  name: 'With Footer',
  render: () => html`<modal-footer-demo></modal-footer-demo>`,
};

class ModalNonClosableDemo extends LitElement {
  @state() open = false;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      ${demoContent('Non-Closable Modal')}
      <div style="max-width: 600px; margin: 20px auto; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <button
          @click=${() => { this.open = true; }}
          style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
        >Open Modal</button>
      </div>
      <wg-modal ?open=${this.open} .closable=${false} title="Non-Closable Modal">
        <wg-modal-header .showClose=${false}>Important Action Required</wg-modal-header>
        <wg-modal-body>
          <p>This modal has <code>closable=false</code>. User must take explicit action.</p>
        </wg-modal-body>
        <wg-modal-footer>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer"
          >I Understand</button>
        </wg-modal-footer>
      </wg-modal>
    `);
  }
}
customElements.define('modal-nonclosable-demo', ModalNonClosableDemo);

export const NonClosable: Story = {
  name: 'Non-Closable (closable=false)',
  render: () => html`<modal-nonclosable-demo></modal-nonclosable-demo>`,
};

class ModalInteractiveDemo extends LitElement {
  @state() open = false;
  @state() size: string = 'md';
  @state() closable = true;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      <div style="max-width: 800px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <h2 style="margin-top: 0; color: #333">Interactive Modal Demo</h2>
        <div style="margin-top: 24px; padding: 24px; background: #f5f5f5; border-radius: 8px">
          <div style="margin-bottom: 16px">
            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333">Size:</label>
            <select
              .value=${this.size}
              @change=${(e: Event) => { this.size = (e.target as HTMLSelectElement).value; }}
              style="padding: 8px 12px; font-size: 14px; border: 1px solid #ddd; border-radius: 6px; background: white"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
              <option value="full">Full Screen</option>
            </select>
          </div>
          <button
            @click=${() => { this.open = true; }}
            style="margin-top: 8px; padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
          >Open Modal</button>
        </div>
      </div>
      <wg-modal ?open=${this.open} @close=${() => { this.open = false; }} size=${this.size} ?closable=${this.closable} title="Interactive Modal">
        <wg-modal-header @close=${() => { this.open = false; }}>Interactive Modal (${this.size})</wg-modal-header>
        <wg-modal-body>
          <h4 style="margin-top: 0; color: #333">Current Settings</h4>
          <ul style="color: #666; line-height: 1.8">
            <li>Size: <strong>${this.size}</strong></li>
            <li>Closable: <strong>${this.closable ? 'Yes' : 'No'}</strong></li>
          </ul>
        </wg-modal-body>
        <wg-modal-footer>
          <button
            @click=${() => { this.open = false; }}
            style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer"
          >Close</button>
        </wg-modal-footer>
      </wg-modal>
    `);
  }
}
customElements.define('modal-interactive-demo', ModalInteractiveDemo);

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => html`<modal-interactive-demo></modal-interactive-demo>`,
};

class ModalFooterAlignDemo extends LitElement {
  @state() openAlign: string | null = null;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      <div style="max-width: 800px; margin: 0 auto; padding: 32px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <h2 style="margin-top: 0; margin-bottom: 24px; color: #333">Footer Alignment</h2>
        <div style="display: flex; gap: 12px">
          ${(['start', 'center', 'end'] as const).map(
            (align) => html`
              <button
                @click=${() => { this.openAlign = align; }}
                style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer; text-transform: capitalize"
              >${align}</button>
            `,
          )}
        </div>
      </div>
      ${this.openAlign ? html`
        <wg-modal open @close=${() => { this.openAlign = null; }} title="Footer Alignment">
          <wg-modal-header @close=${() => { this.openAlign = null; }}>Footer Align: ${this.openAlign}</wg-modal-header>
          <wg-modal-body>
            <p>This modal's footer uses <code>align="${this.openAlign}"</code>.</p>
          </wg-modal-body>
          <wg-modal-footer align=${this.openAlign}>
            <button
              @click=${() => { this.openAlign = null; }}
              style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer"
            >Cancel</button>
            <button
              @click=${() => { this.openAlign = null; }}
              style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer"
            >Confirm</button>
          </wg-modal-footer>
        </wg-modal>
      ` : ''}
    `);
  }
}
customElements.define('modal-footer-align-demo', ModalFooterAlignDemo);

export const FooterAlignment: Story = {
  name: 'Footer Alignment Options',
  render: () => html`<modal-footer-align-demo></modal-footer-align-demo>`,
};

class ModalScrollableDemo extends LitElement {
  @state() open = false;
  override createRenderRoot() { return this; }
  override render() {
    return pageBackground(html`
      ${demoContent('Scrollable Modal Body')}
      <div style="max-width: 600px; margin: 20px auto; padding: 24px; background: rgba(255, 255, 255, 0.95); border-radius: 12px">
        <button
          @click=${() => { this.open = true; }}
          style="padding: 12px 24px; font-size: 16px; font-weight: 600; color: white; background: #667eea; border: none; border-radius: 8px; cursor: pointer"
        >Open Modal</button>
      </div>
      <wg-modal ?open=${this.open} @close=${() => { this.open = false; }} size="md" title="Terms and Conditions">
        <wg-modal-header @close=${() => { this.open = false; }}>Terms and Conditions</wg-modal-header>
        <wg-modal-body ?scrollable=${true}>
          <h3 style="margin-top: 0">1. Introduction</h3>
          <p style="line-height: 1.6; color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3>2. User Agreement</h3>
          <p style="line-height: 1.6; color: #666">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <h3>3. Privacy Policy</h3>
          <p style="line-height: 1.6; color: #666">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          <h3>4. Data Collection</h3>
          <p style="line-height: 1.6; color: #666">Excepteur sint occaecat cupidatat non proident.</p>
          <h3>5. Cookies</h3>
          <p style="line-height: 1.6; color: #666">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <h3>6. Third-Party Services</h3>
          <p style="line-height: 1.6; color: #666">Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
          <h3>7. Termination</h3>
          <p style="line-height: 1.6; color: #666">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
          <h3>8. Changes to Terms</h3>
          <p style="line-height: 1.6; color: #666">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
        </wg-modal-body>
        <wg-modal-footer>
          <button @click=${() => { this.open = false; }} style="padding: 10px 20px; margin-right: 8px; background: transparent; color: #667eea; border: 1px solid #667eea; border-radius: 6px; cursor: pointer">Decline</button>
          <button @click=${() => { this.open = false; }} style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer">Accept</button>
        </wg-modal-footer>
      </wg-modal>
    `);
  }
}
customElements.define('modal-scrollable-demo', ModalScrollableDemo);

export const ScrollableBody: Story = {
  name: 'Scrollable Body',
  render: () => html`<modal-scrollable-demo></modal-scrollable-demo>`,
};
