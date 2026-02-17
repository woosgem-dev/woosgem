/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { Portal } from '../../src/vue/Portal';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Portal', () => {
  it('teleports children to body by default', () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          return () =>
            h(Portal, null, {
              default: () => h('span', { class: 'teleported' }, 'Hello'),
            });
        },
      }),
      { attachTo: document.body },
    );

    const teleported = document.body.querySelector('.teleported');
    expect(teleported).not.toBeNull();
    expect(teleported!.textContent).toBe('Hello');

    wrapper.unmount();
  });

  it('teleports children to a custom target', () => {
    const target = document.createElement('div');
    target.id = 'custom-target';
    document.body.appendChild(target);

    const wrapper = mount(
      defineComponent({
        setup() {
          return () =>
            h(Portal, { to: '#custom-target' }, {
              default: () => h('div', { class: 'content' }, 'Custom'),
            });
        },
      }),
      { attachTo: document.body },
    );

    const content = target.querySelector('.content');
    expect(content).not.toBeNull();
    expect(content!.textContent).toBe('Custom');

    wrapper.unmount();
  });

  it('renders multiple children', () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          return () =>
            h(Portal, null, {
              default: () => [
                h('span', { class: 'first' }, 'First'),
                h('span', { class: 'second' }, 'Second'),
              ],
            });
        },
      }),
      { attachTo: document.body },
    );

    expect(document.body.querySelector('.first')).not.toBeNull();
    expect(document.body.querySelector('.second')).not.toBeNull();

    wrapper.unmount();
  });
});
