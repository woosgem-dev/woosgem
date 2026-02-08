import { Avatar as AvatarCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Avatar - Lit Web Component
 *
 * @element wg-avatar
 * @slot - Fallback content (initials or icon)
 *
 * @example
 * ```html
 * <wg-avatar size="md" shape="circle"></wg-avatar>
 * <wg-avatar size="lg" shape="square">JD</wg-avatar>
 * ```
 */
export const Avatar = createComponent(
  AvatarCore,
  'wg-avatar',
  {
    props: {
      size: { type: String, default: 'md' },
      shape: { type: String, default: 'circle' },
      src: { type: String, default: '' },
      alt: { type: String, default: '' },
      fallback: { type: String, default: '' },
    },
  }
);

customElements.define('wg-avatar', Avatar);

declare global {
  interface HTMLElementTagNameMap {
    'wg-avatar': InstanceType<typeof Avatar>;
  }
}
