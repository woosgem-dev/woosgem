import { describe, it, expect } from 'vitest';
import {
  IconButton,
  IconButtonVariants,
  IconButtonColors,
  IconButtonSizes,
  IconButtonShapes,
} from '@woosgem-dev/core';

describe('IconButton', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(IconButton.displayName).toBe('IconButton');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(IconButton.defaultProps).toEqual({
        variant: 'filled',
        color: 'primary',
        size: 'md',
        shape: 'square',
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(IconButtonVariants).toContain('filled');
      expect(IconButtonVariants).toContain('outline');
      expect(IconButtonVariants).toContain('ghost');
    });

    it('should include all colors', () => {
      expect(IconButtonColors).toContain('primary');
      expect(IconButtonColors).toContain('secondary');
      expect(IconButtonColors).toContain('danger');
    });

    it('should include all sizes', () => {
      expect(IconButtonSizes).toContain('xs');
      expect(IconButtonSizes).toContain('sm');
      expect(IconButtonSizes).toContain('md');
      expect(IconButtonSizes).toContain('lg');
    });

    it('should include all shapes', () => {
      expect(IconButtonShapes).toContain('square');
      expect(IconButtonShapes).toContain('circle');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = IconButton.mapPropsToAttrs({});
      expect(attrs.class).toBe('icon-btn');
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-shape']).toBe('square');
    });

    it('should apply custom props', () => {
      const attrs = IconButton.mapPropsToAttrs({
        variant: 'outline',
        color: 'danger',
        size: 'lg',
        shape: 'circle',
      });
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-color']).toBe('danger');
      expect(attrs['data-size']).toBe('lg');
      expect(attrs['data-shape']).toBe('circle');
    });

    it('should handle all variant combinations', () => {
      IconButtonVariants.forEach((variant) => {
        const attrs = IconButton.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      });
    });

    it('should handle all color combinations', () => {
      IconButtonColors.forEach((color) => {
        const attrs = IconButton.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      });
    });

    it('should handle all size combinations', () => {
      IconButtonSizes.forEach((size) => {
        const attrs = IconButton.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      });
    });

    it('should handle all shape combinations', () => {
      IconButtonShapes.forEach((shape) => {
        const attrs = IconButton.mapPropsToAttrs({ shape });
        expect(attrs['data-shape']).toBe(shape);
      });
    });

    it('should handle disabled state', () => {
      const attrs = IconButton.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should not have disabled state when disabled is false', () => {
      const attrs = IconButton.mapPropsToAttrs({ disabled: false });
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs.disabled).toBeUndefined();
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(IconButton.template.tag).toBe('button');
    });

    it('should have default slot', () => {
      expect(IconButton.template.slots).toContain('default');
    });
  });
});
