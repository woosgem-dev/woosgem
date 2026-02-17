import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  Modal as ModalCore,
  ModalHeader as ModalHeaderCore,
  ModalBody as ModalBodyCore,
  ModalFooter as ModalFooterCore,
} from '@woosgem-dev/core';
import {
  createScrollLock,
  onEscapeKey,
  createFocusTrap,
  setInitialFocus,
} from '@woosgem-dev/headless';
import { applyAttrsToElement, emitEvent } from './_internal/createComponent';

/**
 * Modal - Lit Web Component
 *
 * @element wg-modal
 *
 * @fires close - When modal requests to close (ESC key, overlay click, close button)
 *
 * @example
 * ```html
 * <wg-modal open size="md">
 *   <wg-modal-header>Title</wg-modal-header>
 *   <wg-modal-body>Content</wg-modal-body>
 *   <wg-modal-footer>
 *     <wg-button variant="ghost" onclick="closeModal()">Cancel</wg-button>
 *     <wg-button>Confirm</wg-button>
 *   </wg-modal-footer>
 * </wg-modal>
 * ```
 */
export class Modal extends LitElement {
  static override properties = {
    open: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    closable: { type: Boolean, reflect: true },
    disableFocusTrap: { type: Boolean, attribute: 'disable-focus-trap' },
    disableEscapeKey: { type: Boolean, attribute: 'disable-escape-key' },
    disableOverlayClick: { type: Boolean, attribute: 'disable-overlay-click' },
  };

  @property({ type: Boolean }) open = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @property({ type: Boolean }) closable = true;
  @property({ type: Boolean, attribute: 'disable-focus-trap' }) disableFocusTrap = false;
  @property({ type: Boolean, attribute: 'disable-escape-key' }) disableEscapeKey = false;
  @property({ type: Boolean, attribute: 'disable-overlay-click' }) disableOverlayClick = false;

  private previousActiveElement: HTMLElement | null = null;
  private cleanupScrollLock: (() => void) | null = null;
  private cleanupEscapeKey: (() => void) | null = null;
  private cleanupFocusTrap: (() => void) | null = null;
  private cleanupInitialFocus: (() => void) | null = null;

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  private handleOverlayClick = () => {
    if (this.closable && !this.disableOverlayClick) {
      emitEvent(this, 'close');
    }
  };

  override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      if (this.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }

    // Apply core attrs
    const modalEl = this.querySelector('.modal');
    if (modalEl) {
      const attrs = ModalCore.mapPropsToAttrs({
        open: this.open,
        size: this.size,
        closable: this.closable,
      });
      applyAttrsToElement(modalEl as HTMLElement, attrs as unknown as Record<string, unknown>);
    }
  }

  private openModal(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;

    this.cleanupScrollLock = createScrollLock();

    if (this.closable && !this.disableEscapeKey) {
      this.cleanupEscapeKey = onEscapeKey(() => emitEvent(this, 'close'));
    }

    const modalEl = this.querySelector('.modal') as HTMLElement | null;
    if (modalEl) {
      if (!this.disableFocusTrap) {
        this.cleanupFocusTrap = createFocusTrap(modalEl);
      }
      this.cleanupInitialFocus = setInitialFocus(modalEl);
    }
  }

  private closeModal(): void {
    this.cleanupScrollLock?.();
    this.cleanupEscapeKey?.();
    this.cleanupFocusTrap?.();
    this.cleanupInitialFocus?.();
    this.cleanupScrollLock = null;
    this.cleanupEscapeKey = null;
    this.cleanupFocusTrap = null;
    this.cleanupInitialFocus = null;

    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.closeModal();
  }

  override render() {
    if (!this.open) {
      return html``;
    }

    return html`
      <div class="wg-modal-container" data-open>
        <div
          class="wg-overlay"
          data-opacity="medium"
          data-level="modal"
          data-visible
          aria-hidden="true"
          @click=${this.handleOverlayClick}
        ></div>
        <div class="wg-modal" tabindex="-1">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

/**
 * Modal Header - Lit Web Component
 *
 * @element wg-modal-header
 *
 * @fires close - When close button is clicked
 */
export class ModalHeaderElement extends LitElement {
  static override properties = {
    showClose: { type: Boolean, attribute: 'show-close', reflect: true },
  };

  @property({ type: Boolean, attribute: 'show-close' }) showClose = true;

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  private handleClose = () => {
    emitEvent(this, 'close');
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
  }

  override updated(): void {
    this.applyAttrs();
  }

  private applyAttrs(): void {
    const attrs = ModalHeaderCore.mapPropsToAttrs({
      showClose: this.showClose,
    });
    applyAttrsToElement(this, attrs as unknown as Record<string, unknown>);
  }

  override render() {
    return html`
      <div class="wg-modal__title" id="wg-modal__title">
        <slot></slot>
      </div>
      ${this.showClose
        ? html`
            <button
              type="button"
              class="wg-modal__close"
              @click=${this.handleClose}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          `
        : ''}
    `;
  }
}

/**
 * Modal Body - Lit Web Component
 *
 * @element wg-modal-body
 */
export class ModalBodyElement extends LitElement {
  static override properties = {
    scrollable: { type: Boolean, reflect: true },
  };

  @property({ type: Boolean }) scrollable = true;

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
  }

  override updated(): void {
    this.applyAttrs();
  }

  private applyAttrs(): void {
    const attrs = ModalBodyCore.mapPropsToAttrs({
      scrollable: this.scrollable,
    });
    applyAttrsToElement(this, attrs as unknown as Record<string, unknown>);
  }

  override render() {
    return html`<slot></slot>`;
  }
}

/**
 * Modal Footer - Lit Web Component
 *
 * @element wg-modal-footer
 */
export class ModalFooterElement extends LitElement {
  static override properties = {
    align: { type: String, reflect: true },
  };

  @property({ type: String }) align: 'start' | 'center' | 'end' = 'end';

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
  }

  override updated(): void {
    this.applyAttrs();
  }

  private applyAttrs(): void {
    const attrs = ModalFooterCore.mapPropsToAttrs({
      align: this.align,
    });
    applyAttrsToElement(this, attrs as unknown as Record<string, unknown>);
  }

  override render() {
    return html`<slot></slot>`;
  }
}

// Register custom elements
customElements.define('wg-modal', Modal);
customElements.define('wg-modal-header', ModalHeaderElement);
customElements.define('wg-modal-body', ModalBodyElement);
customElements.define('wg-modal-footer', ModalFooterElement);

declare global {
  interface HTMLElementTagNameMap {
    'wg-modal': Modal;
    'wg-modal-header': ModalHeaderElement;
    'wg-modal-body': ModalBodyElement;
    'wg-modal-footer': ModalFooterElement;
  }
}
