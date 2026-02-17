import { Kbd as KbdCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Kbd - Lit Web Component
 *
 * Keyboard key indicator for displaying keyboard shortcuts.
 *
 * @element wg-kbd
 * @slot - Key label content
 *
 * @example
 * ```html
 * <wg-kbd>Ctrl</wg-kbd>
 * <wg-kbd variant="flat" size="md">Enter</wg-kbd>
 * ```
 */
export const Kbd = createComponent(
  KbdCore,
  'wg-kbd',
  {
    props: {
      size: { type: String, default: 'sm' },
      variant: { type: String, default: 'raised' },
    },
  }
);

customElements.define('wg-kbd', Kbd);

declare global {
  interface HTMLElementTagNameMap {
    'wg-kbd': InstanceType<typeof Kbd>;
  }
}
