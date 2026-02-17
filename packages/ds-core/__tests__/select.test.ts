import { describe, it, expect } from 'vitest';
import {
  Select,
  SelectMenu,
  SelectOption,
  SelectVariants,
  SelectSizes,
} from '@woosgem-dev/core';

describe('Select Core', () => {
  describe('displayName', () => {
    it('should have displayName "Select"', () => {
      expect(Select.displayName).toBe('Select');
    });
  });

  describe('defaultProps', () => {
    it('should have correct default props', () => {
      expect(Select.defaultProps).toEqual({
        variant: 'outline',
        size: 'md',
        disabled: false,
        error: false,
        open: false,
        multiple: false,
      });
    });
  });

  describe('propTypes', () => {
    it('should have correct variant options', () => {
      expect(SelectVariants).toEqual(['outline', 'filled']);
    });

    it('should have correct size options', () => {
      expect(SelectSizes).toEqual(['sm', 'md', 'lg']);
    });
  });

  describe('mapPropsToAttrs', () => {
    it('should return default attrs when no props provided', () => {
      const attrs = Select.mapPropsToAttrs({});
      expect(attrs).toEqual({
        class: 'wg-select',
        'data-variant': 'outline',
        'data-size': 'md',
        'data-state': undefined,
        'data-multiple': undefined,
        role: 'combobox',
        'aria-expanded': false,
        'aria-haspopup': 'listbox',
        'aria-disabled': undefined,
        disabled: undefined,
      });
    });

    it('should apply variant prop', () => {
      for (const variant of SelectVariants) {
        const attrs = Select.mapPropsToAttrs({ variant });
        expect(attrs['data-variant']).toBe(variant);
      }
    });

    it('should apply size prop', () => {
      for (const size of SelectSizes) {
        const attrs = Select.mapPropsToAttrs({ size });
        expect(attrs['data-size']).toBe(size);
      }
    });

    it('should set data-state to "disabled" when disabled', () => {
      const attrs = Select.mapPropsToAttrs({ disabled: true });
      expect(attrs['data-state']).toBe('disabled');
      expect(attrs['aria-disabled']).toBe(true);
      expect(attrs.disabled).toBe(true);
    });

    it('should set data-state to "error" when error is true', () => {
      const attrs = Select.mapPropsToAttrs({ error: true });
      expect(attrs['data-state']).toBe('error');
    });

    it('should set data-state to "open" when open is true', () => {
      const attrs = Select.mapPropsToAttrs({ open: true });
      expect(attrs['data-state']).toBe('open');
      expect(attrs['aria-expanded']).toBe(true);
    });

    it('should follow state priority: disabled > error > open', () => {
      const attrs = Select.mapPropsToAttrs({ disabled: true, error: true, open: true });
      expect(attrs['data-state']).toBe('disabled');
    });

    it('should follow state priority: error > open', () => {
      const attrs = Select.mapPropsToAttrs({ error: true, open: true });
      expect(attrs['data-state']).toBe('error');
    });

    it('should set data-multiple when multiple is true', () => {
      const attrs = Select.mapPropsToAttrs({ multiple: true });
      expect(attrs['data-multiple']).toBe(true);
    });

    it('should always have role="combobox"', () => {
      const attrs = Select.mapPropsToAttrs({});
      expect(attrs.role).toBe('combobox');
    });

    it('should always have aria-haspopup="listbox"', () => {
      const attrs = Select.mapPropsToAttrs({});
      expect(attrs['aria-haspopup']).toBe('listbox');
    });

    it('should use default values for undefined props', () => {
      const attrs = Select.mapPropsToAttrs({ variant: undefined, size: undefined });
      expect(attrs['data-variant']).toBe('outline');
      expect(attrs['data-size']).toBe('md');
    });
  });

  describe('template', () => {
    it('should use button tag', () => {
      expect(Select.template.tag).toBe('button');
    });

    it('should have value, placeholder, icon slots', () => {
      expect(Select.template.slots).toEqual(['value', 'placeholder', 'icon']);
    });
  });
});

describe('SelectMenu Core', () => {
  it('should have displayName "SelectMenu"', () => {
    expect(SelectMenu.displayName).toBe('SelectMenu');
  });

  it('should have correct default props', () => {
    expect(SelectMenu.defaultProps).toEqual({ size: 'md', open: false, multiple: false });
  });

  it('should return default attrs', () => {
    const attrs = SelectMenu.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'wg-select__menu',
      'data-size': 'md',
      'data-state': undefined,
      role: 'listbox',
      'aria-multiselectable': undefined,
    });
  });

  it('should set data-state to "open" when open', () => {
    const attrs = SelectMenu.mapPropsToAttrs({ open: true });
    expect(attrs['data-state']).toBe('open');
  });

  it('should set aria-multiselectable when multiple', () => {
    const attrs = SelectMenu.mapPropsToAttrs({ multiple: true });
    expect(attrs['aria-multiselectable']).toBe(true);
  });

  it('should always have role="listbox"', () => {
    expect(SelectMenu.mapPropsToAttrs({}).role).toBe('listbox');
  });
});

describe('SelectOption Core', () => {
  it('should have displayName "SelectOption"', () => {
    expect(SelectOption.displayName).toBe('SelectOption');
  });

  it('should have correct default props', () => {
    expect(SelectOption.defaultProps).toEqual({
      size: 'md',
      selected: false,
      disabled: false,
      highlighted: false,
    });
  });

  it('should return default attrs', () => {
    const attrs = SelectOption.mapPropsToAttrs({});
    expect(attrs).toEqual({
      class: 'wg-select__option',
      'data-size': 'md',
      'data-state': undefined,
      role: 'option',
      'aria-selected': false,
      'aria-disabled': undefined,
    });
  });

  it('should set data-state to "selected" when selected', () => {
    const attrs = SelectOption.mapPropsToAttrs({ selected: true });
    expect(attrs['data-state']).toBe('selected');
    expect(attrs['aria-selected']).toBe(true);
  });

  it('should set data-state to "disabled" when disabled', () => {
    const attrs = SelectOption.mapPropsToAttrs({ disabled: true });
    expect(attrs['data-state']).toBe('disabled');
    expect(attrs['aria-disabled']).toBe(true);
  });

  it('should set data-state to "highlighted" when highlighted', () => {
    const attrs = SelectOption.mapPropsToAttrs({ highlighted: true });
    expect(attrs['data-state']).toBe('highlighted');
  });

  it('should set data-state to "selected-disabled" when both', () => {
    const attrs = SelectOption.mapPropsToAttrs({ selected: true, disabled: true });
    expect(attrs['data-state']).toBe('selected-disabled');
  });

  it('should follow state priority: selected+disabled > disabled > highlighted > selected', () => {
    const all = SelectOption.mapPropsToAttrs({ selected: true, disabled: true, highlighted: true });
    expect(all['data-state']).toBe('selected-disabled');

    const disabledHighlighted = SelectOption.mapPropsToAttrs({ disabled: true, highlighted: true });
    expect(disabledHighlighted['data-state']).toBe('disabled');

    const highlightedSelected = SelectOption.mapPropsToAttrs({ highlighted: true, selected: true });
    expect(highlightedSelected['data-state']).toBe('highlighted');
  });

  it('should always have role="option"', () => {
    expect(SelectOption.mapPropsToAttrs({}).role).toBe('option');
  });
});
