import { describe, it, expect } from 'vitest';
import { computeFieldAttributes } from '../../src/vanilla/field';

describe('computeFieldAttributes', () => {
  const defaultId = 'test-id';

  describe('id/name resolution', () => {
    it('uses resolvedId when no id provided', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.fieldId).toBe('test-id');
      expect(attrs.controlProps.id).toBe('test-id');
    });

    it('uses config.id when provided', () => {
      const attrs = computeFieldAttributes({ id: 'custom-id' }, defaultId);
      expect(attrs.fieldId).toBe('custom-id');
      expect(attrs.controlProps.id).toBe('custom-id');
    });

    it('defaults name to id when name not provided', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.fieldName).toBe('test-id');
      expect(attrs.controlProps.name).toBe('test-id');
    });

    it('uses config.name when provided', () => {
      const attrs = computeFieldAttributes({ name: 'email' }, defaultId);
      expect(attrs.fieldName).toBe('email');
      expect(attrs.controlProps.name).toBe('email');
    });
  });

  describe('required state', () => {
    it('sets required on controlProps', () => {
      const attrs = computeFieldAttributes({ required: true }, defaultId);
      expect(attrs.controlProps.required).toBe(true);
    });

    it('sets data-required on labelProps', () => {
      const attrs = computeFieldAttributes({ required: true }, defaultId);
      expect(attrs.labelProps['data-required']).toBe('');
    });

    it('omits required when false', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.controlProps.required).toBeUndefined();
      expect(attrs.labelProps['data-required']).toBeUndefined();
    });
  });

  describe('disabled state', () => {
    it('sets disabled on controlProps', () => {
      const attrs = computeFieldAttributes({ disabled: true }, defaultId);
      expect(attrs.controlProps.disabled).toBe(true);
    });

    it('sets data-disabled on labelProps', () => {
      const attrs = computeFieldAttributes({ disabled: true }, defaultId);
      expect(attrs.labelProps['data-disabled']).toBe('');
    });

    it('omits disabled when false', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.controlProps.disabled).toBeUndefined();
      expect(attrs.labelProps['data-disabled']).toBeUndefined();
    });
  });

  describe('error state', () => {
    it('sets aria-invalid on controlProps', () => {
      const attrs = computeFieldAttributes({ error: true }, defaultId);
      expect(attrs.controlProps['aria-invalid']).toBe('true');
    });

    it('sets aria-errormessage referencing error id', () => {
      const attrs = computeFieldAttributes({ error: true }, defaultId);
      expect(attrs.controlProps['aria-errormessage']).toBe('test-id-error');
    });

    it('sets data-error on labelProps', () => {
      const attrs = computeFieldAttributes({ error: true }, defaultId);
      expect(attrs.labelProps['data-error']).toBe('');
    });

    it('omits error attributes when false', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.controlProps['aria-invalid']).toBeUndefined();
      expect(attrs.controlProps['aria-errormessage']).toBeUndefined();
      expect(attrs.labelProps['data-error']).toBeUndefined();
    });
  });

  describe('aria-describedby composition', () => {
    it('includes only description id when hasDescription is true', () => {
      const attrs = computeFieldAttributes(
        { hasDescription: true },
        defaultId,
      );
      expect(attrs.controlProps['aria-describedby']).toBe(
        'test-id-description',
      );
    });

    it('includes only error id when error is true', () => {
      const attrs = computeFieldAttributes({ error: true }, defaultId);
      expect(attrs.controlProps['aria-describedby']).toBe('test-id-error');
    });

    it('includes both description and error in reading order', () => {
      const attrs = computeFieldAttributes(
        { hasDescription: true, error: true },
        defaultId,
      );
      expect(attrs.controlProps['aria-describedby']).toBe(
        'test-id-description test-id-error',
      );
    });

    it('omits aria-describedby when neither present', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.controlProps['aria-describedby']).toBeUndefined();
    });
  });

  describe('errorProps', () => {
    it('has correct id, role, and aria-live', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.errorProps).toEqual({
        id: 'test-id-error',
        role: 'alert',
        'aria-live': 'assertive',
      });
    });
  });

  describe('descriptionProps', () => {
    it('has correct id', () => {
      const attrs = computeFieldAttributes({}, defaultId);
      expect(attrs.descriptionProps).toEqual({
        id: 'test-id-description',
      });
    });
  });
});
