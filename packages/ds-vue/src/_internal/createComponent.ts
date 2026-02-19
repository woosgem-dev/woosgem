import { defineComponent, h, computed, type PropType, type SetupContext } from 'vue';
import { PROTECTED_ATTRS_SET } from '@woosgem-dev/core';
import type { ComponentDefinition } from '@woosgem-dev/core';

type AnyComponentDefinition = ComponentDefinition<any, any, any>;

interface VuePropDefinition {
  type: PropType<unknown>;
  default: unknown;
  validator?: ((value: unknown) => boolean) | undefined;
}

/**
 * Creates a Vue component from a framework-agnostic ComponentDefinition.
 *
 * Features:
 * - Automatic props definition from defaultProps
 * - Computed attrs mapping (only recalculates on prop change)
 * - Slot support
 * - Proper class merging
 */
export function createComponent<Def extends AnyComponentDefinition>(definition: Def) {
  type StyleProps = Def['defaultProps'];

  const TYPE_MAP: Record<string, PropType<unknown>> = {
    boolean: Boolean as PropType<unknown>,
    number: Number as PropType<unknown>,
    string: String as PropType<unknown>,
  };

  const propsDefinition: Record<string, VuePropDefinition> = {};

  for (const key in definition.defaultProps) {
    const defaultValue = definition.defaultProps[key];
    const propType = definition.propTypes[key];

    propsDefinition[key] = {
      type: TYPE_MAP[typeof defaultValue] ?? (String as PropType<unknown>),
      default: defaultValue,
      validator: propType
        ? (value: unknown) => (propType as readonly unknown[]).includes(value)
        : undefined,
    };
  }

  return defineComponent({
    name: definition.displayName,

    inheritAttrs: false,

    props: propsDefinition,

    setup(props: Record<string, unknown>, { slots, attrs }: SetupContext) {
      const domAttrs = computed(() => {
        return definition.mapPropsToAttrs(props as StyleProps);
      });

      return () => {
        const { class: baseClass, ...restAttrs } = domAttrs.value;

        const mergedClass = attrs.class
          ? `${baseClass} ${attrs.class}`
          : baseClass;

        const safeAttrs: Record<string, unknown> = {};
        for (const key in attrs) {
          if (!PROTECTED_ATTRS_SET.has(key) && key !== 'class') {
            safeAttrs[key] = attrs[key];
          }
        }

        return h(
          definition.template.tag,
          {
            ...safeAttrs,
            ...restAttrs,
            class: mergedClass,
          },
          slots.default?.()
        );
      };
    },
  });
}
