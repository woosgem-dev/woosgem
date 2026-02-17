/**
 * Lock body scroll by setting overflow to hidden.
 *
 * @returns Cleanup function that restores the original overflow value.
 */
export function createScrollLock(): () => void {
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = originalOverflow;
  };
}
