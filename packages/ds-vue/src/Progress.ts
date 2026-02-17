import { defineComponent, h, computed, type PropType, type SetupContext, type DefineComponent } from 'vue';
import {
  Progress as ProgressDef,
  getProgressPercentage,
  PROTECTED_ATTRS_SET,
  type ProgressStyleProps,
  type Prettify,
} from '@woosgem-dev/core';

export type ProgressProps = Prettify<ProgressStyleProps & { class?: string }>;

export const Progress = defineComponent({
  name: 'Progress',
  inheritAttrs: false,
  props: {
    variant: { type: String as PropType<string>, default: 'default' },
    color: { type: String as PropType<string>, default: 'primary' },
    size: { type: String as PropType<string>, default: 'md' },
    value: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    showLabel: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }: SetupContext) {
    const domAttrs = computed(() => {
      return ProgressDef.mapPropsToAttrs(props as unknown as ProgressStyleProps);
    });

    const percentage = computed(() => {
      return getProgressPercentage(props.value, props.max);
    });

    return () => {
      const { class: baseClass, style: attrStyle, ...restAttrs } = domAttrs.value;
      const mergedClass = attrs.class ? `${baseClass} ${attrs.class}` : baseClass;

      const safeAttrs: Record<string, unknown> = {};
      for (const key in attrs) {
        if (!PROTECTED_ATTRS_SET.has(key) && key !== 'class') {
          safeAttrs[key] = attrs[key];
        }
      }

      const fillChildren = props.showLabel
        ? [h('span', { class: 'progress-label' }, `${percentage.value}%`)]
        : [];

      return h(
        'div',
        {
          ...safeAttrs,
          ...restAttrs,
          class: mergedClass,
          style: attrStyle,
        },
        [
          h('div', { class: 'progress-track' }, [
            h('div', { class: 'progress-fill' }, fillChildren),
          ]),
          slots.default?.(),
        ]
      );
    };
  },
}) as DefineComponent<ProgressProps>;
