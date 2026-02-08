import type { DefineComponent } from 'vue';
import { Button as ButtonDef, type ButtonStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Button component props.
 * Combines style props with specific allowed native props.
 */
export type ButtonProps = Prettify<
  ButtonStyleProps & {
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
 * Button component with multiple variants, colors, and sizes.
 *
 * @example
 * ```vue
 * <Button variant="filled" color="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button :loading="true">Loading...</Button>
 *
 * <Button variant="outline" color="danger">
 *   Delete
 * </Button>
 * ```
 */
export const Button = createComponent(ButtonDef) as DefineComponent<ButtonProps>;
