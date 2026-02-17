import { useEffect } from 'react';
import { onEscapeKey } from '../vanilla/escape-key';

/**
 * Listen for Escape key while active.
 *
 * @param active - Whether the listener is active.
 * @param callback - Called when Escape is pressed.
 */
export function useEscapeKey(active: boolean, callback: () => void): void {
  useEffect(() => {
    if (!active) return;
    return onEscapeKey(callback);
  }, [active, callback]);
}
