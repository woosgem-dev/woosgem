import { describe, it, expect } from 'vitest';
import { Button, ButtonVariants, ButtonColors, ButtonSizes } from '@woosgem-dev/core';

describe('Button', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Button.displayName).toBe('Button');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Button.defaultProps).toEqual({
        variant: 'filled',
        color: 'primary',
        size: 'md',
        loading: false,
        disabled: false,
        fullWidth: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all variants', () => {
      expect(ButtonVariants).toContain('filled');
      expect(ButtonVariants).toContain('outline');
      expect(ButtonVariants).toContain('ghost');
      expect(ButtonVariants).toContain('link');
    });

    it('should include all colors', () => {
      expect(ButtonColors).toContain('primary');
      expect(ButtonColors).toContain('secondary');
      expect(ButtonColors).toContain('danger');
      expect(ButtonColors).toContain('success');
    });

    it('should include all sizes', () => {
      expect(ButtonSizes).toContain('xs');
      expect(ButtonSizes).toContain('sm');
      expect(ButtonSizes).toContain('md');
      expect(ButtonSizes).toContain('lg');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Button.mapPropsToAttrs({});
      expect(attrs.class).toBe('btn');
      expect(attrs['data-variant']).toBe('filled');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-state']).toBeUndefined();
    });

    it('should apply custom props', () => {
      const attrs = Button.mapPropsToAttrs({
        variant: 'outline',
        color: 'danger',
        size: 'lg',
      });
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-color']).toBe('danger');
      expect(attrs['data-size']).toBe('lg');
    });

    it('should set loading state', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true });
      expect(attrs['data-state']).toBe('loading');
      expect(attrs.disabled).toBe(true);
    });

    it('should set disabled state', () => {
      const attrs = Button.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should set fullWidth attribute', () => {
      const attrs = Button.mapPropsToAttrs({ fullWidth: true });
      expect(attrs['data-full-width']).toBe(true);
    });

    it('should prioritize loading over disabled state', () => {
      const attrs = Button.mapPropsToAttrs({ loading: true, disabled: true });
      expect(attrs['data-state']).toBe('loading');
      expect(attrs.disabled).toBe(true);
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(Button.template.tag).toBe('button');
    });

    it('should have default slot', () => {
      expect(Button.template.slots).toContain('default');
    });
  });
});
