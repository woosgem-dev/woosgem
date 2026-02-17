import { AvatarGroup as AvatarGroupCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export const AvatarGroup = createComponent(
  AvatarGroupCore,
  'wg-avatar-group',
  {
    props: {
      size: { type: String, default: 'md' },
      max: { type: Number, default: 5 },
      spacing: { type: String, default: 'tight' },
    },
  }
);

customElements.define('wg-avatar-group', AvatarGroup);

declare global {
  interface HTMLElementTagNameMap {
    'wg-avatar-group': InstanceType<typeof AvatarGroup>;
  }
}
