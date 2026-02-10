import { Overlay as OverlayCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Overlay - Lit Web Component
 *
 * Modal, BottomSheet, Drawer 등의 배경 오버레이
 *
 * @element wg-overlay
 *
 * @example
 * ```html
 * <wg-overlay visible @click=${handleClose}></wg-overlay>
 * <wg-overlay opacity="dark" blur></wg-overlay>
 * ```
 */
export const Overlay = createComponent(
  OverlayCore,
  'wg-overlay',
  {
    props: {
      blur: { type: Boolean, default: false },
      opacity: { type: String, default: 'medium' },
      level: { type: String, default: 'modal' },
      visible: { type: Boolean, default: true },
    },
  }
);

customElements.define('wg-overlay', Overlay);

declare global {
  interface HTMLElementTagNameMap {
    'wg-overlay': InstanceType<typeof Overlay>;
  }
}
