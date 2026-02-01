import type { DefineComponent } from 'vue';
import { Input as InputDef, type InputStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Input component props.
 * Combines style props with specific allowed native props.
 */
export type InputProps = Prettify<
  InputStyleProps & {
    /** Input handler */
    onInput?: (e: Event) => void;
    /** Change handler */
    onChange?: (e: Event) => void;
    /** Focus handler */
    onFocus?: (e: FocusEvent) => void;
    /** Blur handler */
    onBlur?: (e: FocusEvent) => void;
    /** Additional CSS class */
    class?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Input type */
    type?: string;
    /** Input value */
    value?: string;
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * Input component with multiple variants, colors, and sizes.
 *
 * @example
 * ```vue
 * <Input variant="outline" color="primary" size="md" placeholder="Enter text" />
 *
 * <Input :error="true" placeholder="Error state" />
 *
 * <Input :disabled="true" placeholder="Disabled" />
 * ```
 */
export const Input = createComponent(InputDef) as DefineComponent<InputProps>;
