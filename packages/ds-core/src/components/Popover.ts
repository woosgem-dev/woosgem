import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';
import { cls, clsEl } from '../constants';

export const PopoverPositions = ['top', 'bottom', 'left', 'right'] as const;
export type PopoverPosition = (typeof PopoverPositions)[number];

export const PopoverSizes = ['sm', 'md', 'lg'] as const;
export type PopoverSize = (typeof PopoverSizes)[number];

export const PopoverVariants = ['default', 'tooltip'] as const;
export type PopoverVariant = (typeof PopoverVariants)[number];

export interface PopoverStyleProps {
  position?: PopoverPosition;
  size?: PopoverSize;
  variant?: PopoverVariant;
}

export interface PopoverAttrs {
  class: string;
  'data-position': PopoverPosition;
  'data-size': PopoverSize;
  'data-variant': PopoverVariant;
  role: 'dialog';
}

export const Popover = {
  displayName: 'Popover',

  defaultProps: {
    position: 'bottom',
    size: 'md',
    variant: 'default',
  },

  propTypes: {
    position: PopoverPositions,
    size: PopoverSizes,
    variant: PopoverVariants,
  },

  mapPropsToAttrs: (props: PopoverStyleProps): PopoverAttrs => {
    const merged = { ...Popover.defaultProps, ...filterNullish(props) };
    return {
      class: cls('popover'),
      'data-position': merged.position,
      'data-size': merged.size,
      'data-variant': merged.variant,
      role: 'dialog',
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<PopoverStyleProps, PopoverAttrs, 'div'>;

// PopoverArrow
export interface PopoverArrowAttrs {
  class: string;
}

export const PopoverArrow = {
  displayName: 'PopoverArrow',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): PopoverArrowAttrs => ({
    class: clsEl('popover', 'arrow'),
  }),

  template: {
    tag: 'div',
    slots: [] as const,
  },
} as const satisfies ComponentDefinition<Record<string, never>, PopoverArrowAttrs, 'div'>;

export interface PopoverArrowStyleProps {}
