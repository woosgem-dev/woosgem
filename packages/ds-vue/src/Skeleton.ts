import type { DefineComponent } from 'vue';
import { Skeleton as SkeletonDef, type SkeletonStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type SkeletonProps = Prettify<
  SkeletonStyleProps & {
    class?: string;
  }
>;

export const Skeleton = createComponent(SkeletonDef) as DefineComponent<SkeletonProps>;
