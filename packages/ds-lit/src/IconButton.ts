import { IconButton as IconButtonCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * IconButton - Lit Web Component
 *
 * @element wg-icon-button
 * @slot - Icon content
 *
 * @example
 * ```html
 * <wg-icon-button variant="filled" color="primary">
 *   <svg>...</svg>
 * </wg-icon-button>
 * <wg-icon-button variant="ghost" shape="circle">
 *   <svg>...</svg>
 * </wg-icon-button>
 * ```
 */
export const IconButton = createComponent(
  IconButtonCore,
  'wg-icon-button',
  {
    props: {
      variant: { type: String, default: 'filled' },
      color: { type: String, default: 'primary' },
      size: { type: String, default: 'md' },
      shape: { type: String, default: 'square' },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-icon-button', IconButton);

declare global {
  interface HTMLElementTagNameMap {
    'wg-icon-button': InstanceType<typeof IconButton>;
  }
}
