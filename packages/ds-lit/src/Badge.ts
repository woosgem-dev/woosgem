import { Badge as BadgeCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Badge - Lit Web Component
 *
 * @element wg-badge
 * @slot - Badge content
 *
 * @example
 * ```html
 * <wg-badge variant="solid" color="primary">New</wg-badge>
 * <wg-badge variant="outline" color="danger">Error</wg-badge>
 * ```
 */
export const Badge = createComponent(
  BadgeCore,
  'wg-badge',
  {
    props: {
      variant: { type: String, default: 'solid' },
      color: { type: String, default: 'primary' },
      size: { type: String, default: 'md' },
    },
  }
);

customElements.define('wg-badge', Badge);

declare global {
  interface HTMLElementTagNameMap {
    'wg-badge': InstanceType<typeof Badge>;
  }
}
