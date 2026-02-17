import {
  Popover as PopoverCore,
  PopoverArrow as PopoverArrowCore,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Popover - Lit Web Component
 *
 * Positioned popup content container that anchors to a trigger element.
 *
 * @element wg-popover
 * @slot - Popover content
 *
 * @example
 * ```html
 * <wg-popover position="bottom" size="md">Content</wg-popover>
 * <wg-popover position="top" variant="tooltip">Tooltip text</wg-popover>
 * ```
 */
export const Popover = createComponent(
  PopoverCore,
  'wg-popover',
  {
    props: {
      position: { type: String, default: 'bottom' },
      size: { type: String, default: 'md' },
      variant: { type: String, default: 'default' },
    },
  }
);

customElements.define('wg-popover', Popover);

/**
 * PopoverArrow - Lit Web Component
 *
 * Arrow pointer for the Popover component.
 *
 * @element wg-popover-arrow
 *
 * @example
 * ```html
 * <wg-popover position="bottom">
 *   <wg-popover-arrow></wg-popover-arrow>
 *   Content
 * </wg-popover>
 * ```
 */
export const PopoverArrow = createComponent(
  PopoverArrowCore,
  'wg-popover-arrow',
  { props: {} }
);

customElements.define('wg-popover-arrow', PopoverArrow);

declare global {
  interface HTMLElementTagNameMap {
    'wg-popover': InstanceType<typeof Popover>;
    'wg-popover-arrow': InstanceType<typeof PopoverArrow>;
  }
}
