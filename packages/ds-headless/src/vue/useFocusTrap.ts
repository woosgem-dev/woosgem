import { watch, onUnmounted, type Ref } from 'vue';
import { createFocusTrap } from '../vanilla/focus-trap';
import { setInitialFocus } from '../vanilla/focus';

/**
 * Trap focus within a referenced element while active.
 * Sets initial focus to the first focusable child on activation.
 *
 * @param target - Template ref to the container element.
 * @param active - Reactive ref controlling the focus trap.
 */
export function useFocusTrap(target: Ref<HTMLElement | null>, active: Ref<boolean>): void {
  let cleanupTrap: (() => void) | null = null;
  let cleanupFocus: (() => void) | null = null;

  watch(
    [target, active] as const,
    ([el, isActive]) => {
      cleanupTrap?.();
      cleanupFocus?.();
      cleanupTrap = null;
      cleanupFocus = null;

      if (el && isActive) {
        cleanupTrap = createFocusTrap(el);
        cleanupFocus = setInitialFocus(el);
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    cleanupTrap?.();
    cleanupFocus?.();
    cleanupTrap = null;
    cleanupFocus = null;
  });
}
