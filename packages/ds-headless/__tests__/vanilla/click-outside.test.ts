/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { onClickOutside } from '../../src/vanilla/click-outside';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('onClickOutside', () => {
  it('calls callback when clicking outside the target', () => {
    document.body.innerHTML = '<div id="target">Target</div><div id="outside">Outside</div>';
    const target = document.getElementById('target')!;
    const outside = document.getElementById('outside')!;
    const callback = vi.fn();

    onClickOutside(target, callback);

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call callback when clicking inside the target', () => {
    document.body.innerHTML = '<div id="target"><span id="child">Child</span></div>';
    const target = document.getElementById('target')!;
    const child = document.getElementById('child')!;
    const callback = vi.fn();

    onClickOutside(target, callback);

    target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).not.toHaveBeenCalled();

    child.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).not.toHaveBeenCalled();
  });

  it('removes listener on cleanup', () => {
    document.body.innerHTML = '<div id="target">Target</div><div id="outside">Outside</div>';
    const target = document.getElementById('target')!;
    const outside = document.getElementById('outside')!;
    const callback = vi.fn();

    const cleanup = onClickOutside(target, callback);
    cleanup();

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(callback).not.toHaveBeenCalled();
  });
});
