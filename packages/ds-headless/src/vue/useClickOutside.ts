import { watch, onUnmounted, type Ref } from 'vue';
import { onClickOutside } from '../vanilla/click-outside';

/**
 * Detect clicks outside a referenced element.
 *
 * @param target - Template ref to the target element.
 * @param callback - Called when a click outside is detected.
 */
export function useClickOutside(
  target: Ref<HTMLElement | null>,
  callback: () => void,
): void {
  let cleanup: (() => void) | null = null;

  watch(
    target,
    (el) => {
      cleanup?.();
      cleanup = null;

      if (el) {
        cleanup = onClickOutside(el, callback);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cleanup?.();
    cleanup = null;
  });
}
