import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import {
  Progress as ProgressCore,
  getProgressPercentage,
  filterNullish,
} from '@woosgem-dev/core';
import type { ProgressVariant, ProgressColor, ProgressSize } from '@woosgem-dev/core';
import { applyAttrsToElement } from './_internal/createComponent';

/**
 * Progress - Lit Web Component
 *
 * Progress bar for displaying completion percentage.
 *
 * @element wg-progress
 *
 * @example
 * ```html
 * <wg-progress value="75"></wg-progress>
 * <wg-progress value="50" show-label></wg-progress>
 * <wg-progress value="90" color="success" variant="gradient"></wg-progress>
 * ```
 */
export class Progress extends LitElement {
  static override properties = {
    variant: { type: String, reflect: true },
    color: { type: String, reflect: true },
    size: { type: String, reflect: true },
    value: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    showLabel: { type: Boolean, attribute: 'show-label', reflect: true },
  };

  @property({ type: String }) variant: ProgressVariant = 'default';
  @property({ type: String }) color: ProgressColor = 'primary';
  @property({ type: String }) size: ProgressSize = 'md';
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Boolean, attribute: 'show-label' }) showLabel = false;

  // Light DOM
  override createRenderRoot(): HTMLElement {
    return this;
  }

  private applyAttrs(): void {
    const styleProps = filterNullish({
      variant: this.variant,
      color: this.color,
      size: this.size,
      value: this.value,
      max: this.max,
      showLabel: this.showLabel,
    });

    const attrs = ProgressCore.mapPropsToAttrs(styleProps);
    applyAttrsToElement(this, attrs as unknown as Record<string, unknown>);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.applyAttrs();
  }

  override updated(): void {
    this.applyAttrs();
  }

  override render() {
    const percentage = getProgressPercentage(this.value, this.max);

    return html`
      <div class="progress-track">
        <div class="progress-fill">
          ${this.showLabel
            ? html`<span class="progress-label">${percentage}%</span>`
            : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('wg-progress', Progress);

declare global {
  interface HTMLElementTagNameMap {
    'wg-progress': Progress;
  }
}
