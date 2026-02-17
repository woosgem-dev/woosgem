import { watch, onUnmounted, type Ref } from 'vue';
import { onEscapeKey } from '../vanilla/escape-key';

/**
 * Listen for Escape key while the ref value is true.
 *
 * @param active - Reactive ref controlling the listener.
 * @param callback - Called when Escape is pressed.
 */
export function useEscapeKey(active: Ref<boolean>, callback: () => void): void {
  let cleanup: (() => void) | null = null;

  watch(
    active,
    (isActive) => {
      cleanup?.();
      cleanup = null;

      if (isActive) {
        cleanup = onEscapeKey(callback);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cleanup?.();
    cleanup = null;
  });
}
