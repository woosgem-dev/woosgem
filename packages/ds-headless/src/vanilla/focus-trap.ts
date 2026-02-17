import { getFocusableElements } from './focus';

/**
 * Trap Tab/Shift+Tab focus cycling within a container element.
 *
 * @param container - The element to trap focus within.
 * @returns Cleanup function that removes the keydown listener.
 */
export function createFocusTrap(container: HTMLElement): () => void {
  function handler(event: KeyboardEvent): void {
    if (event.key !== 'Tab') return;

    const focusable = getFocusableElements(container);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}
