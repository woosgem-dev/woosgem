import type { DefineComponent } from 'vue';
import { AvatarGroup as AvatarGroupDef, type AvatarGroupStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type AvatarGroupProps = Prettify<
  AvatarGroupStyleProps & {
    class?: string;
  }
>;

export const AvatarGroup = createComponent(AvatarGroupDef) as DefineComponent<AvatarGroupProps>;
