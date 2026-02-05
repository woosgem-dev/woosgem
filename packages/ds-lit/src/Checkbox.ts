import { Checkbox as CheckboxCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Checkbox - Lit Web Component
 *
 * @element wg-checkbox
 * @slot - Checkbox label content
 *
 * @example
 * ```html
 * <wg-checkbox size="md">Accept terms</wg-checkbox>
 * <wg-checkbox checked>Selected</wg-checkbox>
 * <wg-checkbox indeterminate>Partial</wg-checkbox>
 * ```
 */
export const Checkbox = createComponent(
  CheckboxCore,
  'wg-checkbox',
  {
    props: {
      size: { type: String, default: 'md' },
      checked: { type: Boolean, default: false },
      indeterminate: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-checkbox', Checkbox);

declare global {
  interface HTMLElementTagNameMap {
    'wg-checkbox': InstanceType<typeof Checkbox>;
  }
}
