import { LitElement, html } from 'lit';
import type { TemplateResult } from 'lit';
import { Toast as ToastCore } from '@woosgem-dev/core';
import { createComponent, applyAttrsToElement, emitEvent } from './_internal/createComponent';

/**
 * Toast - Lit Web Component
 *
 * Features:
 * - Auto-dismiss after configurable duration
 * - Multiple positions (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)
 * - Variants for different message types (info, success, warning, error)
 * - Optional close button
 * - Accessible with role="alert" and aria-live="polite"
 *
 * @element wg-toast
 * @slot - Toast content
 *
 * @fires close - Fired when toast is dismissed (auto or manual)
 *
 * @example
 * ```html
 * <wg-toast variant="success">Operation completed!</wg-toast>
 * <wg-toast variant="error" position="bottom-center" duration="10000">An error occurred!</wg-toast>
 * <wg-toast variant="info" duration="0" closable>This toast will not auto-dismiss.</wg-toast>
 * ```
 */
export const Toast = createComponent(
  ToastCore,
  'wg-toast',
  {
    props: {
      variant: { type: String, default: 'info' },
      position: { type: String, default: 'top-right' },
      duration: { type: Number, default: 5000 },
      closable: { type: Boolean, default: true },
      visible: { type: Boolean, default: true },
    },
  }
);

// Extended Toast class with auto-dismiss functionality
class ToastElement extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    position: { type: String, reflect: true },
    duration: { type: Number, reflect: true },
    closable: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
  };

  variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' = 'top-right';
  duration = 5000;
  closable = true;
  visible = true;

  private timerId: ReturnType<typeof setTimeout> | null = null;

  // Light DOM ?¬ìš©
  createRenderRoot(): HTMLElement {
    return this;
  }

  private clearTimer(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  private startTimer(): void {
    this.clearTimer();
    if (this.visible && this.duration > 0) {
      this.timerId = setTimeout(() => {
        this.handleClose();
      }, this.duration);
    }
  }

  private handleClose(): void {
    this.clearTimer();
    this.visible = false;
    emitEvent(this, 'close');
  }

  private applyAttrs(): void {
    const attrs = ToastCore.mapPropsToAttrs({
      variant: this.variant,
      position: this.position,
      duration: this.duration,
      closable: this.closable,
      visible: this.visible,
    });
    applyAttrsToElement(this, attrs as unknown as Record<string, unknown>);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
    this.startTimer();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.clearTimer();
  }

  updated(changedProperties: Map<string, unknown>): void {
    this.applyAttrs();

    // Restart timer if visibility or duration changes
    if (changedProperties.has('visible') || changedProperties.has('duration')) {
      if (this.visible && this.duration > 0) {
        this.startTimer();
      } else {
        this.clearTimer();
      }
    }
  }

  render(): TemplateResult | null {
    if (!this.visible) {
      return null;
    }
    return html`<slot></slot>`;
  }
}

// Use the extended class instead of the factory-generated one
customElements.define('wg-toast', ToastElement);

declare global {
  interface HTMLElementTagNameMap {
    'wg-toast': ToastElement;
  }
}

export { ToastElement };
