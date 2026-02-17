/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { createFocusTrap } from '../../src/vanilla/focus-trap';

afterEach(() => {
  document.body.innerHTML = '';
});

function createModal(): {
  container: HTMLElement;
  first: HTMLButtonElement;
  middle: HTMLInputElement;
  last: HTMLButtonElement;
} {
  document.body.innerHTML = `
    <div id="modal">
      <button id="first">First</button>
      <input id="middle" type="text" />
      <button id="last">Last</button>
    </div>
  `;
  return {
    container: document.getElementById('modal')!,
    first: document.getElementById('first') as HTMLButtonElement,
    middle: document.getElementById('middle') as HTMLInputElement,
    last: document.getElementById('last') as HTMLButtonElement,
  };
}

describe('createFocusTrap', () => {
  it('wraps Tab from last to first element', () => {
    const { container, first, last } = createModal();
    createFocusTrap(container);

    last.focus();

    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(first);
  });

  it('wraps Shift+Tab from first to last element', () => {
    const { container, first, last } = createModal();
    createFocusTrap(container);

    first.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      cancelable: true,
      bubbles: true,
    });
    document.dispatchEvent(event);

    expect(document.activeElement).toBe(last);
  });

  it('does not wrap when focus is in the middle', () => {
    const { container, middle } = createModal();
    createFocusTrap(container);

    middle.focus();

    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });

  it('ignores non-Tab keys', () => {
    const { container, first } = createModal();
    createFocusTrap(container);

    first.focus();

    const event = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });

  it('removes listener on cleanup', () => {
    const { container, last, first } = createModal();
    const cleanup = createFocusTrap(container);

    cleanup();

    last.focus();
    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(last);
  });

  it('does nothing when container has no focusable elements', () => {
    document.body.innerHTML = '<div id="empty"><p>No focusable</p></div>';
    const container = document.getElementById('empty')!;
    createFocusTrap(container);

    const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true, bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    document.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });
});
