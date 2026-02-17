/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useRef } from 'react';
import { useScrollLock } from '../../src/react/useScrollLock';
import { useEscapeKey } from '../../src/react/useEscapeKey';
import { useClickOutside } from '../../src/react/useClickOutside';
import { useFocusTrap } from '../../src/react/useFocusTrap';

afterEach(() => {
  document.body.innerHTML = '';
  document.body.style.overflow = '';
});

describe('useScrollLock', () => {
  it('locks body scroll when active', () => {
    renderHook(() => useScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('does not lock when inactive', () => {
    document.body.style.overflow = 'auto';
    renderHook(() => useScrollLock(false));
    expect(document.body.style.overflow).toBe('auto');
  });

  it('restores overflow on deactivation', () => {
    document.body.style.overflow = 'auto';
    const { rerender } = renderHook(({ active }) => useScrollLock(active), {
      initialProps: { active: true },
    });

    expect(document.body.style.overflow).toBe('hidden');

    rerender({ active: false });
    expect(document.body.style.overflow).toBe('auto');
  });

  it('restores overflow on unmount', () => {
    document.body.style.overflow = 'scroll';
    const { unmount } = renderHook(() => useScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');

    unmount();
    expect(document.body.style.overflow).toBe('scroll');
  });
});

describe('useEscapeKey', () => {
  it('calls callback on Escape when active', () => {
    const callback = vi.fn();
    renderHook(() => useEscapeKey(true, callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback when inactive', () => {
    const callback = vi.fn();
    renderHook(() => useEscapeKey(false, callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).not.toHaveBeenCalled();
  });

  it('removes listener on deactivation', () => {
    const callback = vi.fn();
    const { rerender } = renderHook(
      ({ active, cb }) => useEscapeKey(active, cb),
      { initialProps: { active: true, cb: callback } },
    );

    rerender({ active: false, cb: callback });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).not.toHaveBeenCalled();
  });
});

describe('useClickOutside', () => {
  it('calls callback when clicking outside', () => {
    document.body.innerHTML = '<div id="target">Target</div><div id="outside">Outside</div>';
    const target = document.getElementById('target')!;
    const outside = document.getElementById('outside')!;
    const callback = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLElement>(target);
      useClickOutside(ref, callback);
    });

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback when clicking inside', () => {
    document.body.innerHTML = '<div id="target">Target</div>';
    const target = document.getElementById('target')!;
    const callback = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLElement>(target);
      useClickOutside(ref, callback);
    });

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

    renderHook(() => {
      const ref = useRef<HTMLElement>(container);
      useFocusTrap(ref, true);
    });

    // Wait for rAF (setInitialFocus)
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });

    expect(document.activeElement).toBe(first);

    // Tab from last should wrap to first
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

    renderHook(() => {
      const ref = useRef<HTMLElement>(container);
      useFocusTrap(ref, false);
    });

    last.focus();
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });
});
