import { useEffect } from 'react';
import { createScrollLock } from '../vanilla/scroll-lock';

/**
 * Lock body scroll while active.
 *
 * @param active - Whether the scroll lock is active.
 */
export function useScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;
    return createScrollLock();
  }, [active]);
}
