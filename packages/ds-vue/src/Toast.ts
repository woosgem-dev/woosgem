import { defineComponent, h, ref, watch, onUnmounted, computed, type PropType, type Ref } from 'vue';
import { Toast as ToastDef, type ToastStyleProps, type Prettify } from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Toast component props.
 * Combines style props with specific allowed native props.
 */
export type ToastProps = Prettify<
  ToastStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

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
 * ```vue
 * <Toast variant="success">
 *   Operation completed successfully!
 * </Toast>
 *
 * <Toast
 *   variant="error"
 *   position="bottom-center"
 *   :duration="10000"
 *   @close="handleClose"
 * >
 *   An error occurred!
 * </Toast>
 *
 * <Toast variant="info" :duration="0" :closable="true">
 *   This toast will not auto-dismiss.
 * </Toast>
 * ```
 */
export const Toast = defineComponent({
  name: 'Toast',
  inheritAttrs: false,
  props: {
    variant: {
      type: String as PropType<ToastStyleProps['variant']>,
      default: ToastDef.defaultProps.variant,
    },
    position: {
      type: String as PropType<ToastStyleProps['position']>,
      default: ToastDef.defaultProps.position,
    },
    duration: {
      type: Number,
      default: ToastDef.defaultProps.duration,
    },
    closable: {
      type: Boolean,
      default: ToastDef.defaultProps.closable,
    },
    visible: {
      type: Boolean,
      default: ToastDef.defaultProps.visible,
    },
    class: {
      type: String,
      default: undefined,
    },
  },
  emits: ['close', 'update:visible'],
  setup(props, { slots, emit, attrs }) {
    const timerId = ref<ReturnType<typeof setTimeout> | null>(null);

    const clearTimer = () => {
      if (timerId.value) {
        clearTimeout(timerId.value);
        timerId.value = null;
      }
    };

    const handleClose = () => {
      clearTimer();
      emit('close');
      emit('update:visible', false);
    };

    // Auto-dismiss logic
    const startTimer = () => {
      clearTimer();
      if (props.visible && props.duration > 0) {
        timerId.value = setTimeout(() => {
          handleClose();
        }, props.duration);
      }
    };

    // Watch visibility and duration changes
    watch(
      () => [props.visible, props.duration],
      () => {
        if (props.visible && props.duration > 0) {
          startTimer();
        } else {
          clearTimer();
        }
      },
      { immediate: true }
    );

    onUnmounted(() => {
      clearTimer();
    });

    return () => {
      if (!props.visible) {
        return null;
      }

      return h(
        BaseToast,
        {
          ...attrs,
          variant: props.variant,
          position: props.position,
          duration: props.duration,
          closable: props.closable,
          visible: props.visible,
          class: props.class,
          onClose: handleClose,
        },
        slots
      );
    };
  },
});

// Toast Container (for managing multiple toasts)

export interface ToastItem {
  id: string;
  variant?: ToastStyleProps['variant'];
  position?: ToastStyleProps['position'];
  duration?: number;
  closable?: boolean;
  content: string;
}

export interface ToastContainerProps {
  /** Toast items to render */
  toasts: ToastItem[];
  /** Default position for all toasts */
  position?: ToastStyleProps['position'];
}

/**
 * Toast Container for managing multiple toast notifications.
 *
 * @example
 * ```vue
 * <script setup>
 * const toasts = ref<ToastItem[]>([]);
 *
 * const addToast = (content: string, variant: ToastVariant) => {
 *   const id = Date.now().toString();
 *   toasts.value.push({ id, content, variant });
 * };
 *
 * const removeToast = (id: string) => {
 *   toasts.value = toasts.value.filter(t => t.id !== id);
 * };
 * </script>
 *
 * <template>
 *   <ToastContainer :toasts="toasts" @dismiss="removeToast" />
 * </template>
 * ```
 */
export const ToastContainer = defineComponent({
  name: 'ToastContainer',
  props: {
    toasts: {
      type: Array as PropType<ToastItem[]>,
      required: true,
    },
    position: {
      type: String as PropType<ToastStyleProps['position']>,
      default: ToastDef.defaultProps.position,
    },
  },
  emits: ['dismiss'],
  setup(props, { emit }) {
    // Group toasts by position
    const groupedToasts = computed(() => {
      return props.toasts.reduce(
        (acc, toast) => {
          const pos = toast.position || props.position || 'top-right';
          if (!acc[pos]) {
            acc[pos] = [];
          }
          acc[pos].push(toast);
          return acc;
        },
        {} as Record<string, ToastItem[]>
      );
    });

    const handleDismiss = (id: string) => {
      emit('dismiss', id);
    };

    return () => {
      return Object.entries(groupedToasts.value).map(([pos, items]) =>
        h(
          'div',
          {
            key: pos,
            class: 'wg-toast-container',
            'data-position': pos,
          },
          items.map((toast) =>
            h(
              Toast,
              {
                key: toast.id,
                variant: toast.variant,
                position: (toast.position || props.position) as ToastStyleProps['position'],
                duration: toast.duration,
                closable: toast.closable,
                onClose: () => handleDismiss(toast.id),
              },
              () => toast.content
            )
          )
        )
      );
    };
  },
});

// useToast Composable (optional utility)

export interface UseToastOptions {
  /** Default duration for toasts */
  defaultDuration?: number;
  /** Maximum number of toasts to show */
  maxToasts?: number;
  /** Default position for toasts */
  defaultPosition?: ToastStyleProps['position'];
}

export interface UseToastReturn {
  toasts: Ref<ToastItem[]>;
  addToast: (content: string, options?: Partial<Omit<ToastItem, 'id' | 'content'>>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

/**
 * Composable for managing toast notifications.
 *
 * @example
 * ```vue
 * <script setup>
 * import { useToast, ToastContainer } from '@woosgem/ds-vue';
 *
 * const { toasts, addToast, removeToast } = useToast();
 *
 * const showSuccess = () => {
 *   addToast('Operation successful!', { variant: 'success' });
 * };
 * </script>
 *
 * <template>
 *   <button @click="showSuccess">Show Toast</button>
 *   <ToastContainer :toasts="toasts" @dismiss="removeToast" />
 * </template>
 * ```
 */
export function useToast(options: UseToastOptions = {}) {
  const {
    defaultDuration = ToastDef.defaultProps.duration,
    maxToasts = 5,
    defaultPosition = ToastDef.defaultProps.position,
  } = options;

  const toasts = ref<ToastItem[]>([]);

  const addToast = (content: string, toastOptions?: Partial<Omit<ToastItem, 'id' | 'content'>>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    toasts.value.push({
      id,
      content,
      duration: defaultDuration,
      position: defaultPosition,
      closable: true,
      ...toastOptions,
    });

    // Limit number of toasts
    if (toasts.value.length > maxToasts) {
      toasts.value = toasts.value.slice(-maxToasts);
    }

    return id;
  };

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  };

  const clearAll = () => {
    toasts.value = [];
  };

  return { toasts, addToast, removeToast, clearAll };
}
