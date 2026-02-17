import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';
import { cls, clsEl } from '../constants';

export const SliderSizes = ['sm', 'md', 'lg'] as const;
export type SliderSize = (typeof SliderSizes)[number];

export const SliderColors = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;
export type SliderColor = (typeof SliderColors)[number];

export const SliderOrientations = ['horizontal', 'vertical'] as const;
export type SliderOrientation = (typeof SliderOrientations)[number];

export interface SliderStyleProps {
  size?: SliderSize;
  color?: SliderColor;
  disabled?: boolean;
  orientation?: SliderOrientation;
}

export interface SliderAttrs {
  class: string;
  'data-size': SliderSize;
  'data-color': SliderColor;
  'data-orientation': SliderOrientation;
  'data-state'?: 'disabled' | undefined;
  'aria-disabled'?: 'true' | undefined;
}

export const Slider = {
  displayName: 'Slider',

  defaultProps: {
    size: 'md',
    color: 'primary',
    disabled: false,
    orientation: 'horizontal',
  },

  propTypes: {
    size: SliderSizes,
    color: SliderColors,
    orientation: SliderOrientations,
  },

  mapPropsToAttrs: (props: SliderStyleProps): SliderAttrs => {
    const merged = { ...Slider.defaultProps, ...filterNullish(props) };
    return {
      class: cls('slider'),
      'data-size': merged.size,
      'data-color': merged.color,
      'data-orientation': merged.orientation,
      'data-state': merged.disabled ? 'disabled' : undefined,
      'aria-disabled': merged.disabled ? 'true' : undefined,
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<SliderStyleProps, SliderAttrs, 'div'>;

// ============================================
// SliderTrack
// ============================================

export interface SliderTrackStyleProps {}

export interface SliderTrackAttrs {
  class: string;
}

export const SliderTrack = {
  displayName: 'SliderTrack',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): SliderTrackAttrs => ({
    class: clsEl('slider', 'track'),
  }),

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<Record<string, never>, SliderTrackAttrs, 'div'>;

// ============================================
// SliderFill
// ============================================

export interface SliderFillStyleProps {}

export interface SliderFillAttrs {
  class: string;
}

export const SliderFill = {
  displayName: 'SliderFill',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): SliderFillAttrs => ({
    class: clsEl('slider', 'fill'),
  }),

  template: {
    tag: 'div',
    slots: [] as const,
  },
} as const satisfies ComponentDefinition<Record<string, never>, SliderFillAttrs, 'div'>;

// ============================================
// SliderThumb
// ============================================

export interface SliderThumbStyleProps {}

export interface SliderThumbAttrs {
  class: string;
  role: 'slider';
  tabindex: '0';
}

export const SliderThumb = {
  displayName: 'SliderThumb',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): SliderThumbAttrs => ({
    class: clsEl('slider', 'thumb'),
    role: 'slider',
    tabindex: '0',
  }),

  template: {
    tag: 'div',
    slots: [] as const,
  },
} as const satisfies ComponentDefinition<Record<string, never>, SliderThumbAttrs, 'div'>;
