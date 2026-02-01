import type { DefineComponent } from 'vue';
import { Icon as IconDef, type IconStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Icon component props.
 * Combines style props with specific allowed native props.
 */
export type IconProps = Prettify<
  IconStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Icon wrapper component for displaying SVG icons with consistent sizing and colors.
 *
 * @example
 * ```vue
 * <Icon size="md" color="primary">
 *   <svg viewBox="0 0 24 24">...</svg>
 * </Icon>
 *
 * <!-- Different sizes -->
 * <Icon size="xs">...</Icon>  <!-- 12px -->
 * <Icon size="sm">...</Icon>  <!-- 16px -->
 * <Icon size="md">...</Icon>  <!-- 20px (default) -->
 * <Icon size="lg">...</Icon>  <!-- 24px -->
 * <Icon size="xl">...</Icon>  <!-- 32px -->
 * ```
 */
export const Icon = createComponent(IconDef) as DefineComponent<IconProps>;
