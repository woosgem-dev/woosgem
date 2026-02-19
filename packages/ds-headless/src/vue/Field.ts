import {
  defineComponent,
  provide,
  inject,
  computed,
  ref,
  onMounted,
  onUnmounted,
  h,
  type InjectionKey,
  type Ref,
} from 'vue';
import { computeFieldAttributes, type FieldAttributes } from '../vanilla/field';
import { generateId } from '../vanilla/id';

interface FieldContextValue {
  attributes: Ref<FieldAttributes>;
  registerDescription: () => () => void;
}

const FIELD_KEY: InjectionKey<FieldContextValue> = Symbol('Field');

function useFieldContext(): FieldContextValue {
  const ctx = inject(FIELD_KEY);
  if (!ctx) {
    throw new Error('Field compound components must be used within <Field>');
  }
  return ctx;
}

// --- Field (Root Provider) ---

export const Field = defineComponent({
  name: 'Field',
  props: {
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const fallbackId = generateId();
    const hasDescription = ref(false);

    const attributes = computed(() =>
      computeFieldAttributes(
        {
          id: props.id,
          name: props.name,
          required: props.required,
          disabled: props.disabled,
          error: props.error,
          hasDescription: hasDescription.value,
        },
        fallbackId,
      ),
    );

    provide(FIELD_KEY, {
      attributes,
      registerDescription: () => {
        hasDescription.value = true;
        return () => {
          hasDescription.value = false;
        };
      },
    });

    return () => slots.default?.();
  },
});

// --- FieldLabel ---

export const FieldLabel = defineComponent({
  name: 'FieldLabel',
  setup(_, { slots }) {
    const { attributes } = useFieldContext();
    return () =>
      h('label', attributes.value.labelProps, slots.default?.());
  },
});

// --- FieldControl ---

export const FieldControl = defineComponent({
  name: 'FieldControl',
  setup(_, { slots }) {
    const { attributes } = useFieldContext();
    return () => slots.default?.(attributes.value.controlProps);
  },
});

// --- FieldError ---

export const FieldError = defineComponent({
  name: 'FieldError',
  setup(_, { slots }) {
    const { attributes } = useFieldContext();
    return () =>
      h('div', attributes.value.errorProps, slots.default?.());
  },
});

// --- FieldDescription ---

export const FieldDescription = defineComponent({
  name: 'FieldDescription',
  setup(_, { slots }) {
    const { attributes, registerDescription } = useFieldContext();
    let unregister: (() => void) | null = null;

    onMounted(() => {
      unregister = registerDescription();
    });

    onUnmounted(() => {
      unregister?.();
    });

    return () =>
      h('div', attributes.value.descriptionProps, slots.default?.());
  },
});
