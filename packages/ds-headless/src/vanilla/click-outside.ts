/**
 * Detect clicks outside of a target element.
 * Uses mousedown to catch the click before focus shifts.
 *
 * @param target - The element to detect outside clicks for.
 * @param callback - Called when a click outside the target is detected.
 * @returns Cleanup function that removes the listener.
 */
export function onClickOutside(target: HTMLElement, callback: () => void): () => void {
  function handler(event: MouseEvent): void {
    if (!target.contains(event.target as Node)) {
      callback();
    }
  }

  document.addEventListener('mousedown', handler);
  return () => document.removeEventListener('mousedown', handler);
}
