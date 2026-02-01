/**
 * Color Set Protocol (CSP) - Theme Presets
 * Pre-defined theme definitions for the design system
 */

export { defaultTheme } from './default';
export { darkTheme } from './dark';

import { defaultTheme } from './default';
import { darkTheme } from './dark';
import type { ColorSetDefinition } from '../schema';

/**
 * All available preset themes
 */
export const presets: Record<string, ColorSetDefinition> = {
  default: defaultTheme,
  dark: darkTheme,
};

/**
 * Get a preset theme by ID
 */
export function getPreset(id: string): ColorSetDefinition | undefined {
  return presets[id];
}

/**
 * Get all preset theme IDs
 */
export function getPresetIds(): string[] {
  return Object.keys(presets);
}
