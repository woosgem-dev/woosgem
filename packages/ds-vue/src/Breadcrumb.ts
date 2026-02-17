import type { DefineComponent } from 'vue';
import {
  Breadcrumb as BreadcrumbDef,
  BreadcrumbItem as BreadcrumbItemDef,
  type BreadcrumbStyleProps,
  type BreadcrumbItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type BreadcrumbProps = Prettify<
  BreadcrumbStyleProps & {
    class?: string;
  }
>;

export const Breadcrumb = createComponent(BreadcrumbDef) as DefineComponent<BreadcrumbProps>;

export type BreadcrumbItemProps = Prettify<
  BreadcrumbItemStyleProps & {
    class?: string;
  }
>;

export const BreadcrumbItem = createComponent(BreadcrumbItemDef) as DefineComponent<BreadcrumbItemProps>;
