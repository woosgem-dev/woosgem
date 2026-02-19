import { describe, it, expect, beforeEach } from 'vitest';
import { defineComponent, h, ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { useField } from '../../src/vue/useField';
import { resetIdCounter } from '../../src/vanilla/id';
import type { FieldAttributes } from '../../src/vanilla/field';

function mountComposable<T>(composableFn: () => T) {
  let result: T;
  const Comp = defineComponent({
    setup() {
      result = composableFn();
      return () => h('div');
    },
  });
  const wrapper = mount(Comp);
  return { wrapper, result: result! };
}

describe('useField', () => {
  beforeEach(() => {
    resetIdCounter();
  });

  it('returns a computed ref with field attributes', () => {
    const { result } = mountComposable(() => useField());
    expect(result.value).toBeDefined();
    expect(result.value.labelProps).toBeDefined();
    expect(result.value.controlProps).toBeDefined();
    expect(result.value.errorProps).toBeDefined();
    expect(result.value.descriptionProps).toBeDefined();
  });

  it('generates auto id from vanilla generateId', () => {
    const { result } = mountComposable(() => useField());
    expect(result.value.fieldId).toBe('wg-field-1');
  });

  it('uses user-provided id', () => {
    const { result } = mountComposable(() =>
      useField({ id: 'custom' }),
    );
    expect(result.value.fieldId).toBe('custom');
    expect(result.value.controlProps.id).toBe('custom');
  });

  it('uses user-provided name', () => {
    const { result } = mountComposable(() =>
      useField({ name: 'email' }),
    );
    expect(result.value.fieldName).toBe('email');
  });

  it('defaults name to id', () => {
    const { result } = mountComposable(() =>
      useField({ id: 'my-id' }),
    );
    expect(result.value.fieldName).toBe('my-id');
  });

  it('reacts to ref-based error changes', async () => {
    const error = ref(false);
    const { result } = mountComposable(() => useField({ id: 'f', error }));

    expect(result.value.controlProps['aria-invalid']).toBeUndefined();

    error.value = true;
    await nextTick();

    expect(result.value.controlProps['aria-invalid']).toBe('true');
    expect(result.value.labelProps['data-error']).toBe('');
  });

  it('reacts to ref-based disabled changes', async () => {
    const disabled = ref(false);
    const { result } = mountComposable(() =>
      useField({ id: 'f', disabled }),
    );

    expect(result.value.controlProps.disabled).toBeUndefined();

    disabled.value = true;
    await nextTick();

    expect(result.value.controlProps.disabled).toBe(true);
    expect(result.value.labelProps['data-disabled']).toBe('');
  });

  it('reacts to ref-based required changes', async () => {
    const required = ref(false);
    const { result } = mountComposable(() =>
      useField({ id: 'f', required }),
    );

    expect(result.value.controlProps.required).toBeUndefined();

    required.value = true;
    await nextTick();

    expect(result.value.controlProps.required).toBe(true);
  });

  it('includes hasDescription in aria-describedby', () => {
    const { result } = mountComposable(() =>
      useField({ id: 'f', hasDescription: true }),
    );
    expect(result.value.controlProps['aria-describedby']).toBe(
      'f-description',
    );
  });

  it('reacts to ref-based hasDescription changes', async () => {
    const hasDescription = ref(false);
    const { result } = mountComposable(() =>
      useField({ id: 'f', hasDescription }),
    );

    expect(result.value.controlProps['aria-describedby']).toBeUndefined();

    hasDescription.value = true;
    await nextTick();

    expect(result.value.controlProps['aria-describedby']).toBe(
      'f-description',
    );
  });
});
