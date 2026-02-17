import type { ComponentDefinition } from '../types';
import { filterNullish } from '../types';

export const AccordionTypes = ['single', 'multiple'] as const;
export type AccordionType = (typeof AccordionTypes)[number];

export const AccordionSizes = ['sm', 'md', 'lg'] as const;
export type AccordionSize = (typeof AccordionSizes)[number];

export const AccordionVariants = ['outline', 'filled', 'ghost'] as const;
export type AccordionVariant = (typeof AccordionVariants)[number];

export interface AccordionStyleProps {
  type?: AccordionType;
  size?: AccordionSize;
  variant?: AccordionVariant;
}

export interface AccordionAttrs {
  class: string;
  'data-type': AccordionType;
  'data-size': AccordionSize;
  'data-variant': AccordionVariant;
}

export const Accordion = {
  displayName: 'Accordion',

  defaultProps: {
    type: 'single',
    size: 'md',
    variant: 'outline',
  },

  propTypes: {
    type: AccordionTypes,
    size: AccordionSizes,
    variant: AccordionVariants,
  },

  mapPropsToAttrs: (props: AccordionStyleProps): AccordionAttrs => {
    const merged = { ...Accordion.defaultProps, ...filterNullish(props) };
    return {
      class: 'accordion',
      'data-type': merged.type,
      'data-size': merged.size,
      'data-variant': merged.variant,
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<AccordionStyleProps, AccordionAttrs, 'div'>;

// ============================================
// AccordionItem
// ============================================

export interface AccordionItemStyleProps {
  open?: boolean;
  disabled?: boolean;
}

export interface AccordionItemAttrs {
  class: string;
  'data-state'?: 'open' | 'disabled' | undefined;
}

export const AccordionItem = {
  displayName: 'AccordionItem',

  defaultProps: {
    open: false,
    disabled: false,
  },

  propTypes: {},

  mapPropsToAttrs: (props: AccordionItemStyleProps): AccordionItemAttrs => {
    const merged = { ...AccordionItem.defaultProps, ...filterNullish(props) };
    const state = merged.open ? 'open' : merged.disabled ? 'disabled' : undefined;
    return {
      class: 'accordion-item',
      'data-state': state,
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<AccordionItemStyleProps, AccordionItemAttrs, 'div'>;

// ============================================
// AccordionTrigger
// ============================================

export interface AccordionTriggerStyleProps {}

export interface AccordionTriggerAttrs {
  class: string;
  type: 'button';
}

export const AccordionTrigger = {
  displayName: 'AccordionTrigger',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): AccordionTriggerAttrs => {
    return {
      class: 'accordion-trigger',
      type: 'button',
    };
  },

  template: {
    tag: 'button',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<Record<string, never>, AccordionTriggerAttrs, 'button'>;

// ============================================
// AccordionContent
// ============================================

export interface AccordionContentStyleProps {}

export interface AccordionContentAttrs {
  class: string;
  role: 'region';
}

export const AccordionContent = {
  displayName: 'AccordionContent',

  defaultProps: {},

  propTypes: {},

  mapPropsToAttrs: (): AccordionContentAttrs => {
    return {
      class: 'accordion-content',
      role: 'region',
    };
  },

  template: {
    tag: 'div',
    slots: ['default'],
  },
} as const satisfies ComponentDefinition<Record<string, never>, AccordionContentAttrs, 'div'>;
