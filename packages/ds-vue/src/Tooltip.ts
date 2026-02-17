import { defineComponent, h, type PropType } from 'vue';
import {
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
 * Uses Options API data/methods/render pattern to ensure reliable reactivity
 * across all Vue test environments (VTU + jsdom).
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

  inheritAttrs: false,

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

  data() {
    return {
      internalVisible: false,
      timeoutId: null as number | null,
      tooltipId: `wg-tooltip-${++tooltipIdCounter}`,
    };
  },

  computed: {
    isControlled(): boolean {
      return this.visible !== undefined;
    },
    isVisible(): boolean {
      return this.isControlled ? !!this.visible : this.internalVisible;
    },
  },

  methods: {
    showTooltip(): void {
      if (this.disabled) return;
      if (this.delay > 0) {
        this.timeoutId = window.setTimeout(() => {
          this.internalVisible = true;
          this.$emit('update:visible', true);
        }, this.delay);
      } else {
        this.internalVisible = true;
        this.$emit('update:visible', true);
      }
    },

    hideTooltip(): void {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
      this.internalVisible = false;
      this.$emit('update:visible', false);
    },

    toggleTooltip(): void {
      if (this.disabled) return;
      const newVisible = !this.internalVisible;
      this.internalVisible = newVisible;
      this.$emit('update:visible', newVisible);
    },
  },

  beforeUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  },

  render() {
    // Build trigger handlers based on trigger type
    const triggerHandlers =
      this.trigger === 'hover'
        ? {
            onMouseenter: this.showTooltip,
            onMouseleave: this.hideTooltip,
          }
        : this.trigger === 'focus'
          ? {
              onFocus: this.showTooltip,
              onBlur: this.hideTooltip,
            }
          : this.trigger === 'click'
            ? {
                onClick: this.toggleTooltip,
              }
            : {};

    const wrapperClass = this.$attrs.class
      ? `wg-tooltip-wrapper ${this.$attrs.class}`
      : 'wg-tooltip-wrapper';

    const visible = this.isVisible;

    return h(
      'div',
      {
        class: wrapperClass,
        'data-position': this.position,
        ...triggerHandlers,
      },
      [
        // Trigger element with aria-describedby
        h(
          'span',
          {
            class: 'wg-tooltip__trigger',
            'aria-describedby': visible ? this.tooltipId : undefined,
          },
          this.$slots.default?.()
        ),

        // Tooltip content
        h(
          'div',
          {
            id: this.tooltipId,
            class: 'wg-tooltip',
            'data-position': this.position,
            'data-trigger': this.trigger,
            'data-arrow': this.arrow ? 'true' : undefined,
            'data-visible': visible ? 'true' : undefined,
            'data-disabled': this.disabled ? 'true' : undefined,
            role: 'tooltip',
            'aria-hidden': visible ? undefined : 'true',
          },
          [
            this.arrow && h('span', { class: 'wg-tooltip__arrow' }),
            h('span', { class: 'wg-tooltip__content' }, this.content),
          ]
        ),
      ]
    );
  },
});
