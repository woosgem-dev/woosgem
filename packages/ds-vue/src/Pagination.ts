import type { DefineComponent } from 'vue';
import {
  Pagination as PaginationDef,
  PaginationItem as PaginationItemDef,
  type PaginationStyleProps,
  type PaginationItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type PaginationProps = Prettify<
  PaginationStyleProps & {
    class?: string;
  }
>;

export const Pagination = createComponent(PaginationDef) as DefineComponent<PaginationProps>;

export type PaginationItemProps = Prettify<
  PaginationItemStyleProps & {
    class?: string;
  }
>;

export const PaginationItem = createComponent(PaginationItemDef) as DefineComponent<PaginationItemProps>;
