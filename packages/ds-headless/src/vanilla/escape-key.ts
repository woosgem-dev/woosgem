/**
 * Listen for Escape key presses on the document.
 *
 * @param callback - Called when Escape is pressed. The event is preventDefault'd.
 * @returns Cleanup function that removes the listener.
 */
export function onEscapeKey(callback: () => void): () => void {
  function handler(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      callback();
    }
  }

  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}
