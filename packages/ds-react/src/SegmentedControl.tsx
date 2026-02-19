import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  SegmentedControl as SegmentedControlDef,
  SegmentedControlItem as SegmentedControlItemDef,
  type SegmentedControlStyleProps,
  type SegmentedControlItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

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

export type SegmentedControlItemProps = Prettify<
  SegmentedControlItemStyleProps &
    Omit<ComponentPropsWithoutRef<'button'>, keyof SegmentedControlItemStyleProps | 'data-state' | 'aria-selected'> & {
      'data-state'?: never;
      'aria-selected'?: never;
    }
>;

export type SegmentedControlRef = HTMLDivElement;

export type SegmentedControlItemRef = HTMLButtonElement;

export const SegmentedControlItem = createComponent(
  SegmentedControlItemDef,
) as ComponentType<SegmentedControlItemProps>;

export const SegmentedControl = Object.assign(
  createComponent(SegmentedControlDef) as ComponentType<SegmentedControlProps>,
  { Item: SegmentedControlItem },
);
