import { useId, useMemo } from 'react';
import { computeFieldAttributes } from '../vanilla/field';

export interface UseFieldOptions {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  hasDescription?: boolean;
}

/**
 * Headless field hook that manages id, name, and ARIA attributes.
 * Uses React 18 useId() for SSR-safe ID generation.
 */
export function useField(options: UseFieldOptions = {}) {
  const reactId = useId();

  return useMemo(
    () => computeFieldAttributes(options, reactId),
    [
      options.id,
      options.name,
      options.required,
      options.disabled,
      options.error,
      options.hasDescription,
      reactId,
    ],
  );
}
