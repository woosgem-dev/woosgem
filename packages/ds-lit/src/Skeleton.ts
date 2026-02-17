import { Skeleton as SkeletonCore } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Skeleton - Lit Web Component
 *
 * Placeholder loading indicator for content that is not yet available.
 *
 * @element wg-skeleton
 *
 * @example
 * ```html
 * <wg-skeleton variant="text" size="md"></wg-skeleton>
 * <wg-skeleton variant="circular" width="48" height="48"></wg-skeleton>
 * <wg-skeleton variant="rectangular" animation="wave"></wg-skeleton>
 * ```
 */
export const Skeleton = createComponent(
  SkeletonCore,
  'wg-skeleton',
  {
    props: {
      variant: { type: String, default: 'text' },
      size: { type: String, default: 'md' },
      animation: { type: String, default: 'pulse' },
      width: { type: String },
      height: { type: String },
    },
  }
);

customElements.define('wg-skeleton', Skeleton);

declare global {
  interface HTMLElementTagNameMap {
    'wg-skeleton': InstanceType<typeof Skeleton>;
  }
}
