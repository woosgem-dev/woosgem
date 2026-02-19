import {
  forwardRef,
  memo,
  useMemo,
  type ComponentPropsWithoutRef,
} from 'react';
import {
  Alert as AlertDef,
  type AlertStyleProps,
  type Prettify,
} from '@woosgem-dev/core';

/**
 * Alert component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
export type AlertProps = Prettify<
  AlertStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      keyof AlertStyleProps | 'data-variant' | 'data-status' | 'data-closable' | 'role'
    > & {
      'data-variant'?: never;
      'data-status'?: never;
      'data-closable'?: never;
      role?: never;
      /** Callback when close button is clicked */
      onClose?: () => void;
    }
>;

/** Ref type for Alert component */
export type AlertRef = HTMLDivElement;

const AlertComponent = memo(
  forwardRef<AlertRef, AlertProps>(function Alert(props, ref) {
    const {
      variant,
      status,
      closable,
      onClose,
      children,
      className,
      ...restProps
    } = props;

    const attrs = useMemo(
      () => AlertDef.mapPropsToAttrs({
        variant: variant ?? AlertDef.defaultProps.variant,
        status: status ?? AlertDef.defaultProps.status,
        closable: closable ?? AlertDef.defaultProps.closable,
      }),
      [variant, status, closable],
    );

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <div
        ref={ref}
        {...restProps}
        className={finalClassName}
        data-variant={attrs['data-variant']}
        data-status={attrs['data-status']}
        data-closable={attrs['data-closable']}
        role={attrs.role}
      >
        <div className="wg-alert__content">{children}</div>
        {closable && (
          <button
            type="button"
            className="wg-alert__close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }),
);

AlertComponent.displayName = 'Alert';

/**
 * Alert component for displaying important messages.
 *
 * @example
 * ```tsx
 * <Alert status="info">
 *   This is an informational message.
 * </Alert>
 *
 * <Alert status="error" variant="filled">
 *   An error occurred!
 * </Alert>
 *
 * <Alert status="success" closable onClose={() => {}}>
 *   Operation completed successfully.
 * </Alert>
 * ```
 */
export const Alert = AlertComponent;
