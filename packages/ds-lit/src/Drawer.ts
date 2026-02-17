import { Drawer as DrawerCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Drawer - Lit Web Component
 *
 * @element wg-drawer
 * @slot - Drawer content
 *
 * @example
 * ```html
 * <wg-drawer position="right" size="md">Panel content</wg-drawer>
 * <wg-drawer position="left" size="lg">Navigation</wg-drawer>
 * ```
 */
export const Drawer = createComponent(
  DrawerCore,
  'wg-drawer',
  {
    props: {
      position: { type: String, default: 'right' },
      size: { type: String, default: 'md' },
    },
  }
);

customElements.define('wg-drawer', Drawer);

declare global {
  interface HTMLElementTagNameMap {
    'wg-drawer': InstanceType<typeof Drawer>;
  }
}
