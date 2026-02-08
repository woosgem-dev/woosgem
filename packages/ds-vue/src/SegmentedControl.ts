import type { DefineComponent } from 'vue';
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
 * Combines style props with specific allowed native props.
 */
export type SegmentedControlProps = Prettify<
  SegmentedControlStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * SegmentedControlItem component props.
 * Combines style props with specific allowed native props.
 */
export type SegmentedControlItemProps = Prettify<
  SegmentedControlItemStyleProps & {
    /** Click handler */
    onClick?: (e: MouseEvent) => void;
    /** Additional CSS class */
    class?: string;
    /** Button type for forms */
    type?: 'button' | 'submit' | 'reset';
    /** Accessible label */
    'aria-label'?: string;
  }
>;

/**
 * SegmentedControl component for grouping related options.
 *
 * @example
 * ```vue
 * <SegmentedControl size="md" :fullWidth="true">
 *   <SegmentedControlItem :selected="true">Day</SegmentedControlItem>
 *   <SegmentedControlItem>Week</SegmentedControlItem>
 *   <SegmentedControlItem>Month</SegmentedControlItem>
 * </SegmentedControl>
 *
 * <SegmentedControl size="lg" :disabled="true">
 *   <SegmentedControlItem>Option 1</SegmentedControlItem>
 *   <SegmentedControlItem>Option 2</SegmentedControlItem>
 * </SegmentedControl>
 * ```
 */
export const SegmentedControl = createComponent(SegmentedControlDef) as DefineComponent<SegmentedControlProps>;

/**
 * SegmentedControlItem component for individual items within SegmentedControl.
 *
 * @example
 * ```vue
 * <SegmentedControlItem :selected="true">Active</SegmentedControlItem>
 * <SegmentedControlItem :disabled="true">Disabled</SegmentedControlItem>
 * ```
 */
export const SegmentedControlItem = createComponent(
  SegmentedControlItemDef
) as DefineComponent<SegmentedControlItemProps>;
