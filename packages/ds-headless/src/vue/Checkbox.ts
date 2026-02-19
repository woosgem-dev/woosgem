import {
  defineComponent,
  provide,
  inject,
  computed,
  h,
  type InjectionKey,
  type PropType,
  type Ref,
} from 'vue';
import {
  computeCheckboxAttributes,
  type CheckboxAttributes,
} from '../vanilla/checkbox';
import { generateId } from '../vanilla/id';

interface CheckboxContextValue {
  attributes: Ref<CheckboxAttributes>;
  onChange?: ((checked: boolean) => void) | undefined;
}

const CHECKBOX_KEY: InjectionKey<CheckboxContextValue> = Symbol('Checkbox');

function useCheckboxContext(): CheckboxContextValue {
  const ctx = inject(CHECKBOX_KEY);
  if (!ctx) {
    throw new Error(
      'Checkbox compound components must be used within <Checkbox>',
    );
  }
  return ctx;
}

// --- Checkbox (Root Provider) ---

export const Checkbox = defineComponent({
  name: 'Checkbox',
  props: {
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    value: { type: String, default: undefined },
    checked: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    onChange: { type: Function as PropType<(checked: boolean) => void>, default: undefined },
  },
  setup(props, { slots }) {
    const fallbackId = generateId('wg-checkbox');

    const attributes = computed(() =>
      computeCheckboxAttributes(
        {
          id: props.id,
          name: props.name,
          value: props.value,
          checked: props.checked,
          indeterminate: props.indeterminate,
          disabled: props.disabled,
          required: props.required,
        },
        fallbackId,
      ),
    );

    provide(CHECKBOX_KEY, {
      attributes,
      onChange: props.onChange,
    });

    return () =>
      h('label', attributes.value.rootProps, slots.default?.());
  },
});

// --- CheckboxInput ---

export const CheckboxInput = defineComponent({
  name: 'CheckboxInput',
  setup() {
    const { attributes, onChange } = useCheckboxContext();

    function handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      onChange?.(target.checked);
    }

    return () =>
      h('input', {
        ...attributes.value.inputProps,
        onChange: handleChange,
        style: {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
      });
  },
});

// --- CheckboxIndicator ---

export const CheckboxIndicator = defineComponent({
  name: 'CheckboxIndicator',
  setup(_, { attrs }) {
    const { attributes } = useCheckboxContext();
    return () =>
      h('span', { ...attributes.value.indicatorProps, ...attrs });
  },
});

// --- CheckboxLabel ---

export const CheckboxLabel = defineComponent({
  name: 'CheckboxLabel',
  setup(_, { slots, attrs }) {
    const { attributes } = useCheckboxContext();
    return () =>
      h('span', { ...attributes.value.labelProps, ...attrs }, slots.default?.());
  },
});
