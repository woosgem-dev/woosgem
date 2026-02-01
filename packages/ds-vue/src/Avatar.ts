import type { DefineComponent } from 'vue';
import { Avatar as AvatarDef, type AvatarStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Avatar component props.
 * Combines style props with specific allowed native props.
 */
export type AvatarProps = Prettify<
  AvatarStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * Avatar component with multiple sizes and shapes.
 *
 * @example
 * ```vue
 * <Avatar size="md" shape="circle" src="/avatar.jpg" alt="User Avatar" />
 *
 * <Avatar size="lg" shape="square" fallback="JD">
 *   John Doe
 * </Avatar>
 *
 * <Avatar size="sm">
 *   AB
 * </Avatar>
 * ```
 */
export const Avatar = createComponent(AvatarDef) as DefineComponent<AvatarProps>;
