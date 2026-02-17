import type { DefineComponent } from 'vue';
import { Kbd as KbdDef, type KbdStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type KbdProps = Prettify<
  KbdStyleProps & {
    class?: string;
  }
>;

export const Kbd = createComponent(KbdDef) as DefineComponent<KbdProps>;
