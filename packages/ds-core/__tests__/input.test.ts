import { describe, it, expect } from 'vitest';
import { Input, InputVariants, InputSizes } from '@woosgem-dev/core';

describe('Input', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Input.displayName).toBe('Input');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Input.defaultProps).toEqual({
        variant: 'outline',
        size: 'md',
        error: false,
        success: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(InputVariants).toContain('outline');
      expect(InputVariants).toContain('filled');
      expect(InputVariants).toContain('underline');
    });

    it('should include all sizes', () => {
      expect(InputSizes).toContain('sm');
      expect(InputSizes).toContain('md');
      expect(InputSizes).toContain('lg');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Input.mapPropsToAttrs({});
      expect(attrs.class).toBe('wg-input');
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-state']).toBeUndefined();
      expect(attrs.disabled).toBeUndefined();
    });

    it('should apply custom props', () => {
      const attrs = Input.mapPropsToAttrs({
        variant: 'filled',
        size: 'lg',
      });
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-size']).toBe('lg');
    });

    it('should set error state', () => {
      const attrs = Input.mapPropsToAttrs({ error: true });
      expect(attrs['data-state']).toBe('error');
    });

    it('should set success state', () => {
      const attrs = Input.mapPropsToAttrs({ success: true });
      expect(attrs['data-state']).toBe('success');
    });

    it('should set disabled state', () => {
      const attrs = Input.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should prioritize error over success state', () => {
      const attrs = Input.mapPropsToAttrs({ error: true, success: true });
      expect(attrs['data-state']).toBe('error');
    });

    it('should prioritize error over disabled state', () => {
      const attrs = Input.mapPropsToAttrs({ error: true, disabled: true });
      expect(attrs['data-state']).toBe('error');
      expect(attrs.disabled).toBe(true);
    });

    it('should prioritize success over disabled state', () => {
      const attrs = Input.mapPropsToAttrs({ success: true, disabled: true });
      expect(attrs['data-state']).toBe('success');
      expect(attrs.disabled).toBe(true);
    });
  });

  describe('template', () => {
    it('should use input tag', () => {
      expect(Input.template.tag).toBe('input');
    });

    it('should have no slots', () => {
      expect(Input.template.slots).toEqual([]);
    });
  });
});
