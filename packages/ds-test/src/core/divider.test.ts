import { describe, it, expect } from 'vitest';
import {
  Divider,
  DividerOrientations,
  DividerVariants,
  DividerSpacings,
  DividerColors,
} from '@woosgem-dev/core';

describe('Divider', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Divider.displayName).toBe('Divider');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Divider.defaultProps).toEqual({
        orientation: 'horizontal',
        variant: 'solid',
        spacing: 'md',
        color: 'default',
      });
    });
  });

  describe('propTypes', () => {
    it('should include all orientations', () => {
      expect(DividerOrientations).toContain('horizontal');
      expect(DividerOrientations).toContain('vertical');
    });

    it('should include all variants', () => {
      expect(DividerVariants).toContain('solid');
      expect(DividerVariants).toContain('dashed');
    });

    it('should include all spacings', () => {
      expect(DividerSpacings).toContain('none');
      expect(DividerSpacings).toContain('sm');
      expect(DividerSpacings).toContain('md');
      expect(DividerSpacings).toContain('lg');
    });

    it('should include all colors', () => {
      expect(DividerColors).toContain('default');
      expect(DividerColors).toContain('muted');
      expect(DividerColors).toContain('primary');
      expect(DividerColors).toContain('secondary');
      expect(DividerColors).toContain('danger');
      expect(DividerColors).toContain('success');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Divider.mapPropsToAttrs({});
      expect(attrs.class).toBe('divider');
      expect(attrs.role).toBe('separator');
      expect(attrs['data-orientation']).toBe('horizontal');
      expect(attrs['data-variant']).toBe('solid');
      expect(attrs['data-spacing']).toBe('md');
      expect(attrs['data-color']).toBe('default');
      expect(attrs['aria-orientation']).toBe('horizontal');
    });

    it('should apply custom orientation', () => {
      const attrs = Divider.mapPropsToAttrs({ orientation: 'vertical' });
      expect(attrs['data-orientation']).toBe('vertical');
      expect(attrs['aria-orientation']).toBe('vertical');
    });

    it('should apply custom variant', () => {
      const attrs = Divider.mapPropsToAttrs({ variant: 'dashed' });
      expect(attrs['data-variant']).toBe('dashed');
    });

    it('should apply custom spacing', () => {
      const attrs = Divider.mapPropsToAttrs({ spacing: 'lg' });
      expect(attrs['data-spacing']).toBe('lg');
    });

    it('should apply custom color', () => {
      const attrs = Divider.mapPropsToAttrs({ color: 'primary' });
      expect(attrs['data-color']).toBe('primary');
    });

    it('should handle all orientation variants', () => {
      for (const orientation of DividerOrientations) {
        const attrs = Divider.mapPropsToAttrs({ orientation });
        expect(attrs['data-orientation']).toBe(orientation);
        expect(attrs['aria-orientation']).toBe(orientation);
      }
    });

    it('should handle all spacing variants', () => {
      for (const spacing of DividerSpacings) {
        const attrs = Divider.mapPropsToAttrs({ spacing });
        expect(attrs['data-spacing']).toBe(spacing);
      }
    });

    it('should handle all color variants', () => {
      for (const color of DividerColors) {
        const attrs = Divider.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should combine multiple props correctly', () => {
      const attrs = Divider.mapPropsToAttrs({
        orientation: 'vertical',
        variant: 'dashed',
        spacing: 'none',
        color: 'danger',
      });
      expect(attrs['data-orientation']).toBe('vertical');
      expect(attrs['data-variant']).toBe('dashed');
      expect(attrs['data-spacing']).toBe('none');
      expect(attrs['data-color']).toBe('danger');
      expect(attrs['aria-orientation']).toBe('vertical');
    });
  });

  describe('template', () => {
    it('should use hr tag', () => {
      expect(Divider.template.tag).toBe('hr');
    });

    it('should have no slots (self-closing)', () => {
      expect(Divider.template.slots).toEqual([]);
    });
  });
});
