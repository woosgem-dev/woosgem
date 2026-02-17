import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import {
  Breadcrumb as BreadcrumbDef,
  BreadcrumbItem as BreadcrumbItemDef,
  type BreadcrumbStyleProps,
  type BreadcrumbItemStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

export type BreadcrumbProps = Prettify<
  BreadcrumbStyleProps &
    Omit<
      ComponentPropsWithoutRef<'nav'>,
      keyof BreadcrumbStyleProps | 'data-size' | 'aria-label'
    > & {
      'data-size'?: never;
      'aria-label'?: string;
    }
>;

export type BreadcrumbRef = HTMLElement;

const BaseBreadcrumb = createComponent(BreadcrumbDef);

export const Breadcrumb = BaseBreadcrumb as ComponentType<BreadcrumbProps>;

// BreadcrumbItem
export type BreadcrumbItemProps = Prettify<
  BreadcrumbItemStyleProps &
    Omit<
      ComponentPropsWithoutRef<'li'>,
      keyof BreadcrumbItemStyleProps | 'data-state' | 'aria-current' | 'aria-disabled'
    > & {
      'data-state'?: never;
      'aria-current'?: never;
      'aria-disabled'?: never;
    }
>;

export type BreadcrumbItemRef = HTMLLIElement;

const BaseBreadcrumbItem = createComponent(BreadcrumbItemDef);

export const BreadcrumbItem = BaseBreadcrumbItem as ComponentType<BreadcrumbItemProps>;
