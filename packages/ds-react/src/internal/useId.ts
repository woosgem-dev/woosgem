import { useId as useReactId } from 'react';
import { usePrefix } from './PrefixContext';

/**
 * SSR-compatible hook for generating unique IDs.
 * Used for connecting form labels, ARIA attributes, and other accessibility needs.
 *
 * Features:
 * - Uses React 18's built-in useId for SSR compatibility
 * - Prefixed with the component prefix for namespacing
 * - Deterministic on server and client (no hydration mismatch)
 *
 * @param suffix - Optional suffix to append to the ID
 * @returns A unique, stable ID string
 *
 * @example
 * ```tsx
 * // Basic usage
 * const id = useId();
 * // => 'wg-:r1:'
 *
 * // With suffix for related elements
 * const inputId = useId('input');
 * const labelId = useId('label');
 * // => 'wg-:r2:-input', 'wg-:r2:-label'
 *
 * // Usage in component
 * function Input({ label }) {
 *   const id = useId('input');
 *   return (
 *     <>
 *       <label htmlFor={id}>{label}</label>
 *       <input id={id} />
 *     </>
 *   );
 * }
 * ```
 */
export function useId(suffix?: string): string {
  const prefix = usePrefix();
  const reactId = useReactId();

  // React's useId returns something like ':r1:'
  // We combine it with our prefix for namespacing
  const baseId = `${prefix}-${reactId}`;

  return suffix ? `${baseId}-${suffix}` : baseId;
}
