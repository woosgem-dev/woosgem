import { watch, onUnmounted, type Ref } from 'vue';
import { createScrollLock } from '../vanilla/scroll-lock';

/**
 * Lock body scroll while the ref value is true.
 *
 * @param active - Reactive ref controlling the scroll lock.
 */
export function useScrollLock(active: Ref<boolean>): void {
  let cleanup: (() => void) | null = null;

  watch(
    active,
    (isActive) => {
      cleanup?.();
      cleanup = null;

      if (isActive) {
        cleanup = createScrollLock();
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cleanup?.();
    cleanup = null;
  });
}
