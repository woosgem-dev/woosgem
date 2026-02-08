import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { Toast as ToastDef, type ToastStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Toast component props.
 * Combines style props with all standard div HTML attributes,
 * while excluding protected attributes used by the design system.
 */
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

/** Ref type for Toast component */
export type ToastRef = HTMLDivElement;

const BaseToast = createComponent(ToastDef);

/**
 * Toast component for displaying temporary notification messages.
 *
 * Features:
 * - Auto-dismiss after configurable duration
 * - Multiple positions (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)
 * - Variants for different message types (info, success, warning, error)
 * - Optional close button
 * - Accessible with role="alert" and aria-live="polite"
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Toast variant="success">
 *   Operation completed successfully!
 * </Toast>
 *
 * // With custom position and duration
 * <Toast
 *   variant="error"
 *   position="bottom-center"
 *   duration={10000}
 *   onClose={() => console.log('closed')}
 * >
 *   An error occurred!
 * </Toast>
 *
 * // Without auto-dismiss
 * <Toast variant="info" duration={0} closable>
 *   This toast will not auto-dismiss.
 * </Toast>
 * ```
 */
export const ToastBase = forwardRef<ToastRef, ToastProps>((props, ref) => {
  const {
    duration = ToastDef.defaultProps.duration,
    visible = ToastDef.defaultProps.visible,
    onClose,
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

  // Auto-dismiss logic
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

  if (!visible) {
    return null;
  }

  return <BaseToast ref={ref} visible={visible} duration={duration} {...restProps} />;
});

ToastBase.displayName = 'Toast';

export const Toast = ToastBase as ComponentType<ToastProps>;

// ============================================================================
// Toast Container (for managing multiple toasts)
// ============================================================================

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
    // Group toasts by position
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
            className="toast-container"
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

// ============================================================================
// useToast Hook (optional utility)
// ============================================================================

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

        // Limit number of toasts
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
