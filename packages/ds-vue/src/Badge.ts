import type { DefineComponent } from 'vue';
import { Badge as BadgeDef, type BadgeStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Badge component props.
 * Combines style props with specific allowed native props.
 */
export type BadgeProps = Prettify<
  BadgeStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

/**
 * Badge component with multiple variants, colors, and sizes.
 *
 * @example
 * ```vue
 * <Badge variant="filled" color="primary" size="md">
 *   New
 * </Badge>
 *
 * <Badge variant="outline" color="success">
 *   Active
 * </Badge>
 *
 * <Badge variant="soft" color="warning">
 *   Pending
 * </Badge>
 * ```
 */
export const Badge = createComponent(BadgeDef) as DefineComponent<BadgeProps>;
