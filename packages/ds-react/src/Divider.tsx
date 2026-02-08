import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Divider as DividerDef, type DividerStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Divider component props.
 * Combines style props with all standard hr HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type DividerProps = Prettify<
  DividerStyleProps &
    Omit<
      ComponentPropsWithoutRef<'hr'>,
      | keyof DividerStyleProps
      | 'data-orientation'
      | 'data-variant'
      | 'data-spacing'
      | 'role'
      | 'aria-orientation'
    > & {
      'data-orientation'?: never;
      'data-variant'?: never;
      'data-spacing'?: never;
      role?: never;
      'aria-orientation'?: never;
    }
>;

/** Ref type for Divider component */
export type DividerRef = HTMLHRElement;

const BaseDivider = createComponent(DividerDef);

/**
 * Divider component for visual separation.
 *
 * @example
 * ```tsx
 * <Divider />
 *
 * <Divider variant="dashed" spacing="lg" />
 *
 * <Divider orientation="vertical" spacing="sm" />
 * ```
 */
export const Divider = BaseDivider as ComponentType<DividerProps>;
