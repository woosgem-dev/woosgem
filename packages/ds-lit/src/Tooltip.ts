import { LitElement, html, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  Tooltip as TooltipCore,
  type TooltipPosition,
  type TooltipTrigger,
} from '@woosgem-dev/core';
import { applyAttrsToElement } from './_internal/createComponent';

let tooltipIdCounter = 0;

/**
 * Tooltip - Lit Web Component
 *
 * @element wg-tooltip
 * @slot - Trigger element
 *
 * @example
 * ```html
 * <wg-tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </wg-tooltip>
 *
 * <wg-tooltip content="Click tooltip" trigger="click" position="bottom">
 *   <button>Click me</button>
 * </wg-tooltip>
 * ```
 */
export class Tooltip extends LitElement {
  static properties = {
    content: { type: String },
    position: { type: String },
    trigger: { type: String },
    delay: { type: Number },
    arrow: { type: Boolean },
    visible: { type: Boolean },
    disabled: { type: Boolean },
  };

  @property({ type: String }) content = '';
  @property({ type: String }) position: TooltipPosition = 'top';
  @property({ type: String }) trigger: TooltipTrigger = 'hover';
  @property({ type: Number }) delay = 0;
  @property({ type: Boolean }) arrow = true;
  @property({ type: Boolean }) visible = false;
  @property({ type: Boolean }) disabled = false;

  @state() private _internalVisible = false;

  private _timeoutId: number | null = null;
  private _tooltipId = `wg-tooltip-${++tooltipIdCounter}`;

  // Light DOM for ds-styles compatibility
  createRenderRoot(): HTMLElement {
    return this;
  }

  private get _isVisible(): boolean {
    return this.visible || this._internalVisible;
  }

  private _showTooltip = (): void => {
    if (this.disabled) return;
    if (this.delay > 0) {
      this._timeoutId = window.setTimeout(() => {
        this._internalVisible = true;
        this._emitVisibleChange(true);
      }, this.delay);
    } else {
      this._internalVisible = true;
      this._emitVisibleChange(true);
    }
  };

  private _hideTooltip = (): void => {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
      this._timeoutId = null;
    }
    this._internalVisible = false;
    this._emitVisibleChange(false);
  };

  private _toggleTooltip = (): void => {
    if (this.disabled) return;
    this._internalVisible = !this._internalVisible;
    this._emitVisibleChange(this._internalVisible);
  };

  private _emitVisibleChange(visible: boolean): void {
    this.dispatchEvent(
      new CustomEvent('visible-change', {
        bubbles: true,
        composed: true,
        detail: { visible },
      })
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }

  updated(): void {
    this._applyWrapperAttrs();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._applyWrapperAttrs();
  }

  private _applyWrapperAttrs(): void {
    this.classList.add('tooltip-wrapper');
    this.setAttribute('data-position', this.position);
  }

  render(): TemplateResult {
    const attrs = TooltipCore.mapPropsToAttrs({
      content: this.content,
      position: this.position,
      trigger: this.trigger,
      delay: this.delay,
      arrow: this.arrow,
      visible: this._isVisible,
      disabled: this.disabled,
    });

    // Build trigger handlers based on trigger type
    const triggerHandlers =
      this.trigger === 'hover'
        ? {
            '@mouseenter': this._showTooltip,
            '@mouseleave': this._hideTooltip,
          }
        : this.trigger === 'focus'
          ? {
              '@focus': this._showTooltip,
              '@blur': this._hideTooltip,
            }
          : this.trigger === 'click'
            ? {
                '@click': this._toggleTooltip,
              }
            : {};

    return html`
      <span
        class="tooltip-trigger"
        aria-describedby=${this._isVisible ? this._tooltipId : ''}
        @mouseenter=${this.trigger === 'hover' ? this._showTooltip : undefined}
        @mouseleave=${this.trigger === 'hover' ? this._hideTooltip : undefined}
        @focus=${this.trigger === 'focus' ? this._showTooltip : undefined}
        @blur=${this.trigger === 'focus' ? this._hideTooltip : undefined}
        @click=${this.trigger === 'click' ? this._toggleTooltip : undefined}
      >
        <slot></slot>
      </span>

      <div
        id=${this._tooltipId}
        class=${attrs.class}
        data-position=${attrs['data-position']}
        data-trigger=${attrs['data-trigger']}
        ?data-arrow=${attrs['data-arrow']}
        ?data-visible=${attrs['data-visible']}
        ?data-disabled=${attrs['data-disabled']}
        role=${attrs.role}
        aria-hidden=${!this._isVisible}
      >
        ${this.arrow ? html`<span class="tooltip-arrow"></span>` : ''}
        <span class="tooltip-content">${this.content}</span>
      </div>
    `;
  }
}

customElements.define('wg-tooltip', Tooltip);

declare global {
  interface HTMLElementTagNameMap {
    'wg-tooltip': Tooltip;
  }
}
