import { defineComponent, h, ref, computed, onUnmounted, type PropType } from 'vue';
import {
  Tooltip as TooltipDef,
  TooltipPositions,
  TooltipTriggers,
  type TooltipPosition,
  type TooltipTrigger,
  type Prettify,
  type TooltipStyleProps,
} from '@woosgem-dev/core';

/**
 * Tooltip component props.
 * Combines style props with specific allowed native props.
 */
export type TooltipProps = Prettify<
  TooltipStyleProps & {
    /** Additional CSS class */
    class?: string;
  }
>;

let tooltipIdCounter = 0;

/**
 * Tooltip component for displaying additional information on hover, focus, or click.
 *
 * @example
 * ```vue
 * <Tooltip content="This is a tooltip">
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * <Tooltip content="Click to see" trigger="click" position="bottom">
 *   <IconButton icon="info" />
 * </Tooltip>
 *
 * <Tooltip content="Focus tooltip" trigger="focus" :arrow="false">
 *   <Input placeholder="Focus me" />
 * </Tooltip>
 * ```
 */
export const Tooltip = defineComponent({
  name: 'Tooltip',

  props: {
    content: {
      type: String,
      default: '',
    },
    position: {
      type: String as PropType<TooltipPosition>,
      default: 'top',
      validator: (value: string) => TooltipPositions.includes(value as TooltipPosition),
    },
    trigger: {
      type: String as PropType<TooltipTrigger>,
      default: 'hover',
      validator: (value: string) => TooltipTriggers.includes(value as TooltipTrigger),
    },
    delay: {
      type: Number,
      default: 0,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:visible'],

  setup(props, { slots, emit, attrs }) {
    const internalVisible = ref(false);
    const timeoutId = ref<number | null>(null);
    const tooltipId = `wg-tooltip-${++tooltipIdCounter}`;

    // Use controlled visible if provided, otherwise use internal state
    const isControlled = computed(() => props.visible !== undefined);
    const isVisible = computed(() =>
      isControlled.value ? props.visible : internalVisible.value
    );

    const showTooltip = () => {
      if (props.disabled) return;
      if (props.delay > 0) {
        timeoutId.value = window.setTimeout(() => {
          internalVisible.value = true;
          emit('update:visible', true);
        }, props.delay);
      } else {
        internalVisible.value = true;
        emit('update:visible', true);
      }
    };

    const hideTooltip = () => {
      if (timeoutId.value) {
        clearTimeout(timeoutId.value);
        timeoutId.value = null;
      }
      internalVisible.value = false;
      emit('update:visible', false);
    };

    const toggleTooltip = () => {
      if (props.disabled) return;
      const newVisible = !internalVisible.value;
      internalVisible.value = newVisible;
      emit('update:visible', newVisible);
    };

    // Cleanup on unmount
    onUnmounted(() => {
      if (timeoutId.value) {
        clearTimeout(timeoutId.value);
      }
    });

    return () => {
      // Get attrs from Core definition
      const domAttrs = TooltipDef.mapPropsToAttrs({
        content: props.content,
        position: props.position,
        trigger: props.trigger,
        delay: props.delay,
        arrow: props.arrow,
        visible: isVisible.value,
        disabled: props.disabled,
      });

      // Build trigger handlers based on trigger type
      const triggerHandlers =
        props.trigger === 'hover'
          ? {
              onMouseenter: showTooltip,
              onMouseleave: hideTooltip,
            }
          : props.trigger === 'focus'
            ? {
                onFocus: showTooltip,
                onBlur: hideTooltip,
              }
            : props.trigger === 'click'
              ? {
                  onClick: toggleTooltip,
                }
              : {};

      const wrapperClass = attrs.class
        ? `tooltip-wrapper ${attrs.class}`
        : 'tooltip-wrapper';

      return h(
        'div',
        {
          class: wrapperClass,
          'data-position': props.position,
          ...triggerHandlers,
        },
        [
          // Trigger element with aria-describedby
          h(
            'span',
            {
              class: 'tooltip-trigger',
              'aria-describedby': isVisible.value ? tooltipId : undefined,
            },
            slots.default?.()
          ),

          // Tooltip content
          h(
            'div',
            {
              id: tooltipId,
              class: domAttrs.class,
              'data-position': domAttrs['data-position'],
              'data-trigger': domAttrs['data-trigger'],
              'data-arrow': domAttrs['data-arrow'],
              'data-visible': domAttrs['data-visible'],
              'data-disabled': domAttrs['data-disabled'],
              role: domAttrs.role,
              'aria-hidden': !isVisible.value,
            },
            [
              props.arrow && h('span', { class: 'tooltip-arrow' }),
              h('span', { class: 'tooltip-content' }, props.content),
            ]
          ),
        ]
      );
    };
  },
});
