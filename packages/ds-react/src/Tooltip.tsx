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

/**
 * Tooltip component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
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

/** Ref type for Tooltip component */
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

  // Get attrs from Core definition
  const attrs = TooltipDef.mapPropsToAttrs({
    content,
    position,
    trigger,
    delay,
    arrow,
    visible: isVisible,
    disabled,
  });

  // Build trigger handlers based on trigger type
  const triggerHandlers =
    trigger === 'hover'
      ? {
          onMouseEnter: showTooltip,
          onMouseLeave: hideTooltip,
        }
      : trigger === 'focus'
        ? {
            onFocus: showTooltip,
            onBlur: hideTooltip,
          }
        : trigger === 'click'
          ? {
              onClick: toggleTooltip,
            }
          : {};

  const finalClassName = className ? `tooltip-wrapper ${className}` : 'tooltip-wrapper';

  return (
    <div
      ref={ref}
      className={finalClassName}
      data-position={position}
      {...triggerHandlers}
      {...restProps}
    >
      {/* Trigger element with aria-describedby */}
      <span className="tooltip-trigger" aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </span>

      {/* Tooltip content */}
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
        {arrow && <span className="tooltip-arrow" />}
        <span className="tooltip-content">{content}</span>
      </div>
    </div>
  );
});

TooltipBase.displayName = 'Tooltip';

export const Tooltip = memo(TooltipBase) as ComponentType<TooltipProps>;
