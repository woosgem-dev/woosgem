import { Button as ButtonCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Button - Lit Web Component
 *
 * @element wg-button
 * @slot - 버튼 ?�용
 *
 * @example
 * ```html
 * <wg-button variant="filled" color="primary">Click me</wg-button>
 * <wg-button variant="outline" color="danger" disabled>Disabled</wg-button>
 * ```
 */
export const Button = createComponent(
  ButtonCore,
  'wg-button',
  {
    props: {
      variant: { type: String, default: 'filled' },
      color: { type: String, default: 'primary' },
      size: { type: String, default: 'md' },
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      fullWidth: { type: Boolean, default: false, attribute: 'full-width' },
    },
    events: {
      click: (e: MouseEvent, component) => {
        const el = component as unknown as { loading: boolean; disabled: boolean };
        if (el.loading || el.disabled) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
    },
  }
);

customElements.define('wg-button', Button);

declare global {
  interface HTMLElementTagNameMap {
    'wg-button': InstanceType<typeof Button>;
  }
}
