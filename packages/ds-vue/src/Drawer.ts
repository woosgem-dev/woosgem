import type { DefineComponent } from 'vue';
import { Drawer as DrawerDef, type DrawerStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type DrawerProps = Prettify<
  DrawerStyleProps & {
    class?: string;
  }
>;

export const Drawer = createComponent(DrawerDef) as DefineComponent<DrawerProps>;
