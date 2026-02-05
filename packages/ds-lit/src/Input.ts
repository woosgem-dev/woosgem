import { Input as InputCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Input - Lit Web Component
 *
 * @element wg-input
 *
 * @example
 * ```html
 * <wg-input variant="outline" size="md"></wg-input>
 * <wg-input variant="filled" error></wg-input>
 * ```
 */
export const Input = createComponent(
  InputCore,
  'wg-input',
  {
    props: {
      variant: { type: String, default: 'outline' },
      size: { type: String, default: 'md' },
      error: { type: Boolean, default: false },
      success: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-input', Input);

declare global {
  interface HTMLElementTagNameMap {
    'wg-input': InstanceType<typeof Input>;
  }
}
