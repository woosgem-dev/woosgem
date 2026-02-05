import { Tab as TabCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Tab - Lit Web Component
 *
 * @element wg-tab
 * @slot - Tab content
 *
 * @example
 * ```html
 * <wg-tab variant="underline" selected>Tab 1</wg-tab>
 * <wg-tab variant="filled" color="primary">Tab 2</wg-tab>
 * ```
 */
export const Tab = createComponent(
  TabCore,
  'wg-tab',
  {
    props: {
      variant: { type: String, default: 'underline' },
      size: { type: String, default: 'md' },
      color: { type: String, default: 'primary' },
      selected: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      fullWidth: { type: Boolean, default: false, attribute: 'full-width' },
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

customElements.define('wg-tab', Tab);

declare global {
  interface HTMLElementTagNameMap {
    'wg-tab': InstanceType<typeof Tab>;
  }
}
