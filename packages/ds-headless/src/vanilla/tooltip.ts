export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipCoords {
  x: number;
  y: number;
}

/**
 * Calculate tooltip position relative to a trigger element.
 * Uses getBoundingClientRect for positioning.
 *
 * @param trigger - The element that triggers the tooltip.
 * @param tooltip - The tooltip element to position.
 * @param position - Placement relative to the trigger.
 * @param offset - Gap between trigger and tooltip in pixels.
 * @returns Calculated x/y coordinates for the tooltip.
 */
export function calculateTooltipPosition(
  trigger: HTMLElement,
  tooltip: HTMLElement,
  position: TooltipPosition = 'top',
  offset: number = 8,
): TooltipCoords {
  const triggerRect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  switch (position) {
    case 'top':
      return {
        x: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
        y: triggerRect.top - tooltipRect.height - offset,
      };
    case 'bottom':
      return {
        x: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
        y: triggerRect.bottom + offset,
      };
    case 'left':
      return {
        x: triggerRect.left - tooltipRect.width - offset,
        y: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
      };
    case 'right':
      return {
        x: triggerRect.right + offset,
        y: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
      };
  }
}

export type TooltipTriggerType = 'hover' | 'focus' | 'click';

export interface TooltipOptions {
  position?: TooltipPosition;
  offset?: number;
  trigger?: TooltipTriggerType;
  delay?: number;
}

/**
 * Create tooltip show/hide handlers for a trigger element.
 *
 * @param triggerEl - The element that triggers the tooltip.
 * @param options - Handler configuration.
 * @param options.onShow - Called when the tooltip should become visible.
 * @param options.onHide - Called when the tooltip should hide.
 * @param options.trigger - Interaction type: 'hover', 'focus', or 'click'.
 * @param options.delay - Delay in ms before showing the tooltip.
 * @returns Cleanup function that removes all listeners.
 */
export function createTooltipHandlers(
  triggerEl: HTMLElement,
  options: {
    onShow: () => void;
    onHide: () => void;
    trigger?: TooltipTriggerType;
    delay?: number;
  },
): () => void {
  const { onShow, onHide, trigger = 'hover', delay = 0 } = options;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const show = () => {
    if (delay > 0) {
      timeoutId = setTimeout(onShow, delay);
    } else {
      onShow();
    }
  };

  const hide = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    onHide();
  };

  if (trigger === 'hover') {
    triggerEl.addEventListener('mouseenter', show);
    triggerEl.addEventListener('mouseleave', hide);
    triggerEl.addEventListener('focus', show);
    triggerEl.addEventListener('blur', hide);
  } else if (trigger === 'focus') {
    triggerEl.addEventListener('focus', show);
    triggerEl.addEventListener('blur', hide);
  } else if (trigger === 'click') {
    triggerEl.addEventListener('click', () => {
      // Toggle behavior for click
    });
  }

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    triggerEl.removeEventListener('mouseenter', show);
    triggerEl.removeEventListener('mouseleave', hide);
    triggerEl.removeEventListener('focus', show);
    triggerEl.removeEventListener('blur', hide);
  };
}
