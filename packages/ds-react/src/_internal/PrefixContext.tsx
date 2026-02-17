import { createContext, useContext, type ReactNode } from 'react';

/**
 * Default prefix for WooSGem components
 */
export const DEFAULT_PREFIX = 'wg';

/**
 * Context for CSS class prefix configuration.
 * Allows theming/customization of component class prefixes.
 */
const PrefixContext = createContext<string>(DEFAULT_PREFIX);

/**
 * Provider component for customizing the CSS prefix used by all child components.
 *
 * @example
 * ```tsx
 * <PrefixProvider value="custom">
 *   <Button variant="filled">Uses .custom-button class</Button>
 * </PrefixProvider>
 * ```
 */
export interface PrefixProviderProps {
  children: ReactNode;
  value: string;
}

export function PrefixProvider({ children, value }: PrefixProviderProps) {
  return (
    <PrefixContext.Provider value={value}>{children}</PrefixContext.Provider>
  );
}

/**
 * Hook to get the current CSS class prefix.
 * Returns the prefix from the nearest PrefixProvider, or 'wg' by default.
 *
 * @example
 * ```tsx
 * const prefix = usePrefix();
 * console.log(prefix); // 'wg'
 *
 * // Generate class name
 * const className = `${prefix}-button`;
 * ```
 */
export function usePrefix(): string {
  return useContext(PrefixContext);
}
