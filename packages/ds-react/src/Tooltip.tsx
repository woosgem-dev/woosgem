import {
  forwardRef,
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from 'react';
import {
  Tooltip as TooltipDef,
  type TooltipStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { useId } from './_internal/useId';

export type TooltipProps = Prettify<
  TooltipStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      | keyof TooltipStyleProps
      | 'data-position'
      | 'data-trigger'
      | 'data-arrow'
      | 'data-visible'
      | 'data-disabled'
      | 'role'
    > & {
      /** Children to wrap with tooltip */
      children: ReactNode;
      'data-position'?: never;
      'data-trigger'?: never;
      'data-arrow'?: never;
      'data-visible'?: never;
      'data-disabled'?: never;
    }
>;

export type TooltipRef = HTMLDivElement;

/**
 * Tooltip component for displaying additional information on hover, focus, or click.
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip">
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * <Tooltip content="Click to see" trigger="click" position="bottom">
 *   <IconButton icon="info" />
 * </Tooltip>
 *
 * <Tooltip content="Focus tooltip" trigger="focus" arrow={false}>
 *   <Input placeholder="Focus me" />
 * </Tooltip>
 * ```
 */
const TooltipBase = forwardRef<TooltipRef, TooltipProps>(function Tooltip(
  {
    children,
    content = '',
    position = 'top',
    trigger = 'hover',
    delay = 0,
    arrow = true,
    visible: controlledVisible,
    disabled = false,
    className,
    ...restProps
  },
  ref
) {
  const [internalVisible, setInternalVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const tooltipId = useId('tooltip');

  // Use controlled visible if provided, otherwise use internal state
  const isControlled = controlledVisible !== undefined;
  const isVisible = isControlled ? controlledVisible : internalVisible;

  const showTooltip = useCallback(() => {
    if (disabled) return;
    if (delay > 0) {
      timeoutRef.current = window.setTimeout(() => {
        setInternalVisible(true);
      }, delay);
    } else {
      setInternalVisible(true);
    }
  }, [disabled, delay]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setInternalVisible(false);
  }, []);

  const toggleTooltip = useCallback(() => {
    if (disabled) return;
    setInternalVisible((prev) => !prev);
  }, [disabled]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const attrs = TooltipDef.mapPropsToAttrs({
    content,
    position,
    trigger,
    delay,
    arrow,
    visible: isVisible,
    disabled,
  });

  function getTriggerHandlers() {
    if (trigger === 'hover') {
      return { onMouseEnter: showTooltip, onMouseLeave: hideTooltip };
    }
    if (trigger === 'focus') {
      return { onFocus: showTooltip, onBlur: hideTooltip };
    }
    if (trigger === 'click') {
      return { onClick: toggleTooltip };
    }
    return {};
  }

  const triggerHandlers = getTriggerHandlers();

  const finalClassName = className ? `wg-tooltip-wrapper ${className}` : 'wg-tooltip-wrapper';

  return (
    <div
      ref={ref}
      className={finalClassName}
      data-position={position}
      {...triggerHandlers}
      {...restProps}
    >
      <span className="wg-tooltip__trigger" aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </span>

      <div
        id={tooltipId}
        className={attrs.class}
        data-position={attrs['data-position']}
        data-trigger={attrs['data-trigger']}
        data-arrow={attrs['data-arrow']}
        data-visible={attrs['data-visible']}
        data-disabled={attrs['data-disabled']}
        role={attrs.role}
        aria-hidden={!isVisible}
      >
        {arrow && <span className="wg-tooltip__arrow" />}
        <span className="wg-tooltip__content">{content}</span>
      </div>
    </div>
  );
});

TooltipBase.displayName = 'Tooltip';

export const Tooltip = memo(TooltipBase) as ComponentType<TooltipProps>;
