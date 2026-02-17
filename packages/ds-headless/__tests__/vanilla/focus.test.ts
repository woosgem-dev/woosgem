/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { getFocusableElements, setInitialFocus } from '../../src/vanilla/focus';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('getFocusableElements', () => {
  it('returns buttons, inputs, selects, textareas, links, and tabindex elements', () => {
    document.body.innerHTML = `
      <div id="container">
        <button>Click</button>
        <input type="text" />
        <select><option>A</option></select>
        <textarea></textarea>
        <a href="/page">Link</a>
        <div tabindex="0">Custom</div>
      </div>
    `;
    const container = document.getElementById('container')!;
    const elements = getFocusableElements(container);
    expect(elements).toHaveLength(6);
  });

  it('excludes disabled elements', () => {
    document.body.innerHTML = `
      <div id="container">
        <button disabled>Disabled</button>
        <input type="text" disabled />
        <button>Enabled</button>
      </div>
    `;
    const container = document.getElementById('container')!;
    const elements = getFocusableElements(container);
    expect(elements).toHaveLength(1);
    expect(elements[0]!.textContent).toBe('Enabled');
  });

  it('excludes tabindex="-1" elements', () => {
    document.body.innerHTML = `
      <div id="container">
        <div tabindex="-1">Hidden</div>
        <div tabindex="0">Visible</div>
      </div>
    `;
    const container = document.getElementById('container')!;
    const elements = getFocusableElements(container);
    expect(elements).toHaveLength(1);
  });

  it('returns empty array when no focusable elements exist', () => {
    document.body.innerHTML = '<div id="container"><p>Text only</p></div>';
    const container = document.getElementById('container')!;
    expect(getFocusableElements(container)).toHaveLength(0);
  });
});

describe('setInitialFocus', () => {
  it('focuses the first focusable element after rAF', async () => {
    document.body.innerHTML = `
      <div id="container">
        <button id="first">First</button>
        <button id="second">Second</button>
      </div>
    `;
    const container = document.getElementById('container')!;
    setInitialFocus(container);

    // Wait for requestAnimationFrame
    await new Promise((r) => setTimeout(r, 50));

    expect(document.activeElement).toBe(document.getElementById('first'));
  });

  it('focuses the container itself when no focusable children', async () => {
    document.body.innerHTML = '<div id="container" tabindex="-1"><p>Text</p></div>';
    const container = document.getElementById('container')!;
    setInitialFocus(container);

    await new Promise((r) => setTimeout(r, 50));

    expect(document.activeElement).toBe(container);
  });

  it('returns a cleanup function that cancels pending focus', () => {
    document.body.innerHTML = '<div id="container"><button>Btn</button></div>';
    const container = document.getElementById('container')!;
    const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame');

    const cleanup = setInitialFocus(container);
    cleanup();

    expect(cancelSpy).toHaveBeenCalledTimes(1);
    cancelSpy.mockRestore();
  });
});
