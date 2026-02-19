import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldError,
  FieldDescription,
} from '../../src/vue/Field';
import { resetIdCounter } from '../../src/vanilla/id';

describe('Field compound components (Vue)', () => {
  beforeEach(() => {
    resetIdCounter();
  });

  it('renders label element', () => {
    const wrapper = mount(Field, {
      props: { name: 'email' },
      slots: {
        default: () =>
          h(FieldLabel, null, { default: () => 'Email' }),
      },
    });

    const label = wrapper.find('label');
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Email');
  });

  it('provides controlProps via slot props', () => {
    const wrapper = mount(Field, {
      props: { id: 'test-field', name: 'username', required: true },
      slots: {
        default: () =>
          h(FieldLabel, null, {
            default: () => [
              'Username',
              h(FieldControl, null, {
                default: (controlProps: Record<string, unknown>) =>
                  h('input', controlProps),
              }),
            ],
          }),
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('id')).toBe('test-field');
    expect(input.attributes('name')).toBe('username');
    expect(input.attributes('required')).toBeDefined();
  });

  it('sets data-* attributes on label', () => {
    const wrapper = mount(Field, {
      props: { name: 'email', required: true, disabled: true, error: true },
      slots: {
        default: () =>
          h(FieldLabel, null, { default: () => 'Email' }),
      },
    });

    const label = wrapper.find('label');
    expect(label.attributes('data-required')).toBeDefined();
    expect(label.attributes('data-disabled')).toBeDefined();
    expect(label.attributes('data-error')).toBeDefined();
  });

  it('renders FieldError with role=alert', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', name: 'email', error: true },
      slots: {
        default: () =>
          h(FieldError, null, { default: () => 'Required field' }),
      },
    });

    const error = wrapper.find('[role="alert"]');
    expect(error.exists()).toBe(true);
    expect(error.text()).toBe('Required field');
    expect(error.attributes('id')).toBe('f-error');
    expect(error.attributes('aria-live')).toBe('assertive');
  });

  it('FieldDescription auto-registers in aria-describedby', async () => {
    const wrapper = mount(Field, {
      props: { id: 'f', name: 'email' },
      slots: {
        default: () => [
          h(FieldLabel, null, {
            default: () => [
              'Email',
              h(FieldControl, null, {
                default: (controlProps: Record<string, unknown>) =>
                  h('input', controlProps),
              }),
            ],
          }),
          h(FieldDescription, null, { default: () => 'Help text' }),
        ],
      },
    });

    // Wait for onMounted + reactivity
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const input = wrapper.find('input');
    expect(input.attributes('aria-describedby')).toBe('f-description');

    const desc = wrapper.find('#f-description');
    expect(desc.exists()).toBe(true);
    expect(desc.text()).toBe('Help text');
  });

  it('includes both description and error in aria-describedby', async () => {
    const wrapper = mount(Field, {
      props: { id: 'f', name: 'email', error: true },
      slots: {
        default: () => [
          h(FieldLabel, null, {
            default: () => [
              'Email',
              h(FieldControl, null, {
                default: (controlProps: Record<string, unknown>) =>
                  h('input', controlProps),
              }),
            ],
          }),
          h(FieldDescription, null, { default: () => 'Help text' }),
          h(FieldError, null, { default: () => 'Error message' }),
        ],
      },
    });

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    const input = wrapper.find('input');
    expect(input.attributes('aria-describedby')).toBe(
      'f-description f-error',
    );
  });

  it('throws when FieldLabel used without Field', () => {
    expect(() => mount(FieldLabel, { slots: { default: () => 'Test' } })).toThrow(
      'Field compound components must be used within <Field>',
    );
  });

  it('throws when FieldControl used without Field', () => {
    expect(() =>
      mount(FieldControl, {
        slots: {
          default: (controlProps: Record<string, unknown>) =>
            h('input', controlProps),
        },
      }),
    ).toThrow('Field compound components must be used within <Field>');
  });
});
