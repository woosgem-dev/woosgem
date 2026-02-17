import { useEffect, type RefObject } from 'react';
import { createFocusTrap } from '../vanilla/focus-trap';
import { setInitialFocus } from '../vanilla/focus';

/**
 * Trap focus within a referenced element while active.
 * Sets initial focus to the first focusable child on activation.
 *
 * @param ref - React ref to the container element.
 * @param active - Whether the focus trap is active.
 */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean): void {
  useEffect(() => {
    if (!active || !ref.current) return;

    const cleanupTrap = createFocusTrap(ref.current);
    const cleanupFocus = setInitialFocus(ref.current);

    return () => {
      cleanupTrap();
      cleanupFocus();
    };
  }, [ref, active]);
}
