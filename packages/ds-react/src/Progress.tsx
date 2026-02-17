import { forwardRef, memo, useMemo, type CSSProperties, type ComponentPropsWithoutRef } from 'react';
import {
  Progress as ProgressDef,
  getProgressPercentage,
  type ProgressStyleProps,
  type Prettify,
  filterNullish,
} from '@woosgem-dev/core';

/**
 * Progress component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type ProgressProps = Prettify<
  ProgressStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      | keyof ProgressStyleProps
      | 'data-variant'
      | 'data-color'
      | 'data-size'
      | 'data-show-label'
      | 'role'
      | 'aria-valuenow'
      | 'aria-valuemin'
      | 'aria-valuemax'
    > & {
      'data-variant'?: never;
      'data-color'?: never;
      'data-size'?: never;
      'data-show-label'?: never;
    }
>;

/** Ref type for Progress component */
export type ProgressRef = HTMLDivElement;

// Pre-compute the set of style prop keys for O(1) lookup
const stylePropsKeys = new Set(Object.keys(ProgressDef.defaultProps));

/**
 * Progress bar component for displaying completion percentage.
 * Ideal for visualizing scores, loading states, or task completion.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Progress value={75} />
 *
 * // With label
 * <Progress value={50} showLabel />
 *
 * // Different colors for score visualization
 * <Progress value={90} color="success" aria-label="Quality score" />
 * <Progress value={45} color="warning" aria-label="Quality score" />
 * <Progress value={20} color="danger" aria-label="Quality score" />
 *
 * // Gradient variant
 * <Progress value={80} variant="gradient" color="primary" />
 *
 * // Custom max value
 * <Progress value={3} max={5} showLabel />
 * ```
 */
export const Progress = memo(
  forwardRef<ProgressRef, ProgressProps>(function Progress(props, ref) {
    const { children, className, style, ...restProps } = props;

    // Separate style props from native HTML props
    const { styleProps, nativeProps } = useMemo(() => {
      const styleProps: Record<string, unknown> = {};
      const nativeProps: Record<string, unknown> = {};
      const rest = restProps as Record<string, unknown>;

      for (const key in rest) {
        if (stylePropsKeys.has(key)) {
          styleProps[key] = rest[key];
        } else {
          nativeProps[key] = rest[key];
        }
      }

      return { styleProps, nativeProps };
    }, [restProps]);

    // Memoize the attribute mapping
    const attrs = useMemo(
      () => ProgressDef.mapPropsToAttrs(styleProps as ProgressStyleProps),
      [styleProps]
    );

    // Parse the CSS variable from attrs.style and merge with user style
    const finalStyle = useMemo((): CSSProperties => {
      const cssVarMatch = attrs.style.match(/--progress-value:\s*([^;]+)/);
      const progressValue = cssVarMatch ? cssVarMatch[1] : '0%';
      return {
        '--progress-value': progressValue,
        ...style,
      } as CSSProperties;
    }, [attrs.style, style]);

    // Merge className
    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    // Get percentage for label
    const merged = { ...ProgressDef.defaultProps, ...filterNullish(styleProps as ProgressStyleProps) };
    const percentage = getProgressPercentage(merged.value, merged.max);

    return (
      <div
        {...nativeProps}
        ref={ref}
        className={finalClassName}
        style={finalStyle}
        data-variant={attrs['data-variant']}
        data-color={attrs['data-color']}
        data-size={attrs['data-size']}
        data-show-label={attrs['data-show-label']}
        role={attrs.role}
        aria-valuenow={attrs['aria-valuenow']}
        aria-valuemin={attrs['aria-valuemin']}
        aria-valuemax={attrs['aria-valuemax']}
      >
        <div className="wg-progress__track">
          <div className="wg-progress__fill">
            {merged.showLabel && (
              <span className="wg-progress__label">{percentage}%</span>
            )}
          </div>
        </div>
        {children}
      </div>
    );
  })
);

Progress.displayName = 'Progress';
