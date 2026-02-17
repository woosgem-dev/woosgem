import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  Popover as PopoverDef,
  PopoverArrow as PopoverArrowDef,
  type PopoverStyleProps,
  type PopoverArrowStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type PopoverProps = Prettify<
  PopoverStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof PopoverStyleProps | 'data-position' | 'data-size' | 'data-variant' | 'role'
    > & {
      'data-position'?: never;
      'data-size'?: never;
      'data-variant'?: never;
      role?: never;
    }
>;
export type PopoverRef = HTMLDivElement;
export const Popover = createComponent(PopoverDef) as ComponentType<PopoverProps>;

export type PopoverArrowProps = Prettify<PopoverArrowStyleProps & ComponentPropsWithoutRef<'div'>>;
export type PopoverArrowRef = HTMLDivElement;
export const PopoverArrow = createComponent(PopoverArrowDef) as ComponentType<PopoverArrowProps>;
