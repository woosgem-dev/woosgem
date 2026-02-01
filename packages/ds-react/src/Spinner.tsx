import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Spinner as SpinnerDef, type SpinnerStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Spinner component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type SpinnerProps = Prettify<
  SpinnerStyleProps &
    Omit<ComponentPropsWithoutRef<'div'>, keyof SpinnerStyleProps | 'data-size' | 'data-color' | 'role'> & {
      'data-size'?: never;
      'data-color'?: never;
      role?: never;
    }
>;

/** Ref type for Spinner component */
export type SpinnerRef = HTMLDivElement;

const BaseSpinner = createComponent(SpinnerDef);

/**
 * Spinner component for loading states.
 *
 * @example
 * ```tsx
 * <Spinner />
 *
 * <Spinner size="lg" color="secondary" />
 *
 * <Spinner label="데이터 불러오는 중..." />
 * ```
 */
export const Spinner = BaseSpinner as ComponentType<SpinnerProps>;
