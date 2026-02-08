import { describe, it, expect } from 'vitest';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardVariants,
  CardPaddings,
  CardFooterAligns,
} from '@woosgem-dev/core';

describe('Card Core', () => {
  describe('displayName', () => {
    it('should have displayName "Card"', () => {
      expect(Card.displayName).toBe('Card');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Card.defaultProps).toEqual({
        variant: 'outlined',
        padding: 'md',
        hoverable: false,
        clickable: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(CardVariants).toEqual(['outlined', 'elevated', 'filled']);
    });

    it('should have correct padding options', () => {
      expect(CardPaddings).toEqual(['none', 'sm', 'md', 'lg']);
    });

    it('should have correct footer align options', () => {
      expect(CardFooterAligns).toEqual(['start', 'center', 'end', 'between']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Card.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'card',
        'data-variant': 'outlined',
        'data-padding': 'md',
        'data-hoverable': undefined,
        'data-clickable': undefined,
        role: undefined,
        tabIndex: undefined,
      });
    });

    it('should apply variant prop', () => {
      for (const variant of CardVariants) {
        const attrs = Card.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply padding prop', () => {
      for (const padding of CardPaddings) {
        const attrs = Card.mapPropsToAttrs({ padding });
        expect(attrs['data-padding']).toBe(padding);
      }
    });

    it('should apply hoverable prop', () => {
      const attrs = Card.mapPropsToAttrs({ hoverable: true });
      expect(attrs['data-hoverable']).toBe(true);
    });

    it('should not include data-hoverable when false', () => {
      const attrs = Card.mapPropsToAttrs({ hoverable: false });
      expect(attrs['data-hoverable']).toBeUndefined();
    });

    it('should apply clickable prop and set role/tabIndex', () => {
      const attrs = Card.mapPropsToAttrs({ clickable: true });
      expect(attrs['data-clickable']).toBe(true);
      expect(attrs.role).toBe('button');
      expect(attrs.tabIndex).toBe(0);
    });

    it('should set data-hoverable when clickable is true', () => {
      const attrs = Card.mapPropsToAttrs({ clickable: true });
      expect(attrs['data-hoverable']).toBe(true);
    });

    it('should not set role or tabIndex when not clickable', () => {
      const attrs = Card.mapPropsToAttrs({ clickable: false });
      expect(attrs.role).toBeUndefined();
      expect(attrs.tabIndex).toBeUndefined();
    });

    it('should use default values for undefined props', () => {
      const attrs = Card.mapPropsToAttrs({ variant: undefined, padding: undefined });
      expect(attrs['data-variant']).toBe('outlined');
      expect(attrs['data-padding']).toBe('md');
    });

    it('should combine multiple props', () => {
      const attrs = Card.mapPropsToAttrs({
        variant: 'elevated',
        padding: 'lg',
        hoverable: true,
        clickable: true,
      });
      expect(attrs).toEqual({
        class: 'card',
        'data-variant': 'elevated',
        'data-padding': 'lg',
        'data-hoverable': true,
        'data-clickable': true,
        role: 'button',
        tabIndex: 0,
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Card.template.tag).toBe('div');
    });

    it('should have default, header, footer slots', () => {
      expect(Card.template.slots).toEqual(['default', 'header', 'footer']);
    });
  });
});

describe('CardHeader Core', () => {
  it('should have displayName "CardHeader"', () => {
    expect(CardHeader.displayName).toBe('CardHeader');
  });

  it('should have correct default props', () => {
    expect(CardHeader.defaultProps).toEqual({ divider: false });
  });

  it('should return default attrs', () => {
    const attrs = CardHeader.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'card-header', 'data-divider': undefined });
  });

  it('should apply divider prop', () => {
    expect(CardHeader.mapPropsToAttrs({ divider: true })['data-divider']).toBe(true);
  });

  it('should not include data-divider when false', () => {
    expect(CardHeader.mapPropsToAttrs({ divider: false })['data-divider']).toBeUndefined();
  });
});

describe('CardBody Core', () => {
  it('should have displayName "CardBody"', () => {
    expect(CardBody.displayName).toBe('CardBody');
  });

  it('should return correct attrs', () => {
    expect(CardBody.mapPropsToAttrs()).toEqual({ class: 'card-body' });
  });
});

describe('CardFooter Core', () => {
  it('should have displayName "CardFooter"', () => {
    expect(CardFooter.displayName).toBe('CardFooter');
  });

  it('should have correct default props', () => {
    expect(CardFooter.defaultProps).toEqual({ divider: false, align: 'start' });
  });

  it('should return default attrs', () => {
    const attrs = CardFooter.mapPropsToAttrs({});
    expect(attrs).toEqual({ class: 'card-footer', 'data-divider': undefined, 'data-align': 'start' });
  });

  it('should apply divider prop', () => {
    expect(CardFooter.mapPropsToAttrs({ divider: true })['data-divider']).toBe(true);
  });

  it('should apply align prop', () => {
    for (const align of CardFooterAligns) {
      expect(CardFooter.mapPropsToAttrs({ align })['data-align']).toBe(align);
    }
  });
});
