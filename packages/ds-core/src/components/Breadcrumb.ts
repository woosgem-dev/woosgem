import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';
import { cls, clsEl } from '../constants';

export const BreadcrumbSizes = ['sm', 'md', 'lg'] as const;
export type BreadcrumbSize = (typeof BreadcrumbSizes)[number];

export interface BreadcrumbStyleProps {
  separator?: string;
  size?: BreadcrumbSize;
}

export interface BreadcrumbAttrs {
  class: string;
  'data-size': BreadcrumbSize;
  'aria-label': string;
}

export const Breadcrumb = {
  displayName: 'Breadcrumb',
  defaultProps: {
    separator: '/',
    size: 'md',
  },
  propTypes: {
    size: BreadcrumbSizes,
  },
  mapPropsToAttrs: (props: BreadcrumbStyleProps): BreadcrumbAttrs => {
    const merged = { ...Breadcrumb.defaultProps, ...filterNullish(props) };
    return {
      class: cls('breadcrumb'),
      'data-size': merged.size,
      'aria-label': 'Breadcrumb',
    };
  },
  template: {
    tag: 'nav',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<BreadcrumbStyleProps, BreadcrumbAttrs, 'nav'>;

// BreadcrumbItem
export interface BreadcrumbItemStyleProps {
  active?: boolean;
  disabled?: boolean;
}

export interface BreadcrumbItemAttrs {
  class: string;
  'data-state'?: 'active' | 'disabled' | undefined;
  'aria-current'?: 'page' | undefined;
  'aria-disabled'?: 'true' | undefined;
}

export const BreadcrumbItem = {
  displayName: 'BreadcrumbItem',
  defaultProps: {
    active: false,
    disabled: false,
  },
  propTypes: {},
  mapPropsToAttrs: (props: BreadcrumbItemStyleProps): BreadcrumbItemAttrs => {
    const merged = { ...BreadcrumbItem.defaultProps, ...filterNullish(props) };
    const state = merged.active ? 'active' : merged.disabled ? 'disabled' : undefined;
    return {
      class: clsEl('breadcrumb', 'item'),
      'data-state': state,
      'aria-current': merged.active ? 'page' : undefined,
      'aria-disabled': merged.disabled ? 'true' : undefined,
    };
  },
  template: {
    tag: 'li',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<BreadcrumbItemStyleProps, BreadcrumbItemAttrs, 'li'>;
