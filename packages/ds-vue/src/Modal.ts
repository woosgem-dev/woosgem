import {
  defineComponent,
  h,
  ref,
  computed,
  watch,
  onUnmounted,
  Teleport,
  type PropType,
  type DefineComponent,
} from 'vue';
import {
  Modal as ModalDef,
  ModalHeader as ModalHeaderDef,
  ModalBody as ModalBodyDef,
  ModalFooter as ModalFooterDef,
  type ModalStyleProps,
  type ModalHeaderStyleProps,
  type ModalBodyStyleProps,
  type ModalFooterStyleProps,
  type Prettify,
} from '@woosgem-dev/core';
import { createComponent } from './_internal/createComponent';

/**
 * Modal component props.
 */
export type ModalProps = Prettify<
  ModalStyleProps & {
    /** Additional CSS class */
    class?: string;
    /** Modal title for aria-labelledby */
    title?: string;
    /** Portal container selector (default: body) */
    teleportTo?: string;
    /** Disable focus trap */
    disableFocusTrap?: boolean;
    /** Disable ESC key close */
    disableEscapeKey?: boolean;
    /** Disable overlay click close */
    disableOverlayClick?: boolean;
  }
>;

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
}

// Mark as used (for tree-shaking prevention in some bundlers)
void createComponent;

/**
 * Modal component for displaying content in a dialog overlay.
 *
 * @example
 * ```vue
 * <Modal :open="isOpen" @close="isOpen = false" title="Confirm">
 *   <ModalHeader @close="isOpen = false">Confirm Action</ModalHeader>
 *   <ModalBody>Are you sure you want to proceed?</ModalBody>
 *   <ModalFooter>
 *     <Button variant="ghost" @click="isOpen = false">Cancel</Button>
 *     <Button @click="handleConfirm">Confirm</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 */
export const Modal = defineComponent({
  name: 'Modal',

  props: {
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'full'>,
      default: 'md',
    },
    closable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    title: {
      type: String as PropType<string>,
      default: undefined,
    },
    teleportTo: {
      type: String as PropType<string>,
      default: 'body',
    },
    disableFocusTrap: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disableEscapeKey: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disableOverlayClick: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  emits: ['close', 'update:open'],

  setup(props, { emit, slots }) {
    const modalRef = ref<HTMLElement | null>(null);
    const previousActiveElement = ref<HTMLElement | null>(null);
    let originalOverflow = '';

    // Handle ESC key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.closable && !props.disableEscapeKey) {
        event.preventDefault();
        emit('close');
        emit('update:open', false);
      }

      // Focus trap
      if (!props.disableFocusTrap && modalRef.value && event.key === 'Tab') {
        const focusableElements = getFocusableElements(modalRef.value);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    // Handle overlay click
    const handleOverlayClick = () => {
      if (props.closable && !props.disableOverlayClick) {
        emit('close');
        emit('update:open', false);
      }
    };

    // Watch open state
    watch(
      () => props.open,
      (isOpen) => {
        if (isOpen) {
          previousActiveElement.value = document.activeElement as HTMLElement;
          originalOverflow = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          document.addEventListener('keydown', handleKeyDown);

          // Focus first focusable element
          requestAnimationFrame(() => {
            if (modalRef.value) {
              const focusableElements = getFocusableElements(modalRef.value);
              const firstElement = focusableElements[0];
              if (firstElement) {
                firstElement.focus();
              } else {
                modalRef.value.focus();
              }
            }
          });
        } else {
          document.body.style.overflow = originalOverflow;
          document.removeEventListener('keydown', handleKeyDown);

          // Restore focus
          if (previousActiveElement.value) {
            previousActiveElement.value.focus();
          }
        }
      },
      { immediate: true }
    );

    onUnmounted(() => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    });

    // Computed attrs from core
    const modalAttrs = computed(() => ModalDef.mapPropsToAttrs({
      open: props.open,
      size: props.size,
      closable: props.closable,
    }));

    return () => {
      if (!props.open) {
        return null;
      }

      const { class: baseClass, ...restAttrs } = modalAttrs.value;

      return h(
        Teleport,
        { to: props.teleportTo },
        h(
          'div',
          {
            class: 'modal-container',
            'data-open': props.open || undefined,
          },
          [
            // Overlay
            h('div', {
              class: 'overlay',
              'data-opacity': 'medium',
              'data-level': 'modal',
              'data-visible': props.open || undefined,
              'aria-hidden': 'true',
              onClick: handleOverlayClick,
            }),
            // Modal
            h(
              'div',
              {
                ref: modalRef,
                class: baseClass,
                ...restAttrs,
                tabindex: -1,
                'aria-labelledby': props.title ? 'modal-title' : undefined,
              },
              slots.default?.()
            ),
          ]
        )
      );
    };
  },
}) as DefineComponent<ModalProps>;

// ModalHeader
export type ModalHeaderProps = Prettify<
  ModalHeaderStyleProps & {
    class?: string;
  }
>;

export const ModalHeader = defineComponent({
  name: 'ModalHeader',

  props: {
    showClose: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },

  emits: ['close'],

  setup(props, { emit, slots }) {
    const headerAttrs = computed(() => ModalHeaderDef.mapPropsToAttrs({
      showClose: props.showClose,
    }));

    return () => {
      const { class: baseClass, ...restAttrs } = headerAttrs.value;

      return h(
        'div',
        {
          class: baseClass,
          ...restAttrs,
        },
        [
          h('div', { class: 'modal-title', id: 'modal-title' }, slots.default?.()),
          props.showClose &&
            h(
              'button',
              {
                type: 'button',
                class: 'modal-close',
                onClick: () => emit('close'),
                'aria-label': 'Close modal',
              },
              h(
                'svg',
                {
                  width: '20',
                  height: '20',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                },
                [
                  h('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                  h('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
                ]
              )
            ),
        ]
      );
    };
  },
}) as DefineComponent<ModalHeaderProps>;

// ModalBody
export type ModalBodyProps = Prettify<
  ModalBodyStyleProps & {
    class?: string;
  }
>;

export const ModalBody = defineComponent({
  name: 'ModalBody',

  props: {
    scrollable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },

  setup(props, { slots }) {
    const bodyAttrs = computed(() => ModalBodyDef.mapPropsToAttrs({
      scrollable: props.scrollable,
    }));

    return () => {
      const { class: baseClass, ...restAttrs } = bodyAttrs.value;

      return h(
        'div',
        {
          class: baseClass,
          ...restAttrs,
        },
        slots.default?.()
      );
    };
  },
}) as DefineComponent<ModalBodyProps>;

// ModalFooter
export type ModalFooterProps = Prettify<
  ModalFooterStyleProps & {
    class?: string;
  }
>;

export const ModalFooter = defineComponent({
  name: 'ModalFooter',

  props: {
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'end',
    },
  },

  setup(props, { slots }) {
    const footerAttrs = computed(() => ModalFooterDef.mapPropsToAttrs({
      align: props.align,
    }));

    return () => {
      const { class: baseClass, ...restAttrs } = footerAttrs.value;

      return h(
        'div',
        {
          class: baseClass,
          ...restAttrs,
        },
        slots.default?.()
      );
    };
  },
}) as DefineComponent<ModalFooterProps>;
