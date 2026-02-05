import { Radio as RadioCore, RadioGroup as RadioGroupCore } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Radio - Lit Web Component
 *
 * @element wg-radio
 * @slot label - Radio label content
 *
 * @example
 * ```html
 * <wg-radio size="md" color="primary">Option 1</wg-radio>
 * <wg-radio checked>Selected option</wg-radio>
 * ```
 */
export const Radio = createComponent(
  RadioCore,
  'wg-radio',
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

customElements.define('wg-radio', Radio);

/**
 * RadioGroup - Lit Web Component
 *
 * @element wg-radio-group
 * @slot - Radio items
 *
 * @example
 * ```html
 * <wg-radio-group orientation="vertical">
 *   <wg-radio>Option 1</wg-radio>
 *   <wg-radio>Option 2</wg-radio>
 * </wg-radio-group>
 * ```
 */
export const RadioGroup = createComponent(
  RadioGroupCore,
  'wg-radio-group',
  {
    props: {
      orientation: { type: String, default: 'vertical' },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-radio-group', RadioGroup);

declare global {
  interface HTMLElementTagNameMap {
    'wg-radio': InstanceType<typeof Radio>;
    'wg-radio-group': InstanceType<typeof RadioGroup>;
  }
}
