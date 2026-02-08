import {
  SegmentedControl as SegmentedControlCore,
  SegmentedControlItem as SegmentedControlItemCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * SegmentedControl - Lit Web Component
 *
 * @element wg-segmented-control
 * @slot - SegmentedControlItem children
 *
 * @example
 * ```html
 * <wg-segmented-control size="md">
 *   <wg-segmented-control-item selected>Day</wg-segmented-control-item>
 *   <wg-segmented-control-item>Week</wg-segmented-control-item>
 *   <wg-segmented-control-item>Month</wg-segmented-control-item>
 * </wg-segmented-control>
 * ```
 */
export const SegmentedControl = createComponent(
  SegmentedControlCore,
  'wg-segmented-control',
  {
    props: {
      size: { type: String, default: 'md' },
      fullWidth: { type: Boolean, default: false, attribute: 'full-width' },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-segmented-control', SegmentedControl);

/**
 * SegmentedControlItem - Lit Web Component
 *
 * @element wg-segmented-control-item
 * @slot - Item content
 *
 * @example
 * ```html
 * <wg-segmented-control-item selected>Option A</wg-segmented-control-item>
 * ```
 */
export const SegmentedControlItem = createComponent(
  SegmentedControlItemCore,
  'wg-segmented-control-item',
  {
    props: {
      selected: { type: Boolean, default: false },
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

customElements.define('wg-segmented-control-item', SegmentedControlItem);

declare global {
  interface HTMLElementTagNameMap {
    'wg-segmented-control': InstanceType<typeof SegmentedControl>;
    'wg-segmented-control-item': InstanceType<typeof SegmentedControlItem>;
  }
}
