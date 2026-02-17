import { Tag as TagCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Tag - Lit Web Component
 *
 * Display component for labels, tags, filters, and removable items.
 *
 * @element wg-tag
 * @slot - Tag label content
 *
 * @example
 * ```html
 * <wg-tag>Label</wg-tag>
 * <wg-tag variant="solid" color="danger" closable>Remove me</wg-tag>
 * ```
 */
export const Tag = createComponent(
  TagCore,
  'wg-tag',
  {
    props: {
      variant: { type: String, default: 'subtle' },
      color: { type: String, default: 'primary' },
      size: { type: String, default: 'md' },
      closable: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-tag', Tag);

declare global {
  interface HTMLElementTagNameMap {
    'wg-tag': InstanceType<typeof Tag>;
  }
}
