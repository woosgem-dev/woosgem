import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  forwardRef,
  memo,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { Toast as ToastDef, type ToastStyleProps, type Prettify } from '@woosgem-dev/core';

export type ToastProps = Prettify<
  ToastStyleProps &
    Omit<
      ComponentPropsWithoutRef<'div'>,
      | keyof ToastStyleProps
      | 'data-variant'
      | 'data-position'
      | 'data-closable'
      | 'data-visible'
      | 'role'
      | 'aria-live'
      | 'aria-atomic'
    > & {
      'data-variant'?: never;
      'data-position'?: never;
      'data-closable'?: never;
      'data-visible'?: never;
      role?: never;
      'aria-live'?: never;
      'aria-atomic'?: never;
      /** Callback when toast is dismissed (auto or manual) */
      onClose?: () => void;
    }
>;

export type ToastRef = HTMLDivElement;

/**
 * Toast component for displaying temporary notification messages.
 *
 * @example
 * ```tsx
 * <Toast variant="success">Operation completed!</Toast>
 *
 * <Toast variant="info" duration={0} closable>
 *   This toast will not auto-dismiss.
 * </Toast>
 * ```
 */
const ToastComponent = memo(
  forwardRef<ToastRef, ToastProps>(function Toast(props, ref) {
    const {
      variant,
      position,
      duration = ToastDef.defaultProps.duration,
      closable,
      visible = ToastDef.defaultProps.visible,
      onClose,
      children,
      className,
      ...restProps
    } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleClose = useCallback(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      onClose?.();
    }, [onClose]);

    useEffect(() => {
      if (visible && duration > 0) {
        timerRef.current = setTimeout(() => {
          handleClose();
        }, duration);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      };
    }, [visible, duration, handleClose]);

    const attrs = useMemo(
      () => ToastDef.mapPropsToAttrs({
        variant: variant ?? ToastDef.defaultProps.variant,
        position: position ?? ToastDef.defaultProps.position,
        duration,
        closable: closable ?? ToastDef.defaultProps.closable,
        visible,
      }),
      [variant, position, duration, closable, visible],
    );

    if (!visible) {
      return null;
    }

    const finalClassName = className ? `${attrs.class} ${className}` : attrs.class;

    return (
      <div
        ref={ref}
        {...restProps}
        className={finalClassName}
        data-variant={attrs['data-variant']}
        data-position={attrs['data-position']}
        data-closable={attrs['data-closable']}
        data-visible={attrs['data-visible']}
        role={attrs.role}
        aria-live={attrs['aria-live']}
        aria-atomic={attrs['aria-atomic']}
      >
        <div className="wg-toast__content">{children}</div>
        {closable && (
          <button
            type="button"
            className="wg-toast__close"
            aria-label="Close notification"
            onClick={handleClose}
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

ToastComponent.displayName = 'Toast';

export const Toast = ToastComponent as ComponentType<ToastProps>;

export interface ToastItem {
  id: string;
  variant?: ToastStyleProps['variant'];
  position?: ToastStyleProps['position'];
  duration?: number;
  closable?: boolean;
  content: React.ReactNode;
}

export interface ToastContainerProps {
  /** Toast items to render */
  toasts: ToastItem[];
  /** Callback when a toast is dismissed */
  onDismiss: (id: string) => void;
  /** Default position for all toasts */
  position?: ToastStyleProps['position'];
}

/**
 * Toast Container for managing multiple toast notifications.
 *
 * @example
 * ```tsx
 * const [toasts, setToasts] = useState<ToastItem[]>([]);
 *
 * const addToast = (content: string, variant: ToastVariant) => {
 *   const id = Date.now().toString();
 *   setToasts(prev => [...prev, { id, content, variant }]);
 * };
 *
 * const removeToast = (id: string) => {
 *   setToasts(prev => prev.filter(t => t.id !== id));
 * };
 *
 * <ToastContainer toasts={toasts} onDismiss={removeToast} />
 * ```
 */
export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
  ({ toasts, onDismiss, position = 'top-right' }, ref) => {
    const groupedToasts = toasts.reduce(
      (acc, toast) => {
        const pos = toast.position || position;
        if (!acc[pos]) {
          acc[pos] = [];
        }
        acc[pos].push(toast);
        return acc;
      },
      {} as Record<ToastStyleProps['position'] & string, ToastItem[]>
    );

    return (
      <>
        {Object.entries(groupedToasts).map(([pos, items]) => (
          <div
            key={pos}
            ref={pos === position ? ref : undefined}
            className="wg-toast-container"
            data-position={pos}
          >
            {items.map((toast) => (
              <Toast
                key={toast.id}
                variant={toast.variant ?? 'info'}
                position={toast.position ?? position ?? 'top-right'}
                duration={toast.duration ?? ToastDef.defaultProps.duration}
                closable={toast.closable ?? true}
                onClose={() => onDismiss(toast.id)}
              >
                {toast.content}
              </Toast>
            ))}
          </div>
        ))}
      </>
    );
  }
);

ToastContainer.displayName = 'ToastContainer';

export interface UseToastOptions {
  /** Default duration for toasts */
  defaultDuration?: number;
  /** Maximum number of toasts to show */
  maxToasts?: number;
  /** Default position for toasts */
  defaultPosition?: ToastStyleProps['position'];
}

export interface UseToastReturn {
  toasts: ToastItem[];
  addToast: (
    content: React.ReactNode,
    options?: Partial<Omit<ToastItem, 'id' | 'content'>>
  ) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

/**
 * Hook for managing toast notifications.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { toasts, addToast, removeToast } = useToast();
 *
 *   const showSuccess = () => {
 *     addToast('Operation successful!', { variant: 'success' });
 *   };
 *
 *   return (
 *     <>
 *       <button onClick={showSuccess}>Show Toast</button>
 *       <ToastContainer toasts={toasts} onDismiss={removeToast} />
 *     </>
 *   );
 * }
 * ```
 */
export function useToast(options: UseToastOptions = {}): UseToastReturn {
  const {
    defaultDuration = ToastDef.defaultProps.duration,
    maxToasts = 5,
    defaultPosition = ToastDef.defaultProps.position,
  } = options;

  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (content: React.ReactNode, toastOptions?: Partial<Omit<ToastItem, 'id' | 'content'>>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

      setToasts((prev) => {
        const newToasts = [
          ...prev,
          {
            id,
            content,
            duration: defaultDuration,
            position: defaultPosition,
            closable: true,
            ...toastOptions,
          },
        ];

        if (newToasts.length > maxToasts) {
          return newToasts.slice(-maxToasts);
        }

        return newToasts;
      });

      return id;
    },
    [defaultDuration, defaultPosition, maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  return { toasts, addToast, removeToast, clearAll };
}
