import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useField } from '../../src/react/useField';

describe('useField', () => {
  it('returns all prop objects', () => {
    const { result } = renderHook(() => useField());
    expect(result.current.labelProps).toBeDefined();
    expect(result.current.controlProps).toBeDefined();
    expect(result.current.errorProps).toBeDefined();
    expect(result.current.descriptionProps).toBeDefined();
    expect(result.current.fieldId).toBeDefined();
    expect(result.current.fieldName).toBeDefined();
  });

  it('generates SSR-safe id via React useId', () => {
    const { result } = renderHook(() => useField());
    // React useId generates IDs like ":r0:", ":r1:" etc.
    expect(result.current.fieldId).toBeTruthy();
    expect(typeof result.current.fieldId).toBe('string');
  });

  it('uses user-provided id over generated id', () => {
    const { result } = renderHook(() => useField({ id: 'custom' }));
    expect(result.current.fieldId).toBe('custom');
    expect(result.current.controlProps.id).toBe('custom');
  });

  it('uses user-provided name', () => {
    const { result } = renderHook(() => useField({ name: 'email' }));
    expect(result.current.fieldName).toBe('email');
    expect(result.current.controlProps.name).toBe('email');
  });

  it('defaults name to id when not provided', () => {
    const { result } = renderHook(() => useField({ id: 'my-field' }));
    expect(result.current.fieldName).toBe('my-field');
  });

  it('sets error attributes when error is true', () => {
    const { result } = renderHook(() =>
      useField({ id: 'f', error: true }),
    );
    expect(result.current.controlProps['aria-invalid']).toBe('true');
    expect(result.current.controlProps['aria-errormessage']).toBe('f-error');
    expect(result.current.labelProps['data-error']).toBe('');
  });

  it('sets required attributes', () => {
    const { result } = renderHook(() =>
      useField({ id: 'f', required: true }),
    );
    expect(result.current.controlProps.required).toBe(true);
    expect(result.current.labelProps['data-required']).toBe('');
  });

  it('sets disabled attributes', () => {
    const { result } = renderHook(() =>
      useField({ id: 'f', disabled: true }),
    );
    expect(result.current.controlProps.disabled).toBe(true);
    expect(result.current.labelProps['data-disabled']).toBe('');
  });

  it('includes description in aria-describedby when hasDescription is true', () => {
    const { result } = renderHook(() =>
      useField({ id: 'f', hasDescription: true }),
    );
    expect(result.current.controlProps['aria-describedby']).toBe(
      'f-description',
    );
  });

  it('includes both description and error in aria-describedby', () => {
    const { result } = renderHook(() =>
      useField({ id: 'f', hasDescription: true, error: true }),
    );
    expect(result.current.controlProps['aria-describedby']).toBe(
      'f-description f-error',
    );
  });

  it('updates when options change', () => {
    const { result, rerender } = renderHook(
      (props) => useField(props),
      { initialProps: { id: 'f', error: false } as Parameters<typeof useField>[0] },
    );
    expect(result.current.controlProps['aria-invalid']).toBeUndefined();

    rerender({ id: 'f', error: true });
    expect(result.current.controlProps['aria-invalid']).toBe('true');
  });
});
