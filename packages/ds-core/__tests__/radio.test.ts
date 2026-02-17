import { describe, it, expect } from 'vitest';
import { Radio, RadioGroup, RadioSizes, RadioColors } from '@woosgem-dev/core';

describe('Radio Core', () => {
  describe('displayName', () => {
    it('should have displayName "Radio"', () => {
      expect(Radio.displayName).toBe('Radio');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Radio.defaultProps).toEqual({
        size: 'md',
        color: 'primary',
        checked: false,
        disabled: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct size options', () => {
      expect(RadioSizes).toEqual(['sm', 'md', 'lg']);
    });

    it('should have correct color options', () => {
      expect(RadioColors).toEqual(['primary', 'secondary', 'success']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Radio.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-radio',
        'data-size': 'md',
        'data-color': 'primary',
        'data-state': undefined,
        role: 'radio',
        'aria-checked': false,
        disabled: undefined,
      });
    });

    it('should apply size prop', () => {
      for (const size of RadioSizes) {
        const attrs = Radio.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should apply color prop', () => {
      for (const color of RadioColors) {
        const attrs = Radio.mapPropsToAttrs({ color });
        expect(attrs['data-color']).toBe(color);
      }
    });

    it('should apply checked state', () => {
      const attrs = Radio.mapPropsToAttrs({ checked: true });
      expect(attrs['data-state']).toBe('checked');
      expect(attrs['aria-checked']).toBe(true);
    });

    it('should apply disabled state', () => {
      const attrs = Radio.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs.disabled).toBe(true);
    });

    it('should apply checked-disabled state', () => {
      const attrs = Radio.mapPropsToAttrs({ checked: true, disabled: true });
      expect(attrs['data-state']).toBe('checked-disabled');
      expect(attrs['aria-checked']).toBe(true);
      expect(attrs.disabled).toBe(true);
    });

    it('should always have role="radio"', () => {
      const attrs = Radio.mapPropsToAttrs({});
      expect(attrs.role).toBe('radio');
    });

    it('should use default values for undefined props', () => {
      const attrs = Radio.mapPropsToAttrs({
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
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(Radio.template.tag).toBe('button');
    });

    it('should have label slot', () => {
      expect(Radio.template.slots).toEqual(['label']);
    });
  });
});

describe('RadioGroup Core', () => {
  describe('displayName', () => {
    it('should have displayName "RadioGroup"', () => {
      expect(RadioGroup.displayName).toBe('RadioGroup');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(RadioGroup.defaultProps).toEqual({
        orientation: 'vertical',
        disabled: false,
      });
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = RadioGroup.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-radio-group',
        'data-orientation': 'vertical',
        role: 'radiogroup',
        'aria-disabled': undefined,
      });
    });

    it('should apply orientation prop', () => {
      const attrs = RadioGroup.mapPropsToAttrs({ orientation: 'horizontal' });
      expect(attrs['data-orientation']).toBe('horizontal');
    });

    it('should apply disabled prop', () => {
      const attrs = RadioGroup.mapPropsToAttrs({ disabled: true });
      expect(attrs['aria-disabled']).toBe(true);
    });

    it('should always have role="radiogroup"', () => {
      const attrs = RadioGroup.mapPropsToAttrs({});
      expect(attrs.role).toBe('radiogroup');
    });
  });

  describe('template', () => {
    it('should use div tag', () => {
      expect(RadioGroup.template.tag).toBe('div');
    });

    it('should have default slot', () => {
      expect(RadioGroup.template.slots).toEqual(['default']);
    });
  });
});
