import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  Modal as ModalCore,
  ModalHeader as ModalHeaderCore,
  ModalBody as ModalBodyCore,
  ModalFooter as ModalFooterCore,
} from '@woosgem/ds-core';
import { applyAttrsToElement, emitEvent } from './_internal/createComponent';

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
}

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
  private originalOverflow = '';
  private boundHandleKeyDown: ((e: KeyboardEvent) => void) | null = null;

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.closable && !this.disableEscapeKey) {
      event.preventDefault();
      emitEvent(this, 'close');
    }

    // Focus trap
    if (!this.disableFocusTrap && event.key === 'Tab') {
      const modalContent = this.querySelector('.modal');
      if (!modalContent) return;

      const focusableElements = getFocusableElements(modalContent as HTMLElement);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

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
    this.originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    this.boundHandleKeyDown = this.handleKeyDown;
    document.addEventListener('keydown', this.boundHandleKeyDown);

    // Focus first focusable element
    requestAnimationFrame(() => {
      const modalEl = this.querySelector('.modal');
      if (modalEl) {
        const focusableElements = getFocusableElements(modalEl as HTMLElement);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          (modalEl as HTMLElement).focus();
        }
      }
    });
  }

  private closeModal(): void {
    document.body.style.overflow = this.originalOverflow;

    if (this.boundHandleKeyDown) {
      document.removeEventListener('keydown', this.boundHandleKeyDown);
      this.boundHandleKeyDown = null;
    }

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
      <div class="modal-container" data-open>
        <div
          class="overlay"
          data-opacity="medium"
          data-level="modal"
          data-visible
          aria-hidden="true"
          @click=${this.handleOverlayClick}
        ></div>
        <div class="modal" tabindex="-1">
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
      <div class="modal-title" id="modal-title">
        <slot></slot>
      </div>
      ${this.showClose
        ? html`
            <button
              type="button"
              class="modal-close"
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
