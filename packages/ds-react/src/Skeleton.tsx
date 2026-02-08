import type { ComponentPropsWithoutRef, ComponentType, CSSProperties } from 'react';
import { Skeleton as SkeletonDef, type SkeletonStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Skeleton component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type SkeletonProps = Prettify<
  Omit<SkeletonStyleProps, 'width' | 'height'> & {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
  } & Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof SkeletonStyleProps | 'data-variant' | 'data-size' | 'data-animation' | 'aria-busy' | 'aria-live'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-animation'?: never;
      'aria-busy'?: never;
      'aria-live'?: never;
    }
>;

/** Ref type for Skeleton component */
export type SkeletonRef = HTMLDivElement;

const BaseSkeleton = createComponent(SkeletonDef);

/**
 * Skeleton component for loading placeholder states.
 *
 * @example
 * ```tsx
 * // Text skeleton (default)
 * <Skeleton />
 *
 * // Circular skeleton for avatars
 * <Skeleton variant="circular" size="lg" />
 *
 * // Rectangular skeleton with custom dimensions
 * <Skeleton variant="rectangular" width={200} height={100} />
 *
 * // Full width skeleton
 * <Skeleton variant="text" size="full" />
 *
 * // Wave animation
 * <Skeleton animation="wave" />
 *
 * // No animation (static)
 * <Skeleton animation="none" />
 * ```
 */
export const Skeleton = BaseSkeleton as ComponentType<SkeletonProps>;
