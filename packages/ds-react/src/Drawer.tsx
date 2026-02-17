import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Drawer as DrawerDef, type DrawerStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type DrawerProps = Prettify<
  DrawerStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof DrawerStyleProps | 'data-position' | 'data-size' | 'role' | 'aria-modal'
    > & {
      'data-position'?: never;
      'data-size'?: never;
      role?: never;
      'aria-modal'?: never;
    }
>;

export type DrawerRef = HTMLDivElement;

const BaseDrawer = createComponent(DrawerDef);

export const Drawer = BaseDrawer as ComponentType<DrawerProps>;
