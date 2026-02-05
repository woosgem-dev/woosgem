import {
  Select as SelectCore,
  SelectMenu as SelectMenuCore,
  SelectOption as SelectOptionCore,
} from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Select - Lit Web Component (trigger button)
 *
 * @element wg-select
 * @slot value - Selected value display
 * @slot placeholder - Placeholder text
 * @slot icon - Dropdown icon
 *
 * @example
 * ```html
 * <wg-select variant="outline" size="md" placeholder="Select an option">
 *   <span slot="value">Selected option</span>
 * </wg-select>
 * ```
 */
export const Select = createComponent(
  SelectCore,
  'wg-select',
  {
    props: {
      variant: { type: String, default: 'outline' },
      size: { type: String, default: 'md' },
      disabled: { type: Boolean, default: false },
      error: { type: Boolean, default: false },
      open: { type: Boolean, default: false },
      multiple: { type: Boolean, default: false },
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

customElements.define('wg-select', Select);

/**
 * SelectMenu - Lit Web Component (dropdown container)
 *
 * @element wg-select-menu
 * @slot - SelectOption items
 *
 * @example
 * ```html
 * <wg-select-menu open size="md">
 *   <wg-select-option value="1">Option 1</wg-select-option>
 *   <wg-select-option value="2">Option 2</wg-select-option>
 * </wg-select-menu>
 * ```
 */
export const SelectMenu = createComponent(
  SelectMenuCore,
  'wg-select-menu',
  {
    props: {
      size: { type: String, default: 'md' },
      open: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-select-menu', SelectMenu);

/**
 * SelectOption - Lit Web Component (list item)
 *
 * @element wg-select-option
 * @slot - Option label
 * @slot checkmark - Selection checkmark icon
 *
 * @example
 * ```html
 * <wg-select-option value="option1" selected>Option 1</wg-select-option>
 * ```
 */
export const SelectOption = createComponent(
  SelectOptionCore,
  'wg-select-option',
  {
    props: {
      size: { type: String, default: 'md' },
      selected: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      highlighted: { type: Boolean, default: false },
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

customElements.define('wg-select-option', SelectOption);

declare global {
  interface HTMLElementTagNameMap {
    'wg-select': InstanceType<typeof Select>;
    'wg-select-menu': InstanceType<typeof SelectMenu>;
    'wg-select-option': InstanceType<typeof SelectOption>;
  }
}
