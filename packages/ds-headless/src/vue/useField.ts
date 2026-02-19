import { computed, unref, type Ref } from 'vue';
import { computeFieldAttributes, type FieldConfig } from '../vanilla/field';
import { generateId } from '../vanilla/id';

export interface UseFieldOptions {
  id?: string;
  name?: string;
  required?: boolean | Ref<boolean>;
  disabled?: boolean | Ref<boolean>;
  error?: boolean | Ref<boolean>;
  hasDescription?: boolean | Ref<boolean>;
}

/**
 * Headless field composable that manages id, name, and ARIA attributes.
 * Uses vanilla generateId() for ID generation (not SSR-safe — documented limitation).
 */
export function useField(options: UseFieldOptions = {}) {
  const fallbackId = generateId();

  return computed(() => {
    const config: FieldConfig = {
      id: options.id,
      name: options.name,
      required: unref(options.required),
      disabled: unref(options.disabled),
      error: unref(options.error),
      hasDescription: unref(options.hasDescription),
    };

    return computeFieldAttributes(config, fallbackId);
  });
}
