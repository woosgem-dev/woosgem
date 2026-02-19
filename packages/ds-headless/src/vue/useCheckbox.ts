import { computed, unref, type Ref } from 'vue';
import { computeCheckboxAttributes, type CheckboxConfig } from '../vanilla/checkbox';
import { generateId } from '../vanilla/id';

export interface UseCheckboxOptions {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean | Ref<boolean>;
  indeterminate?: boolean | Ref<boolean>;
  disabled?: boolean | Ref<boolean>;
  required?: boolean | Ref<boolean>;
}

/**
 * Headless checkbox composable that manages ARIA attributes and state.
 * Uses vanilla generateId() for ID generation (not SSR-safe — documented limitation).
 */
export function useCheckbox(options: UseCheckboxOptions = {}) {
  const fallbackId = generateId('wg-checkbox');

  return computed(() => {
    const config: CheckboxConfig = {
      id: options.id,
      name: options.name,
      value: options.value,
      checked: unref(options.checked),
      indeterminate: unref(options.indeterminate),
      disabled: unref(options.disabled),
      required: unref(options.required),
    };

    return computeCheckboxAttributes(config, fallbackId);
  });
}
