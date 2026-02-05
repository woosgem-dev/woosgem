import { Spinner as SpinnerCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Spinner - Lit Web Component
 *
 * @element wg-spinner
 *
 * @example
 * ```html
 * <wg-spinner size="md" color="primary"></wg-spinner>
 * <wg-spinner size="lg" color="secondary" label="Loading data..."></wg-spinner>
 * ```
 */
export const Spinner = createComponent(
  SpinnerCore,
  'wg-spinner',
  {
    props: {
      size: { type: String, default: 'md' },
      color: { type: String, default: 'primary' },
      label: { type: String, default: 'Loading...' },
    },
  }
);

customElements.define('wg-spinner', Spinner);

declare global {
  interface HTMLElementTagNameMap {
    'wg-spinner': InstanceType<typeof Spinner>;
  }
}
