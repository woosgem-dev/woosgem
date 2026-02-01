import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Input as InputDef, type InputStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Input component props.
 * Combines style props with all standard input HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type InputProps = Prettify<
  InputStyleProps &
    Omit<
      ComponentPropsWithoutRef<'input'>,
      keyof InputStyleProps | 'data-variant' | 'data-size' | 'data-state'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-state'?: never;
    }
>;

/** Ref type for Input component */
export type InputRef = HTMLInputElement;

const BaseInput = createComponent(InputDef);

/**
 * Input component with multiple variants and states.
 *
 * @example
 * ```tsx
 * <Input variant="outline" size="md" placeholder="Enter text" />
 *
 * <Input error placeholder="Invalid input" />
 *
 * <Input success placeholder="Valid input" />
 *
 * <Input variant="filled" disabled placeholder="Disabled" />
 * ```
 */
export const Input = BaseInput as ComponentType<InputProps>;
