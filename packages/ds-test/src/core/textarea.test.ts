import { describe, it, expect } from 'vitest';
import { Textarea, TextareaVariants, TextareaSizes, TextareaResizes } from '@woosgem/ds-core';

describe('Textarea Core', () => {
  describe('displayName', () => {
    it('should have displayName "Textarea"', () => {
      expect(Textarea.displayName).toBe('Textarea');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Textarea.defaultProps).toEqual({
        variant: 'outline',
        size: 'md',
        resize: 'vertical',
        disabled: false,
        error: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(TextareaVariants).toEqual(['outline', 'filled']);
    });

    it('should have correct size options', () => {
      expect(TextareaSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct resize options', () => {
      expect(TextareaResizes).toEqual(['none', 'vertical', 'horizontal', 'both']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Textarea.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'textarea',
        'data-variant': 'outline',
        'data-size': 'md',
        'data-resize': 'vertical',
        'data-state': undefined,
        disabled: undefined,
        'aria-invalid': undefined,
      });
    });

    it('should apply variant prop', () => {
      for (const variant of TextareaVariants) {
        const attrs = Textarea.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply size prop', () => {
      for (const size of TextareaSizes) {
        const attrs = Textarea.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply resize prop', () => {
      for (const resize of TextareaResizes) {
        const attrs = Textarea.mapPropsToAttrs({ resize });
        expect(attrs['data-resize']).toBe(resize);
      }
    });

    it('should apply disabled state', () => {
      const attrs = Textarea.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should apply error state', () => {
      const attrs = Textarea.mapPropsToAttrs({ error: true });
      expect(attrs['data-state']).toBe('error');
      expect(attrs['aria-invalid']).toBe(true);
    });

    it('should prioritize disabled over error', () => {
      const attrs = Textarea.mapPropsToAttrs({ disabled: true, error: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
      expect(attrs['aria-invalid']).toBe(true);
    });

    it('should use default values for undefined props', () => {
      const attrs = Textarea.mapPropsToAttrs({
        variant: undefined,
        size: undefined,
        resize: undefined,
        disabled: undefined,
        error: undefined,
      });
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-resize']).toBe('vertical');
      expect(attrs['data-state']).toBeUndefined();
    });

    it('should combine multiple props', () => {
      const attrs = Textarea.mapPropsToAttrs({
        variant: 'filled',
        size: 'lg',
        resize: 'both',
      });
      expect(attrs).toEqual({
        class: 'textarea',
        'data-variant': 'filled',
        'data-size': 'lg',
        'data-resize': 'both',
        'data-state': undefined,
        disabled: undefined,
        'aria-invalid': undefined,
      });
    });
  });

  describe('template', () => {
    it('should use textarea tag', () => {
      expect(Textarea.template.tag).toBe('textarea');
    });

    it('should have no slots', () => {
      expect(Textarea.template.slots).toEqual([]);
    });
  });
});
