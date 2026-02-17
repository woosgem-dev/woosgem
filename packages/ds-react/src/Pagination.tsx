import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  Pagination as PaginationDef,
  PaginationItem as PaginationItemDef,
  type PaginationStyleProps,
  type PaginationItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

// Pagination
export type PaginationProps = Prettify<
  PaginationStyleProps &
    Omit<
      ComponentPropsWithoutRef<'nav'>,
      keyof PaginationStyleProps | 'data-variant' | 'data-size' | 'data-shape' | 'role' | 'aria-label'
    > & {
      'data-variant'?: never;
      'data-size'?: never;
      'data-shape'?: never;
      role?: never;
      'aria-label'?: string;
    }
>;

export type PaginationRef = HTMLElement;

const BasePagination = createComponent(PaginationDef);

export const Pagination = BasePagination as ComponentType<PaginationProps>;

// PaginationItem
export type PaginationItemProps = Prettify<
  PaginationItemStyleProps &
    Omit<
      ComponentPropsWithoutRef<'button'>,
      keyof PaginationItemStyleProps | 'type' | 'data-state' | 'aria-current' | 'aria-disabled'
    > & {
      'data-state'?: never;
      'aria-current'?: never;
      'aria-disabled'?: never;
      type?: never;
    }
>;

export type PaginationItemRef = HTMLButtonElement;

const BasePaginationItem = createComponent(PaginationItemDef);

export const PaginationItem = BasePaginationItem as ComponentType<PaginationItemProps>;
