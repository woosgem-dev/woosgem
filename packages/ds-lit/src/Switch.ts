import { Switch as SwitchCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Switch - Lit Web Component
 *
 * @element wg-switch
 *
 * @example
 * ```html
 * <wg-switch size="md" color="primary"></wg-switch>
 * <wg-switch checked></wg-switch>
 * <wg-switch disabled></wg-switch>
 * ```
 */
export const Switch = createComponent(
  SwitchCore,
  'wg-switch',
  {
    props: {
      size: { type: String, default: 'md' },
      color: { type: String, default: 'primary' },
      checked: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
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

customElements.define('wg-switch', Switch);

declare global {
  interface HTMLElementTagNameMap {
    'wg-switch': InstanceType<typeof Switch>;
  }
}
