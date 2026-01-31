import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Checkbox as CheckboxDef, type CheckboxStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './createComponent.js';

/**
 * Checkbox component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type CheckboxProps = Prettify<
  CheckboxStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof CheckboxStyleProps | 'data-size' | 'data-state'> & {
      'data-size'?: never;
      'data-state'?: never;
    }
>;

/** Ref type for Checkbox component */
export type CheckboxRef = HTMLDivElement;

const BaseCheckbox = createComponent(CheckboxDef);

/**
 * Checkbox component with support for checked, indeterminate, and disabled states.
 *
 * @example
 * ```tsx
 * <Checkbox checked>Accept terms</Checkbox>
 *
 * <Checkbox indeterminate>Select all</Checkbox>
 *
 * <Checkbox disabled>Disabled option</Checkbox>
 *
 * <Checkbox size="lg" checked>Large checkbox</Checkbox>
 * ```
 */
export const Checkbox = BaseCheckbox as ComponentType<CheckboxProps>;
