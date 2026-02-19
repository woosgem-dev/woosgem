import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Overlay as OverlayDef, type OverlayStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type OverlayProps = Prettify<
  OverlayStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof OverlayStyleProps | 'data-blur' | 'data-opacity' | 'data-level' | 'data-visible' | 'aria-hidden'
    > & {
      'data-blur'?: never;
      'data-opacity'?: never;
      'data-level'?: never;
      'data-visible'?: never;
      'aria-hidden'?: never;
    }
>;

export type OverlayRef = HTMLDivElement;

export const Overlay = createComponent(OverlayDef) as ComponentType<OverlayProps>;
