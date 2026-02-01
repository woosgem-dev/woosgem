import type { DefineComponent } from 'vue';
import { Checkbox as CheckboxDef, type CheckboxStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Checkbox component props.
 * Combines style props with specific allowed native props.
 */
export type CheckboxProps = Prettify<
  CheckboxStyleProps & {
    /** Change handler */
    onChange?: (e: Event) => void;
    /** Additional CSS class */
    class?: string;
    /** Checkbox name */
    name?: string;
    /** Checkbox id */
    id?: string;
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * Checkbox component with multiple colors and sizes.
 *
 * @example
 * ```vue
 * <Checkbox color="primary" size="md" />
 *
 * <Checkbox :checked="true" color="success" />
 *
 * <Checkbox :disabled="true" />
 * ```
 */
export const Checkbox = createComponent(CheckboxDef) as DefineComponent<CheckboxProps>;
