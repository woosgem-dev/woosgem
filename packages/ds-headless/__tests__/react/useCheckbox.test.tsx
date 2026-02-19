import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCheckbox } from '../../src/react/useCheckbox';

describe('useCheckbox', () => {
  it('returns all prop objects', () => {
    const { result } = renderHook(() => useCheckbox());
    expect(result.current.rootProps).toBeDefined();
    expect(result.current.inputProps).toBeDefined();
    expect(result.current.indicatorProps).toBeDefined();
    expect(result.current.labelProps).toBeDefined();
    expect(result.current.fieldId).toBeDefined();
    expect(result.current.state).toBeDefined();
  });

  it('generates SSR-safe id via React useId', () => {
    const { result } = renderHook(() => useCheckbox());
    expect(result.current.fieldId).toBeTruthy();
    expect(typeof result.current.fieldId).toBe('string');
  });

  it('uses user-provided id over generated id', () => {
    const { result } = renderHook(() => useCheckbox({ id: 'custom' }));
    expect(result.current.fieldId).toBe('custom');
    expect(result.current.inputProps.id).toBe('custom');
  });

  it('uses user-provided name', () => {
    const { result } = renderHook(() => useCheckbox({ name: 'agree' }));
    expect(result.current.inputProps.name).toBe('agree');
  });

  it('defaults name to id when not provided', () => {
    const { result } = renderHook(() => useCheckbox({ id: 'my-cb' }));
    expect(result.current.inputProps.name).toBe('my-cb');
  });

  it('defaults value to "on"', () => {
    const { result } = renderHook(() => useCheckbox());
    expect(result.current.inputProps.value).toBe('on');
  });

  it('uses custom value', () => {
    const { result } = renderHook(() => useCheckbox({ value: 'yes' }));
    expect(result.current.inputProps.value).toBe('yes');
  });

  it('returns unchecked state by default', () => {
    const { result } = renderHook(() => useCheckbox());
    expect(result.current.state).toBe('unchecked');
    expect(result.current.inputProps['aria-checked']).toBe(false);
  });

  it('returns checked state', () => {
    const { result } = renderHook(() => useCheckbox({ checked: true }));
    expect(result.current.state).toBe('checked');
    expect(result.current.inputProps['aria-checked']).toBe(true);
  });

  it('returns indeterminate state', () => {
    const { result } = renderHook(() => useCheckbox({ indeterminate: true }));
    expect(result.current.state).toBe('indeterminate');
    expect(result.current.inputProps['aria-checked']).toBe('mixed');
  });

  it('sets disabled attributes', () => {
    const { result } = renderHook(() => useCheckbox({ disabled: true }));
    expect(result.current.inputProps.disabled).toBe(true);
    expect(result.current.rootProps['data-disabled']).toBe('');
    expect(result.current.labelProps['data-disabled']).toBe('');
  });

  it('sets required attribute', () => {
    const { result } = renderHook(() => useCheckbox({ required: true }));
    expect(result.current.inputProps.required).toBe(true);
  });

  it('updates when options change', () => {
    const { result, rerender } = renderHook(
      (props) => useCheckbox(props),
      { initialProps: { checked: false } as Parameters<typeof useCheckbox>[0] },
    );
    expect(result.current.state).toBe('unchecked');

    rerender({ checked: true });
    expect(result.current.state).toBe('checked');
  });
});
