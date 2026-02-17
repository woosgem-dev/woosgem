const FOCUSABLE_SELECTORS = [
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Get all focusable elements within a container.
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
}

/**
 * Focus the first focusable element in a container, or the container itself as fallback.
 * Uses requestAnimationFrame for timing to ensure DOM is ready.
 *
 * @returns Cleanup function that cancels the scheduled focus if not yet executed.
 */
export function setInitialFocus(container: HTMLElement): () => void {
  const rafId = requestAnimationFrame(() => {
    const focusable = getFocusableElements(container);
    const target = focusable[0] ?? container;
    target.focus();
  });

  return () => cancelAnimationFrame(rafId);
}
