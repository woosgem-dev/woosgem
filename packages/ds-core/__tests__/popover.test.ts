import { describe, it, expect } from 'vitest';
import {
  Popover,
  PopoverArrow,
  PopoverPositions,
  PopoverSizes,
  PopoverVariants,
} from '@woosgem-dev/core';

describe('Popover Core', () => {
  describe('displayName', () => {
    it('should have displayName "Popover"', () => {
      expect(Popover.displayName).toBe('Popover');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Popover.defaultProps).toEqual({
        position: 'bottom',
        size: 'md',
        variant: 'default',
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct position options', () => {
      expect(PopoverPositions).toEqual(['top', 'bottom', 'left', 'right']);
    });

    it('should have correct size options', () => {
      expect(PopoverSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct variant options', () => {
      expect(PopoverVariants).toEqual(['default', 'tooltip']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Popover.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'popover',
        'data-position': 'bottom',
        'data-size': 'md',
        'data-variant': 'default',
        role: 'dialog',
      });
    });

    it('should apply position prop', () => {
      for (const position of PopoverPositions) {
        const attrs = Popover.mapPropsToAttrs({ position });
        expect(attrs['data-position']).toBe(position);
      }
    });

    it('should apply size prop', () => {
      for (const size of PopoverSizes) {
        const attrs = Popover.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply variant prop', () => {
      for (const variant of PopoverVariants) {
        const attrs = Popover.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should always have role="dialog"', () => {
      const attrs = Popover.mapPropsToAttrs({});
      expect(attrs.role).toBe('dialog');
    });

    it('should use default values for undefined props', () => {
      const attrs = Popover.mapPropsToAttrs({
        position: undefined,
        size: undefined,
        variant: undefined,
      });
      expect(attrs['data-position']).toBe('bottom');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-variant']).toBe('default');
    });

    it('should combine multiple props', () => {
      const attrs = Popover.mapPropsToAttrs({
        position: 'top',
        size: 'lg',
        variant: 'tooltip',
      });
      expect(attrs).toEqual({
        class: 'popover',
        'data-position': 'top',
        'data-size': 'lg',
        'data-variant': 'tooltip',
        role: 'dialog',
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Popover.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Popover.template.slots).toEqual(['default']);
    });
  });
});

describe('PopoverArrow Core', () => {
  describe('displayName', () => {
    it('should have displayName "PopoverArrow"', () => {
      expect(PopoverArrow.displayName).toBe('PopoverArrow');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return class "popover-arrow"', () => {
      const attrs = PopoverArrow.mapPropsToAttrs();
      expect(attrs.class).toBe('popover-arrow');
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(PopoverArrow.template.tag).toBe('div');
    });

    it('should have no slots', () => {
      expect(PopoverArrow.template.slots).toEqual([]);
    });
  });
});
