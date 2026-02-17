import { useState, useEffect, useCallback, useRef } from 'react';
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
 * Headless tooltip hook that manages visibility, positioning, and ARIA attributes.
 *
 * @param options - Tooltip configuration.
 * @returns Tooltip state and prop spreaders for trigger and tooltip elements.
 */
export function useTooltip(options: UseTooltipOptions = {}) {
  const { position = 'top', offset = 8, trigger = 'hover', delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<TooltipCoords>({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);

  const updatePosition = useCallback(() => {
    if (triggerRef.current && tooltipRef.current) {
      const newCoords = calculateTooltipPosition(
        triggerRef.current,
        tooltipRef.current,
        position,
        offset,
      );
      setCoords(newCoords);
    }
  }, [position, offset]);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const cleanup = createTooltipHandlers(el, {
      onShow: () => setIsVisible(true),
      onHide: () => setIsVisible(false),
      trigger,
      delay,
    });

    return cleanup;
  }, [trigger, delay]);

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, updatePosition]);

  return {
    isVisible,
    coords,
    triggerRef,
    tooltipRef,
    triggerProps: {
      ref: triggerRef,
      'aria-describedby': isVisible ? 'tooltip' : undefined,
    },
    tooltipProps: {
      ref: tooltipRef,
      role: 'tooltip' as const,
      style: {
        position: 'fixed' as const,
        left: `${coords.x}px`,
        top: `${coords.y}px`,
      },
    },
  };
}
