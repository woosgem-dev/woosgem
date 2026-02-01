import type { DefineComponent } from 'vue';
import { Textarea as TextareaDef, type TextareaStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Textarea component props.
 * Combines style props with specific allowed native props.
 */
export type TextareaProps = Prettify<
  TextareaStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Number of visible text lines */
    rows?: number;
  }
>;

/**
 * Textarea component for multi-line text input.
 *
 * @example
 * ```vue
 * <Textarea placeholder="Enter description..." />
 *
 * <Textarea variant="filled" size="lg" />
 *
 * <Textarea resize="none" :rows="5" />
 *
 * <Textarea :error="true" aria-describedby="error-message" />
 * ```
 */
export const Textarea = createComponent(TextareaDef) as DefineComponent<TextareaProps>;
