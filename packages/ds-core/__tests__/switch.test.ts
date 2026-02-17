import { describe, it, expect } from 'vitest';
import { Switch, SwitchSizes, SwitchColors } from '@woosgem-dev/core';

describe('Switch Core', () => {
  describe('displayName', () => {
    it('should have displayName "Switch"', () => {
      expect(Switch.displayName).toBe('Switch');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Switch.defaultProps).toEqual({
        size: 'md',
        color: 'primary',
        checked: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(SwitchSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct color options', () => {
      expect(SwitchColors).toEqual(['primary', 'secondary', 'success']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Switch.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'switch',
        'data-size': 'md',
        'data-color': 'primary',
        'data-state': undefined,
        role: 'switch',
        'aria-checked': false,
        disabled: undefined,
      });
    });

    it('should apply size prop', () => {
      for (const size of SwitchSizes) {
        const attrs = Switch.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply color prop', () => {
      for (const color of SwitchColors) {
        const attrs = Switch.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should apply checked state', () => {
      const attrs = Switch.mapPropsToAttrs({ checked: true });
      expect(attrs['data-state']).toBe('checked');
      expect(attrs['aria-checked']).toBe(true);
    });

    it('should apply disabled state', () => {
      const attrs = Switch.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should apply checked-disabled state', () => {
      const attrs = Switch.mapPropsToAttrs({ checked: true, disabled: true });
      expect(attrs['data-state']).toBe('checked-disabled');
      expect(attrs['aria-checked']).toBe(true);
      expect(attrs.disabled).toBe(true);
    });

    it('should always have role="switch"', () => {
      const attrs = Switch.mapPropsToAttrs({});
      expect(attrs.role).toBe('switch');
    });

    it('should use default values for undefined props', () => {
      const attrs = Switch.mapPropsToAttrs({
        size: undefined,
        color: undefined,
        checked: undefined,
        disabled: undefined,
      });
      expect(attrs['data-size']).toBe('md');
      expect(attrs['data-color']).toBe('primary');
      expect(attrs['aria-checked']).toBe(false);
      expect(attrs.disabled).toBeUndefined();
    });

    it('should combine multiple props', () => {
      const attrs = Switch.mapPropsToAttrs({
        size: 'lg',
        color: 'success',
        checked: true,
      });
      expect(attrs).toEqual({
        class: 'switch',
        'data-size': 'lg',
        'data-color': 'success',
        'data-state': 'checked',
        role: 'switch',
        'aria-checked': true,
        disabled: undefined,
      });
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(Switch.template.tag).toBe('button');
    });

    it('should have no slots', () => {
      expect(Switch.template.slots).toEqual([]);
    });
  });
});
