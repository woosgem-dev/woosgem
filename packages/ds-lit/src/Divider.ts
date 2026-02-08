import { Divider as DividerCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Divider - Lit Web Component
 *
 * @element wg-divider
 *
 * @example
 * ```html
 * <wg-divider orientation="horizontal"></wg-divider>
 * <wg-divider variant="dashed" spacing="lg"></wg-divider>
 * ```
 */
export const Divider = createComponent(
  DividerCore,
  'wg-divider',
  {
    props: {
      orientation: { type: String, default: 'horizontal' },
      variant: { type: String, default: 'solid' },
      spacing: { type: String, default: 'md' },
      color: { type: String, default: 'default' },
    },
  }
);

customElements.define('wg-divider', Divider);

declare global {
  interface HTMLElementTagNameMap {
    'wg-divider': InstanceType<typeof Divider>;
  }
}
