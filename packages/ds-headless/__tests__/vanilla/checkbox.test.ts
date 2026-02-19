import { describe, it, expect } from 'vitest';
import { computeCheckboxAttributes } from '../../src/vanilla/checkbox';

describe('computeCheckboxAttributes', () => {
  const defaultId = 'test-id';

  describe('id/name resolution', () => {
    it('uses resolvedId when no id provided', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.fieldId).toBe('test-id');
      expect(attrs.inputProps.id).toBe('test-id');
    });

    it('uses config.id when provided', () => {
      const attrs = computeCheckboxAttributes({ id: 'custom-id' }, defaultId);
      expect(attrs.fieldId).toBe('custom-id');
      expect(attrs.inputProps.id).toBe('custom-id');
    });

    it('defaults name to id when name not provided', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps.name).toBe('test-id');
    });

    it('uses config.name when provided', () => {
      const attrs = computeCheckboxAttributes({ name: 'agree' }, defaultId);
      expect(attrs.inputProps.name).toBe('agree');
    });
  });

  describe('value', () => {
    it('defaults to "on" when no value provided', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps.value).toBe('on');
    });

    it('uses config.value when provided', () => {
      const attrs = computeCheckboxAttributes({ value: 'yes' }, defaultId);
      expect(attrs.inputProps.value).toBe('yes');
    });
  });

  describe('state resolution', () => {
    it('returns unchecked by default', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.state).toBe('unchecked');
      expect(attrs.indicatorProps['data-state']).toBe('unchecked');
    });

    it('returns checked when checked is true', () => {
      const attrs = computeCheckboxAttributes({ checked: true }, defaultId);
      expect(attrs.state).toBe('checked');
      expect(attrs.indicatorProps['data-state']).toBe('checked');
    });

    it('returns indeterminate when indeterminate is true', () => {
      const attrs = computeCheckboxAttributes({ indeterminate: true }, defaultId);
      expect(attrs.state).toBe('indeterminate');
      expect(attrs.indicatorProps['data-state']).toBe('indeterminate');
    });

    it('indeterminate takes priority over checked', () => {
      const attrs = computeCheckboxAttributes(
        { checked: true, indeterminate: true },
        defaultId,
      );
      expect(attrs.state).toBe('indeterminate');
    });
  });

  describe('aria-checked', () => {
    it('returns false when unchecked', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps['aria-checked']).toBe(false);
    });

    it('returns true when checked', () => {
      const attrs = computeCheckboxAttributes({ checked: true }, defaultId);
      expect(attrs.inputProps['aria-checked']).toBe(true);
    });

    it('returns "mixed" when indeterminate', () => {
      const attrs = computeCheckboxAttributes({ indeterminate: true }, defaultId);
      expect(attrs.inputProps['aria-checked']).toBe('mixed');
    });
  });

  describe('disabled state', () => {
    it('sets disabled on inputProps', () => {
      const attrs = computeCheckboxAttributes({ disabled: true }, defaultId);
      expect(attrs.inputProps.disabled).toBe(true);
    });

    it('sets data-disabled on rootProps and labelProps', () => {
      const attrs = computeCheckboxAttributes({ disabled: true }, defaultId);
      expect(attrs.rootProps['data-disabled']).toBe('');
      expect(attrs.labelProps['data-disabled']).toBe('');
    });

    it('omits disabled when false', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps.disabled).toBeUndefined();
      expect(attrs.rootProps['data-disabled']).toBeUndefined();
      expect(attrs.labelProps['data-disabled']).toBeUndefined();
    });
  });

  describe('required state', () => {
    it('sets required on inputProps', () => {
      const attrs = computeCheckboxAttributes({ required: true }, defaultId);
      expect(attrs.inputProps.required).toBe(true);
    });

    it('omits required when false', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps.required).toBeUndefined();
    });
  });

  describe('inputProps type', () => {
    it('always has type checkbox', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.inputProps.type).toBe('checkbox');
    });
  });

  describe('indicatorProps', () => {
    it('always has aria-hidden true', () => {
      const attrs = computeCheckboxAttributes({}, defaultId);
      expect(attrs.indicatorProps['aria-hidden']).toBe(true);
    });
  });
});
