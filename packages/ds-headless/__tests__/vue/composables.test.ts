/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { defineComponent, h, onMounted } from 'vue';
import { useScrollLock } from '../../src/vue/useScrollLock';
import { useEscapeKey } from '../../src/vue/useEscapeKey';
import { useClickOutside } from '../../src/vue/useClickOutside';
import { useFocusTrap } from '../../src/vue/useFocusTrap';

afterEach(() => {
  document.body.innerHTML = '';
  document.body.style.overflow = '';
});

/**
 * Helper to mount a component that uses a composable.
 */
function mountComposable<T>(composableFn: () => T): {
  wrapper: ReturnType<typeof mount>;
  result: T;
} {
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

describe('useScrollLock', () => {
  it('locks body scroll when active ref is true', () => {
    const active = ref(true);
    mountComposable(() => useScrollLock(active));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('does not lock when inactive', () => {
    document.body.style.overflow = 'auto';
    const active = ref(false);
    mountComposable(() => useScrollLock(active));
    expect(document.body.style.overflow).toBe('auto');
  });

  it('restores overflow when deactivated', async () => {
    document.body.style.overflow = 'auto';
    const active = ref(true);
    mountComposable(() => useScrollLock(active));

    expect(document.body.style.overflow).toBe('hidden');

    active.value = false;
    await nextTick();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('restores overflow on unmount', () => {
    document.body.style.overflow = 'scroll';
    const active = ref(true);
    const { wrapper } = mountComposable(() => useScrollLock(active));

    expect(document.body.style.overflow).toBe('hidden');

    wrapper.unmount();
    expect(document.body.style.overflow).toBe('scroll');
  });
});

describe('useEscapeKey', () => {
  it('calls callback on Escape when active', () => {
    const active = ref(true);
    const callback = vi.fn();
    mountComposable(() => useEscapeKey(active, callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback when inactive', () => {
    const active = ref(false);
    const callback = vi.fn();
    mountComposable(() => useEscapeKey(active, callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).not.toHaveBeenCalled();
  });

  it('removes listener when deactivated', async () => {
    const active = ref(true);
    const callback = vi.fn();
    mountComposable(() => useEscapeKey(active, callback));

    active.value = false;
    await nextTick();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).not.toHaveBeenCalled();
  });
});

describe('useClickOutside', () => {
  it('calls callback when clicking outside target', () => {
    document.body.innerHTML = '<div id="target">Target</div><div id="outside">Outside</div>';
    const target = document.getElementById('target')!;
    const outside = document.getElementById('outside')!;
    const callback = vi.fn();

    const targetRef = ref<HTMLElement | null>(target);
    mountComposable(() => useClickOutside(targetRef, callback));

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback when clicking inside target', () => {
    document.body.innerHTML = '<div id="target">Target</div>';
    const target = document.getElementById('target')!;
    const callback = vi.fn();

    const targetRef = ref<HTMLElement | null>(target);
    mountComposable(() => useClickOutside(targetRef, callback));

    target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).not.toHaveBeenCalled();
  });
});

describe('useFocusTrap', () => {
  it('traps Tab cycling when active', async () => {
    document.body.innerHTML = `
      <div id="modal">
        <button id="first">First</button>
        <button id="last">Last</button>
      </div>
    `;
    const container = document.getElementById('modal')!;
    const first = document.getElementById('first')!;
    const last = document.getElementById('last')!;

    const targetRef = ref<HTMLElement | null>(container);
    const active = ref(true);
    mountComposable(() => useFocusTrap(targetRef, active));

    // Wait for rAF
    await new Promise((r) => setTimeout(r, 50));

    expect(document.activeElement).toBe(first);

    last.focus();
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true }),
    );
    expect(document.activeElement).toBe(first);
  });

  it('does not trap when inactive', () => {
    document.body.innerHTML = `
      <div id="modal">
        <button id="first">First</button>
        <button id="last">Last</button>
      </div>
    `;
    const container = document.getElementById('modal')!;
    const last = document.getElementById('last')!;

    const targetRef = ref<HTMLElement | null>(container);
    const active = ref(false);
    mountComposable(() => useFocusTrap(targetRef, active));

    last.focus();
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });
});
