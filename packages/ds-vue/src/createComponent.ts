import { defineComponent, h, computed, type PropType, type SetupContext } from 'vue';
import type { ComponentDefinition } from '@woosgem/ds-core';

type AnyComponentDefinition = ComponentDefinition<any, any, any>;

/**
 * Protected attributes that cannot be overridden by user attrs.
 * These are managed by the Core definition and ensure design consistency.
 */
const PROTECTED_ATTRS = new Set([
  'data-variant',
  'data-color',
  'data-size',
  'data-state',
  'data-full-width',
  'data-shape',
  'data-divider',
  'data-has-image',
  'data-orientation',
  'data-spacing',
  'role',
  'aria-selected',
  'aria-disabled',
  'aria-orientation',
]);

// Vue prop definition type
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

  // Build Vue props definition from defaultProps
  const propsDefinition: Record<string, VuePropDefinition> = {};

  for (const key in definition.defaultProps) {
    const defaultValue = definition.defaultProps[key];
    const propType = definition.propTypes[key];

    propsDefinition[key] = {
      type: (typeof defaultValue === 'boolean'
        ? Boolean
        : typeof defaultValue === 'number'
          ? Number
          : String) as PropType<unknown>,
      default: defaultValue,
      validator: propType
        ? (value: unknown) => (propType as readonly unknown[]).includes(value)
        : undefined,
    };
  }

  return defineComponent({
    name: definition.displayName,

    // Disable automatic attrs inheritance to control protected attrs
    inheritAttrs: false,

    props: propsDefinition,

    setup(props: Record<string, unknown>, ctx: SetupContext) {
      const { slots, attrs } = ctx;

      // Computed attrs - only recalculates when props change
      const domAttrs = computed(() => {
        return definition.mapPropsToAttrs(props as StyleProps);
      });

      return () => {
        const { class: baseClass, ...restAttrs } = domAttrs.value;

        // Merge classes: component class + user class from attrs
        const mergedClass = attrs.class
          ? `${baseClass} ${attrs.class}`
          : baseClass;

        // Filter out protected attributes from user attrs
        const safeAttrs: Record<string, unknown> = {};
        for (const key in attrs) {
          if (!PROTECTED_ATTRS.has(key) && key !== 'class') {
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
