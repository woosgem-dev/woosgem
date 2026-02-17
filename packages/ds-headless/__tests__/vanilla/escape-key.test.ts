/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { onEscapeKey } from '../../src/vanilla/escape-key';

const cleanups: (() => void)[] = [];

afterEach(() => {
  cleanups.forEach((fn) => fn());
  cleanups.length = 0;
  document.body.innerHTML = '';
});

describe('onEscapeKey', () => {
  it('calls callback on Escape key press', () => {
    const callback = vi.fn();
    cleanups.push(onEscapeKey(callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback on other keys', () => {
    const callback = vi.fn();
    cleanups.push(onEscapeKey(callback));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));

    expect(callback).not.toHaveBeenCalled();
  });

  it('prevents default on Escape', () => {
    cleanups.push(onEscapeKey(vi.fn()));

    const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');

    document.dispatchEvent(event);

    expect(preventSpy).toHaveBeenCalledTimes(1);
  });

  it('removes listener on cleanup', () => {
    const callback = vi.fn();
    const cleanup = onEscapeKey(callback);

    cleanup();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(callback).not.toHaveBeenCalled();
  });

  it('supports multiple independent listeners', () => {
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    const cleanup1 = onEscapeKey(cb1);
    cleanups.push(onEscapeKey(cb2));

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(1);

    cleanup1();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(2);
  });
});
