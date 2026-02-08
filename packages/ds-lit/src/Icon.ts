import { Icon as IconCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Icon - Lit Web Component
 *
 * @element wg-icon
 * @slot - SVG icon content
 *
 * @example
 * ```html
 * <wg-icon size="md" color="primary">
 *   <svg>...</svg>
 * </wg-icon>
 * ```
 */
export const Icon = createComponent(
  IconCore,
  'wg-icon',
  {
    props: {
      size: { type: String, default: 'md' },
      color: { type: String, default: 'inherit' },
    },
  }
);

customElements.define('wg-icon', Icon);

declare global {
  interface HTMLElementTagNameMap {
    'wg-icon': InstanceType<typeof Icon>;
  }
}
