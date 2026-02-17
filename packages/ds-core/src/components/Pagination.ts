import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';

export const PaginationVariants = ['outline', 'filled', 'ghost'] as const;
export type PaginationVariant = (typeof PaginationVariants)[number];

export const PaginationSizes = ['sm', 'md', 'lg'] as const;
export type PaginationSize = (typeof PaginationSizes)[number];

export const PaginationShapes = ['rounded', 'circle'] as const;
export type PaginationShape = (typeof PaginationShapes)[number];

export interface PaginationStyleProps {
  variant?: PaginationVariant;
  size?: PaginationSize;
  shape?: PaginationShape;
}

export interface PaginationAttrs {
  class: string;
  'data-variant': PaginationVariant;
  'data-size': PaginationSize;
  'data-shape': PaginationShape;
  role: 'navigation';
  'aria-label': string;
}

export const Pagination = {
  displayName: 'Pagination',
  defaultProps: {
    variant: 'outline',
    size: 'md',
    shape: 'rounded',
  },
  propTypes: {
    variant: PaginationVariants,
    size: PaginationSizes,
    shape: PaginationShapes,
  },
  mapPropsToAttrs: (props: PaginationStyleProps): PaginationAttrs => {
    const merged = { ...Pagination.defaultProps, ...filterNullish(props) };
    return {
      class: 'pagination',
      'data-variant': merged.variant,
      'data-size': merged.size,
      'data-shape': merged.shape,
      role: 'navigation',
      'aria-label': 'Pagination',
    };
  },
  template: {
    tag: 'nav',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<PaginationStyleProps, PaginationAttrs, 'nav'>;

// PaginationItem
export interface PaginationItemStyleProps {
  active?: boolean;
  disabled?: boolean;
}

export interface PaginationItemAttrs {
  class: string;
  type: 'button';
  'data-state'?: 'active' | 'disabled' | undefined;
  'aria-current'?: 'page' | undefined;
  'aria-disabled'?: 'true' | undefined;
}

export const PaginationItem = {
  displayName: 'PaginationItem',
  defaultProps: {
    active: false,
    disabled: false,
  },
  propTypes: {},
  mapPropsToAttrs: (props: PaginationItemStyleProps): PaginationItemAttrs => {
    const merged = { ...PaginationItem.defaultProps, ...filterNullish(props) };
    const state = merged.active ? 'active' : merged.disabled ? 'disabled' : undefined;
    return {
      class: 'pagination-item',
      type: 'button',
      'data-state': state,
      'aria-current': merged.active ? 'page' : undefined,
      'aria-disabled': merged.disabled ? 'true' : undefined,
    };
  },
  template: {
    tag: 'button',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<PaginationItemStyleProps, PaginationItemAttrs, 'button'>;
