import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Textarea as TextareaDef, type TextareaStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent';

/**
 * Textarea component props.
 * Combines style props with all standard textarea HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type TextareaProps = Prettify<
  TextareaStyleProps &
    Omit<
      ComponentPropsWithoutRef<'textarea'>,
      keyof TextareaStyleProps | 'data-variant' | 'data-size' | 'data-resize' | 'data-state'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-resize'?: never;
      'data-state'?: never;
    }
>;

/** Ref type for Textarea component */
export type TextareaRef = HTMLTextAreaElement;

const BaseTextarea = createComponent(TextareaDef);

/**
 * Textarea component for multi-line text input.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter description..." />
 *
 * <Textarea variant="filled" size="lg" />
 *
 * <Textarea resize="none" rows={5} />
 *
 * <Textarea error aria-describedby="error-message" />
 * ```
 */
export const Textarea = BaseTextarea as ComponentType<TextareaProps>;
