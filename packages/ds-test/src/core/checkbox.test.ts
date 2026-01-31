import { describe, it, expect } from 'vitest';
import { Checkbox, CheckboxSizes } from '@woosgem/ds-core';

describe('Checkbox', () => {
  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(Checkbox.displayName).toBe('Checkbox');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default values', () => {
      expect(Checkbox.defaultProps).toEqual({
        size: 'md',
        checked: false,
        indeterminate: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should include all sizes', () => {
      expect(CheckboxSizes).toContain('sm');
      expect(CheckboxSizes).toContain('md');
      expect(CheckboxSizes).toContain('lg');
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return correct attrs with defaults', () => {
      const attrs = Checkbox.mapPropsToAttrs({});
      expect(attrs.class).toBe('checkbox');
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-state']).toBe('unchecked');
    });

    it('should apply custom size', () => {
      const attrs = Checkbox.mapPropsToAttrs({ size: 'lg' });
      expect(attrs['data-size']).toBe('lg');
    });

    it('should set unchecked state', () => {
      const attrs = Checkbox.mapPropsToAttrs({ checked: false });
      expect(attrs['data-state']).toBe('unchecked');
    });

    it('should set checked state', () => {
      const attrs = Checkbox.mapPropsToAttrs({ checked: true });
      expect(attrs['data-state']).toBe('checked');
    });

    it('should set indeterminate state', () => {
      const attrs = Checkbox.mapPropsToAttrs({ indeterminate: true });
      expect(attrs['data-state']).toBe('indeterminate');
    });

    it('should set disabled state', () => {
      const attrs = Checkbox.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
    });

    it('should prioritize disabled over other states', () => {
      const attrs = Checkbox.mapPropsToAttrs({
        checked: true,
        indeterminate: true,
        disabled: true,
      });
      expect(attrs['data-state']).toBe('disabled');
    });

    it('should prioritize indeterminate over checked', () => {
      const attrs = Checkbox.mapPropsToAttrs({
        checked: true,
        indeterminate: true,
      });
      expect(attrs['data-state']).toBe('indeterminate');
    });

    it('should handle all size combinations', () => {
      CheckboxSizes.forEach((size) => {
        const attrs = Checkbox.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      });
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(Checkbox.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(Checkbox.template.slots).toContain('default');
    });
  });
});
