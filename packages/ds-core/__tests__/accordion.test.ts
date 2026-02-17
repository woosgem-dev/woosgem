import { describe, it, expect } from 'vitest';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionTypes,
  AccordionSizes,
  AccordionVariants,
} from '@woosgem-dev/core';

describe('Accordion Core', () => {
  describe('displayName', () => {
    it('should have displayName "Accordion"', () => {
      expect(Accordion.displayName).toBe('Accordion');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Accordion.defaultProps).toEqual({
        type: 'single',
        size: 'md',
        variant: 'outline',
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct type options', () => {
      expect(AccordionTypes).toEqual(['single', 'multiple']);
    });

    it('should have correct size options', () => {
      expect(AccordionSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct variant options', () => {
      expect(AccordionVariants).toEqual(['outline', 'filled', 'ghost']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Accordion.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-accordion',
        'data-type': 'single',
        'data-size': 'md',
        'data-variant': 'outline',
      });
    });

    it('should apply type prop', () => {
      for (const type of AccordionTypes) {
        const attrs = Accordion.mapPropsToAttrs({ type });
        expect(attrs['data-type']).toBe(type);
      }
    });

    it('should apply size prop', () => {
      for (const size of AccordionSizes) {
        const attrs = Accordion.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply variant prop', () => {
      for (const variant of AccordionVariants) {
        const attrs = Accordion.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should use default values for undefined props', () => {
      const attrs = Accordion.mapPropsToAttrs({ type: undefined, size: undefined, variant: undefined });
      expect(attrs['data-type']).toBe('single');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-variant']).toBe('outline');
    });

    it('should combine multiple props', () => {
      const attrs = Accordion.mapPropsToAttrs({
        type: 'multiple',
        size: 'lg',
        variant: 'filled',
      });
      expect(attrs).toEqual({
        class: 'wg-accordion',
        'data-type': 'multiple',
        'data-size': 'lg',
        'data-variant': 'filled',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Accordion.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Accordion.template.slots).toEqual(['default']);
    });
  });
});

describe('AccordionItem Core', () => {
  it('should have displayName "AccordionItem"', () => {
    expect(AccordionItem.displayName).toBe('AccordionItem');
  });

  it('should have correct default props', () => {
    expect(AccordionItem.defaultProps).toEqual({
      open: false,
      disabled: false,
    });
  });

  it('should return default attrs when no props provided', () => {
    const attrs = AccordionItem.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'wg-accordion__item',
      'data-state': undefined,
    });
  });

  it('should set data-state to "open" when open is true', () => {
    const attrs = AccordionItem.mapPropsToAttrs({ open: true });
    expect(attrs['data-state']).toBe('open');
  });

  it('should set data-state to "disabled" when disabled is true', () => {
    const attrs = AccordionItem.mapPropsToAttrs({ disabled: true });
    expect(attrs['data-state']).toBe('disabled');
  });

  it('should prioritize "open" over "disabled" when both are true', () => {
    const attrs = AccordionItem.mapPropsToAttrs({ open: true, disabled: true });
    expect(attrs['data-state']).toBe('open');
  });

  it('should have no data-state when both are false', () => {
    const attrs = AccordionItem.mapPropsToAttrs({ open: false, disabled: false });
    expect(attrs['data-state']).toBeUndefined();
  });

  it('should use div tag', () => {
    expect(AccordionItem.template.tag).toBe('div');
  });
});

describe('AccordionTrigger Core', () => {
  it('should have displayName "AccordionTrigger"', () => {
    expect(AccordionTrigger.displayName).toBe('AccordionTrigger');
  });

  it('should return correct attrs', () => {
    const attrs = AccordionTrigger.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'wg-accordion__trigger',
      type: 'button',
    });
  });

  it('should use button tag', () => {
    expect(AccordionTrigger.template.tag).toBe('button');
  });
});

describe('AccordionContent Core', () => {
  it('should have displayName "AccordionContent"', () => {
    expect(AccordionContent.displayName).toBe('AccordionContent');
  });

  it('should return correct attrs', () => {
    const attrs = AccordionContent.mapPropsToAttrs();
    expect(attrs).toEqual({
      class: 'wg-accordion__content',
      role: 'region',
    });
  });

  it('should use div tag', () => {
    expect(AccordionContent.template.tag).toBe('div');
  });
});
