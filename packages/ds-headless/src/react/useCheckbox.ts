import { useId, useMemo } from 'react';
import { computeCheckboxAttributes } from '../vanilla/checkbox';

export interface UseCheckboxOptions {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
}

/**
 * Headless checkbox hook that manages ARIA attributes and state.
 * Uses React 18 useId() for SSR-safe ID generation.
 */
export function useCheckbox(options: UseCheckboxOptions = {}) {
  const reactId = useId();

  return useMemo(
    () => computeCheckboxAttributes(options, reactId),
    [
      options.id,
      options.name,
      options.value,
      options.checked,
      options.indeterminate,
      options.disabled,
      options.required,
      reactId,
    ],
  );
}
