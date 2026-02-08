import { Alert as AlertCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Alert - Lit Web Component
 *
 * @element wg-alert
 * @slot - Alert content
 *
 * @example
 * ```html
 * <wg-alert status="info">Information message</wg-alert>
 * <wg-alert variant="filled" status="error" closable>Error message</wg-alert>
 * ```
 */
export const Alert = createComponent(
  AlertCore,
  'wg-alert',
  {
    props: {
      variant: { type: String, default: 'subtle' },
      status: { type: String, default: 'info' },
      closable: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-alert', Alert);

declare global {
  interface HTMLElementTagNameMap {
    'wg-alert': InstanceType<typeof Alert>;
  }
}
