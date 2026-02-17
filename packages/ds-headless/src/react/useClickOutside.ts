import { useEffect, type RefObject } from 'react';
import { onClickOutside } from '../vanilla/click-outside';

/**
 * Detect clicks outside a referenced element.
 *
 * @param ref - React ref to the target element.
 * @param callback - Called when a click outside is detected.
 */
export function useClickOutside(ref: RefObject<HTMLElement | null>, callback: () => void): void {
  useEffect(() => {
    if (!ref.current) return;
    return onClickOutside(ref.current, callback);
  }, [ref, callback]);
}
