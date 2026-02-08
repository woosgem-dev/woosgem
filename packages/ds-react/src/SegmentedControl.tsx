import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
  type SegmentedControlStyleProps,
  type SegmentedControlItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * SegmentedControl component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type SegmentedControlProps = Prettify<
  SegmentedControlStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof SegmentedControlStyleProps | 'data-size' | 'data-full-width' | 'data-disabled' | 'role'
    > & {
      'data-size'?: never;
      'data-full-width'?: never;
      'data-disabled'?: never;
      role?: never;
    }
>;

/**
 * SegmentedControlItem component props.
 * Combines style props with all standard button HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type SegmentedControlItemProps = Prettify<
  SegmentedControlItemStyleProps &
    Omit<ComponentPropsWithoutRef<'button'>, keyof SegmentedControlItemStyleProps | 'data-state' | 'aria-selected'> & {
      'data-state'?: never;
      'aria-selected'?: never;
    }
>;

/** Ref type for SegmentedControl component */
export type SegmentedControlRef = HTMLDivElement;

/** Ref type for SegmentedControlItem component */
export type SegmentedControlItemRef = HTMLButtonElement;

const BaseSegmentedControl = createComponent(SegmentedControlDef);
const BaseSegmentedControlItem = createComponent(SegmentedControlItemDef);

/**
 * SegmentedControl component for grouped button selections.
 *
 * @example
 * ```tsx
 * <SegmentedControl size="md">
 *   <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>
 *   <SegmentedControl.Item>Option 2</SegmentedControl.Item>
 *   <SegmentedControl.Item disabled>Option 3</SegmentedControl.Item>
 * </SegmentedControl>
 *
 * <SegmentedControl size="lg" fullWidth>
 *   <SegmentedControl.Item>All</SegmentedControl.Item>
 *   <SegmentedControl.Item selected>Active</SegmentedControl.Item>
 *   <SegmentedControl.Item>Archived</SegmentedControl.Item>
 * </SegmentedControl>
 * ```
 */
export const SegmentedControl = BaseSegmentedControl as unknown as ComponentType<SegmentedControlProps> & {
  Item: ComponentType<SegmentedControlItemProps>;
};

/**
 * SegmentedControlItem component for individual items within SegmentedControl.
 */
export const SegmentedControlItem = BaseSegmentedControlItem as ComponentType<SegmentedControlItemProps>;

// Attach Item as a property for compound component pattern
SegmentedControl.Item = SegmentedControlItem;
