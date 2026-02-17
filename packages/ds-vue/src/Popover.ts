import type { DefineComponent } from 'vue';
import {
  Popover as PopoverDef,
  PopoverArrow as PopoverArrowDef,
  type PopoverStyleProps,
  type PopoverArrowStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type PopoverProps = Prettify<PopoverStyleProps & { class?: string }>;
export const Popover = createComponent(PopoverDef) as DefineComponent<PopoverProps>;

export type PopoverArrowProps = Prettify<PopoverArrowStyleProps & { class?: string }>;
export const PopoverArrow = createComponent(PopoverArrowDef) as DefineComponent<PopoverArrowProps>;
