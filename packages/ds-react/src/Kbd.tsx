import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Kbd as KbdDef, type KbdStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type KbdProps = Prettify<
  KbdStyleProps &
    Omit<
      ComponentPropsWithoutRef<'kbd'>,
      keyof KbdStyleProps | 'data-size' | 'data-variant'
    > & {
      'data-size'?: never;
      'data-variant'?: never;
    }
>;

export type KbdRef = HTMLElement;

export const Kbd = createComponent(KbdDef) as ComponentType<KbdProps>;
