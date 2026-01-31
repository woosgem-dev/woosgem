import { describe, it, expect } from 'vitest';
import { Badge, BadgeVariants, BadgeColors, BadgeSizes } from '@woosgem/ds-core';

describe('Badge', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Badge.displayName).toBe('Badge');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Badge.defaultProps).toEqual({
        variant: 'solid',
        color: 'primary',
        size: 'md',
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(BadgeVariants).toContain('solid');
      expect(BadgeVariants).toContain('outline');
      expect(BadgeVariants).toContain('subtle');
    });

    it('should include all colors', () => {
      expect(BadgeColors).toContain('primary');
      expect(BadgeColors).toContain('secondary');
      expect(BadgeColors).toContain('danger');
      expect(BadgeColors).toContain('success');
      expect(BadgeColors).toContain('warning');
      expect(BadgeColors).toContain('info');
    });

    it('should include all sizes', () => {
      expect(BadgeSizes).toContain('sm');
      expect(BadgeSizes).toContain('md');
      expect(BadgeSizes).toContain('lg');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Badge.mapPropsToAttrs({});
      expect(attrs.class).toBe('badge');
      expect(attrs['data-variant']).toBe('solid');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-size']).toBe('md');
    });

    it('should apply custom props', () => {
      const attrs = Badge.mapPropsToAttrs({
        variant: 'outline',
        color: 'danger',
        size: 'lg',
      });
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-color']).toBe('danger');
      expect(attrs['data-size']).toBe('lg');
    });

    it('should handle all variant combinations', () => {
      BadgeVariants.forEach((variant) => {
        const attrs = Badge.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      });
    });

    it('should handle all color combinations', () => {
      BadgeColors.forEach((color) => {
        const attrs = Badge.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      });
    });

    it('should handle all size combinations', () => {
      BadgeSizes.forEach((size) => {
        const attrs = Badge.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      });
    });
  });

  describe('template', () => {
    it('should use span tag', () => {
      expect(Badge.template.tag).toBe('span');
    });

    it('should have default slot', () => {
      expect(Badge.template.slots).toContain('default');
    });
  });
});
