import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Avatar as AvatarDef, type AvatarStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Avatar component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type AvatarProps = Prettify<
  AvatarStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof AvatarStyleProps | 'data-size' | 'data-shape' | 'data-has-image'> & {
      'data-size'?: never;
      'data-shape'?: never;
      'data-has-image'?: never;
    }
>;

/** Ref type for Avatar component */
export type AvatarRef = HTMLDivElement;

const BaseAvatar = createComponent(AvatarDef);

/**
 * Avatar component with different sizes and shapes.
 *
 * @example
 * ```tsx
 * <Avatar size="md" shape="circle" src="/avatar.jpg" alt="User" />
 *
 * <Avatar size="lg" shape="square" fallback="AB">
 *   AB
 * </Avatar>
 *
 * <Avatar size="sm">
 *   JD
 * </Avatar>
 * ```
 */
export const Avatar = BaseAvatar as ComponentType<AvatarProps>;
