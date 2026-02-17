import {
  Menu as MenuCore,
  MenuItem as MenuItemCore,
  MenuDivider as MenuDividerCore,
  MenuGroup as MenuGroupCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Menu - Lit Web Component
 *
 * @element wg-menu
 * @slot - Menu content (MenuItem elements)
 */
export const Menu = createComponent(
  MenuCore,
  'wg-menu',
  {
    props: {
      size: { type: String, default: 'md' },
    },
  }
);

customElements.define('wg-menu', Menu);

/**
 * MenuItem - Lit Web Component
 *
 * @element wg-menu-item
 * @slot - Item content
 */
export const MenuItem = createComponent(
  MenuItemCore,
  'wg-menu-item',
  {
    props: {
      disabled: { type: Boolean, default: false },
      active: { type: Boolean, default: false },
      destructive: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-menu-item', MenuItem);

/**
 * MenuDivider - Lit Web Component
 *
 * @element wg-menu-divider
 */
export const MenuDivider = createComponent(
  MenuDividerCore,
  'wg-menu-divider',
  {
    props: {},
  }
);

customElements.define('wg-menu-divider', MenuDivider);

/**
 * MenuGroup - Lit Web Component
 *
 * @element wg-menu-group
 * @slot - Group content
 */
export const MenuGroup = createComponent(
  MenuGroupCore,
  'wg-menu-group',
  {
    props: {},
  }
);

customElements.define('wg-menu-group', MenuGroup);

declare global {
  interface HTMLElementTagNameMap {
    'wg-menu': InstanceType<typeof Menu>;
    'wg-menu-item': InstanceType<typeof MenuItem>;
    'wg-menu-divider': InstanceType<typeof MenuDivider>;
    'wg-menu-group': InstanceType<typeof MenuGroup>;
  }
}
