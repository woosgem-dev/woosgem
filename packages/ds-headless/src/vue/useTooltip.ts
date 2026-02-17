import { ref, watch, onMounted, onUnmounted, type Ref } from 'vue';
import {
  calculateTooltipPosition,
  createTooltipHandlers,
  type TooltipPosition,
  type TooltipCoords,
  type TooltipTriggerType,
} from '../vanilla/tooltip';

export interface UseTooltipOptions {
  position?: TooltipPosition;
  offset?: number;
  trigger?: TooltipTriggerType;
  delay?: number;
}

/**
 * Headless tooltip composable that manages visibility, positioning, and ARIA attributes.
 *
 * @param options - Tooltip configuration.
 * @returns Tooltip state and template refs for trigger and tooltip elements.
 */
export function useTooltip(options: UseTooltipOptions = {}) {
  const { position = 'top', offset = 8, trigger = 'hover', delay = 0 } = options;

  const isVisible = ref(false);
  const coords = ref<TooltipCoords>({ x: 0, y: 0 });
  const triggerRef: Ref<HTMLElement | null> = ref(null);
  const tooltipRef: Ref<HTMLElement | null> = ref(null);

  let handlersCleanup: (() => void) | null = null;

  function updatePosition(): void {
    if (triggerRef.value && tooltipRef.value) {
      coords.value = calculateTooltipPosition(
        triggerRef.value,
        tooltipRef.value,
        position,
        offset,
      );
    }
  }

  watch(isVisible, (visible) => {
    if (visible) {
      updatePosition();
    }
  });

  onMounted(() => {
    const el = triggerRef.value;
    if (!el) return;

    handlersCleanup = createTooltipHandlers(el, {
      onShow: () => { isVisible.value = true; },
      onHide: () => { isVisible.value = false; },
      trigger,
      delay,
    });
  });

  onUnmounted(() => {
    handlersCleanup?.();
    handlersCleanup = null;
  });

  return {
    isVisible,
    coords,
    triggerRef,
    tooltipRef,
    triggerProps: {
      ref: triggerRef,
    },
    tooltipProps: {
      ref: tooltipRef,
      role: 'tooltip' as const,
    },
  };
}
