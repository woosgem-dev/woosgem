import { describe, it, expect, beforeEach } from 'vitest';
import { defineComponent, h, ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { useCheckbox } from '../../src/vue/useCheckbox';
import { resetIdCounter } from '../../src/vanilla/id';

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

describe('useCheckbox', () => {
  beforeEach(() => {
    resetIdCounter();
  });

  it('returns a computed ref with checkbox attributes', () => {
    const { result } = mountComposable(() => useCheckbox());
    expect(result.value).toBeDefined();
    expect(result.value.rootProps).toBeDefined();
    expect(result.value.inputProps).toBeDefined();
    expect(result.value.indicatorProps).toBeDefined();
    expect(result.value.labelProps).toBeDefined();
    expect(result.value.fieldId).toBeDefined();
    expect(result.value.state).toBeDefined();
  });

  it('generates auto id from vanilla generateId', () => {
    const { result } = mountComposable(() => useCheckbox());
    expect(result.value.fieldId).toBe('wg-checkbox-1');
  });

  it('uses user-provided id', () => {
    const { result } = mountComposable(() =>
      useCheckbox({ id: 'custom' }),
    );
    expect(result.value.fieldId).toBe('custom');
    expect(result.value.inputProps.id).toBe('custom');
  });

  it('uses user-provided name', () => {
    const { result } = mountComposable(() =>
      useCheckbox({ name: 'agree' }),
    );
    expect(result.value.inputProps.name).toBe('agree');
  });

  it('defaults name to id', () => {
    const { result } = mountComposable(() =>
      useCheckbox({ id: 'my-cb' }),
    );
    expect(result.value.inputProps.name).toBe('my-cb');
  });

  it('defaults value to "on"', () => {
    const { result } = mountComposable(() => useCheckbox());
    expect(result.value.inputProps.value).toBe('on');
  });

  it('returns unchecked state by default', () => {
    const { result } = mountComposable(() => useCheckbox());
    expect(result.value.state).toBe('unchecked');
    expect(result.value.inputProps['aria-checked']).toBe(false);
  });

  it('reacts to ref-based checked changes', async () => {
    const checked = ref(false);
    const { result } = mountComposable(() => useCheckbox({ id: 'cb', checked }));

    expect(result.value.state).toBe('unchecked');

    checked.value = true;
    await nextTick();

    expect(result.value.state).toBe('checked');
    expect(result.value.inputProps['aria-checked']).toBe(true);
  });

  it('reacts to ref-based indeterminate changes', async () => {
    const indeterminate = ref(false);
    const { result } = mountComposable(() =>
      useCheckbox({ id: 'cb', indeterminate }),
    );

    expect(result.value.state).toBe('unchecked');

    indeterminate.value = true;
    await nextTick();

    expect(result.value.state).toBe('indeterminate');
    expect(result.value.inputProps['aria-checked']).toBe('mixed');
  });

  it('reacts to ref-based disabled changes', async () => {
    const disabled = ref(false);
    const { result } = mountComposable(() =>
      useCheckbox({ id: 'cb', disabled }),
    );

    expect(result.value.inputProps.disabled).toBeUndefined();

    disabled.value = true;
    await nextTick();

    expect(result.value.inputProps.disabled).toBe(true);
    expect(result.value.rootProps['data-disabled']).toBe('');
    expect(result.value.labelProps['data-disabled']).toBe('');
  });

  it('reacts to ref-based required changes', async () => {
    const required = ref(false);
    const { result } = mountComposable(() =>
      useCheckbox({ id: 'cb', required }),
    );

    expect(result.value.inputProps.required).toBeUndefined();

    required.value = true;
    await nextTick();

    expect(result.value.inputProps.required).toBe(true);
  });

  it('indeterminate takes priority over checked', () => {
    const { result } = mountComposable(() =>
      useCheckbox({ checked: true, indeterminate: true }),
    );
    expect(result.value.state).toBe('indeterminate');
    expect(result.value.inputProps['aria-checked']).toBe('mixed');
  });
});
