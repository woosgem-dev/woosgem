import { ListItem as ListItemCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * ListItem - Lit Web Component
 *
 * @element wg-list-item
 * @slot - List item content
 *
 * @example
 * ```html
 * <wg-list-item variant="interactive">Click me</wg-list-item>
 * <wg-list-item selected divider>Selected item</wg-list-item>
 * ```
 */
export const ListItem = createComponent(
  ListItemCore,
  'wg-list-item',
  {
    props: {
      variant: { type: String, default: 'default' },
      selected: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      divider: { type: Boolean, default: false },
    },
    events: {
      click: (e: MouseEvent, component) => {
        const el = component as unknown as { disabled: boolean };
        if (el.disabled) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
    },
  }
);

customElements.define('wg-list-item', ListItem);

declare global {
  interface HTMLElementTagNameMap {
    'wg-list-item': InstanceType<typeof ListItem>;
  }
}
