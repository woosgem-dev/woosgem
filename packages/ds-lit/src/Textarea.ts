import { Textarea as TextareaCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Textarea - Lit Web Component
 *
 * @element wg-textarea
 *
 * @example
 * ```html
 * <wg-textarea variant="outline" size="md"></wg-textarea>
 * <wg-textarea resize="vertical" error></wg-textarea>
 * ```
 */
export const Textarea = createComponent(
  TextareaCore,
  'wg-textarea',
  {
    props: {
      variant: { type: String, default: 'outline' },
      size: { type: String, default: 'md' },
      resize: { type: String, default: 'vertical' },
      disabled: { type: Boolean, default: false },
      error: { type: Boolean, default: false },
    },
  }
);

customElements.define('wg-textarea', Textarea);

declare global {
  interface HTMLElementTagNameMap {
    'wg-textarea': InstanceType<typeof Textarea>;
  }
}
