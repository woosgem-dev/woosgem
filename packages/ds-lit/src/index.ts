/**
 * @woosgem/ds-lit
 *
 * WooSGem Design System - Lit Web Components
 *
 * @example
 * ```html
 * <script type="module">
 *   import '@woosgem/ds-lit';
 *   import '@woosgem/ds-styles';
 * </script>
 *
 * <wg-button variant="filled" color="primary">Click me</wg-button>
 * ```
 */

// Components
export { Button } from './Button';
export { Overlay } from './Overlay';

// Utilities
export {
  createComponent,
  applyAttrsToElement,
  emitEvent,
} from './_internal/createComponent';

export type {
  CoreComponentDefinition,
  PropDefinition,
  CreateComponentOptions,
} from './_internal/createComponent';

// Re-export core types
export type {
  ButtonStyleProps,
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  OverlayStyleProps,
  OverlayOpacity,
  OverlayLevel,
} from '@woosgem/ds-core';
