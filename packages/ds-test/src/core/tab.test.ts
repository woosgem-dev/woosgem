import { describe, it, expect } from 'vitest';
import { Tab, TabVariants, TabSizes, TabColors } from '@woosgem-dev/core';

describe('Tab', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Tab.displayName).toBe('Tab');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Tab.defaultProps).toEqual({
        variant: 'underline',
        size: 'md',
        color: 'primary',
        selected: false,
        disabled: false,
        fullWidth: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(TabVariants).toContain('underline');
      expect(TabVariants).toContain('filled');
    });

    it('should include all sizes', () => {
      expect(TabSizes).toContain('sm');
      expect(TabSizes).toContain('md');
      expect(TabSizes).toContain('lg');
    });

    it('should include all colors', () => {
      expect(TabColors).toContain('primary');
      expect(TabColors).toContain('secondary');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Tab.mapPropsToAttrs({});
      expect(attrs.class).toBe('tab');
      expect(attrs.role).toBe('tab');
      expect(attrs['data-variant']).toBe('underline');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs['data-full-width']).toBeUndefined();
    });

    it('should apply custom variant and size', () => {
      const attrs = Tab.mapPropsToAttrs({
        variant: 'filled',
        size: 'lg',
      });
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-size']).toBe('lg');
    });

    it('should apply custom color', () => {
      const attrs = Tab.mapPropsToAttrs({
        color: 'secondary',
      });
      expect(attrs['data-color']).toBe('secondary');
    });

    it('should handle all color variants', () => {
      for (const color of TabColors) {
        const attrs = Tab.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should set selected state', () => {
      const attrs = Tab.mapPropsToAttrs({ selected: true });
      expect(attrs['data-state']).toBe('selected');
      expect(attrs['aria-selected']).toBe(true);
    });

    it('should set disabled state', () => {
      const attrs = Tab.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should prioritize selected over disabled state', () => {
      const attrs = Tab.mapPropsToAttrs({ selected: true, disabled: true });
      expect(attrs['data-state']).toBe('selected');
    });

    it('should set fullWidth attribute', () => {
      const attrs = Tab.mapPropsToAttrs({ fullWidth: true });
      expect(attrs['data-full-width']).toBe(true);
    });

    it('should combine multiple props correctly', () => {
      const attrs = Tab.mapPropsToAttrs({
        variant: 'filled',
        size: 'lg',
        color: 'secondary',
        selected: true,
      });
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-size']).toBe('lg');
      expect(attrs['data-color']).toBe('secondary');
      expect(attrs['data-state']).toBe('selected');
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(Tab.template.tag).toBe('button');
    });

    it('should have default slot', () => {
      expect(Tab.template.slots).toContain('default');
    });
  });
});
