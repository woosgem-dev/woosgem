import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Icon as IconDef, type IconStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent';

/**
 * Icon component props.
 * Combines style props with all standard span HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type IconProps = Prettify<
  IconStyleProps &
    Omit<ComponentPropsWithoutRef<'span'>, keyof IconStyleProps | 'data-size' | 'data-color' | 'aria-hidden'> & {
      'data-size'?: never;
      'data-color'?: never;
      'aria-hidden'?: never;
    }
>;

/** Ref type for Icon component */
export type IconRef = HTMLSpanElement;

const BaseIcon = createComponent(IconDef);

/**
 * Icon wrapper component for displaying SVG icons with consistent sizing and colors.
 *
 * @example
 * ```tsx
 * // With inline SVG
 * <Icon size="md" color="primary">
 *   <svg viewBox="0 0 24 24">...</svg>
 * </Icon>
 *
 * // Different sizes
 * <Icon size="xs">...</Icon>  // 12px
 * <Icon size="sm">...</Icon>  // 16px
 * <Icon size="md">...</Icon>  // 20px (default)
 * <Icon size="lg">...</Icon>  // 24px
 * <Icon size="xl">...</Icon>  // 32px
 *
 * // With colors
 * <Icon color="danger">...</Icon>
 * <Icon color="success">...</Icon>
 * ```
 */
export const Icon = BaseIcon as ComponentType<IconProps>;
