import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Tab as TabDef, type TabStyleProps, type Prettify } from '@woosgem/ds-core';
import { createComponent } from './_internal/createComponent';

/**
 * Tab component props.
 * Combines style props with all standard button HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type TabProps = Prettify<
  TabStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof TabStyleProps | 'data-variant' | 'data-size' | 'data-state' | 'data-full-width' | 'role' | 'aria-selected'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-state'?: never;
      'data-full-width'?: never;
      role?: never;
      'aria-selected'?: never;
    }
>;

/** Ref type for Tab component */
export type TabRef = HTMLButtonElement;

const BaseTab = createComponent(TabDef);

/**
 * Tab component with variants, sizes, and selection states.
 *
 * @example
 * ```tsx
 * <Tab variant="underline" size="md" selected>
 *   Home
 * </Tab>
 *
 * <Tab variant="filled" disabled>
 *   Disabled
 * </Tab>
 *
 * <Tab fullWidth>
 *   Full Width
 * </Tab>
 * ```
 */
export const Tab = BaseTab as ComponentType<TabProps>;
