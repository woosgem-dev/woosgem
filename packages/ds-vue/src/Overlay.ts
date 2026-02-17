import type { DefineComponent } from 'vue';
import { Overlay as OverlayDef, type OverlayStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type OverlayProps = Prettify<
  OverlayStyleProps & {
    class?: string;
  }
>;

export const Overlay = createComponent(OverlayDef) as DefineComponent<OverlayProps>;
