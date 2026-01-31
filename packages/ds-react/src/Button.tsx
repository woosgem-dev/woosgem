import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Button as ButtonDef, type ButtonStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Button component props.
 * Combines style props with all standard button HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type ButtonProps = Prettify<
  ButtonStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof ButtonStyleProps | 'data-variant' | 'data-color' | 'data-size' | 'data-state' | 'data-full-width'
    > & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
      'data-state'?: never;
      'data-full-width'?: never;
    }
>;

/** Ref type for Button component */
export type ButtonRef = HTMLButtonElement;

const BaseButton = createComponent(ButtonDef, { type: 'button' });

/**
 * Button component with multiple variants, colors, and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="filled" color="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button loading>Loading...</Button>
 *
 * <Button variant="outline" color="danger">
 *   Delete
 * </Button>
 * ```
 */
export const Button = BaseButton as ComponentType<ButtonProps>;
