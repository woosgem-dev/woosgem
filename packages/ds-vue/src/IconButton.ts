import type { DefineComponent } from 'vue';
import { IconButton as IconButtonDef, type IconButtonStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * IconButton component props.
 * Combines style props with specific allowed native props.
 */
export type IconButtonProps = Prettify<
  IconButtonStyleProps & {
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
    /** Additional CSS class */
    class?: string;
    /** Button type for forms */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * IconButton component with multiple variants, colors, and sizes.
 *
 * @example
 * ```vue
 * <IconButton variant="filled" color="primary" size="md">
 *   <i class="icon-search" />
 * </IconButton>
 *
 * <IconButton variant="ghost" color="neutral">
 *   <i class="icon-menu" />
 * </IconButton>
 *
 * <IconButton :disabled="true">
 *   <i class="icon-close" />
 * </IconButton>
 * ```
 */
export const IconButton = createComponent(IconButtonDef) as DefineComponent<IconButtonProps>;
