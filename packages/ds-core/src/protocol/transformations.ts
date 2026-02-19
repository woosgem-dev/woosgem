/**
 * Color Set Protocol (CSP) - Default Transformation Rules
 * Mode-specific rules for deriving colors from base values
 */

import type { HexColor, ColorValue, ThemeMode } from './schema';
import { darken, lighten, withAlpha } from './transformer';

/**
 * Transformation function signature
 */
export type TransformFn = (base: HexColor, mode: ThemeMode) => ColorValue;

/**
 * Built-in transformation functions
 */
export const transforms = {
  /**
   * Darken for hover state
   * Light mode: darken 10%, Dark mode: lighten 10%
   */
  hover: (base: HexColor, mode: ThemeMode): HexColor => {
    return mode === 'light' ? darken(base, 10) : lighten(base, 10);
  },

  /**
   * Darken for active/pressed state
   * Light mode: darken 15%, Dark mode: lighten 15%
   */
  active: (base: HexColor, mode: ThemeMode): HexColor => {
    return mode === 'light' ? darken(base, 15) : lighten(base, 15);
  },

  /**
   * 10% alpha transparency
   */
  alpha10: (base: HexColor, _mode: ThemeMode): ColorValue => {
    return withAlpha(base, 0.1);
  },

  /**
   * 15% alpha transparency (for darken-5 effect in dark mode)
   */
  alpha15: (base: HexColor, _mode: ThemeMode): ColorValue => {
    return withAlpha(base, 0.15);
  },

  /**
   * 20% alpha transparency
   */
  alpha20: (base: HexColor, _mode: ThemeMode): ColorValue => {
    return withAlpha(base, 0.2);
  },

  /**
   * Light variant
   * Light mode: lighten 45%, Dark mode: 10% opacity
   */
  light: (base: HexColor, mode: ThemeMode): ColorValue => {
    return mode === 'light' ? lighten(base, 45) : withAlpha(base, 0.1);
  },

  /**
   * Light darken variant (for hover on light backgrounds)
   * Light mode: lighten 40%, Dark mode: 15% opacity
   */
  lightDarken5: (base: HexColor, mode: ThemeMode): ColorValue => {
    return mode === 'light' ? lighten(base, 40) : withAlpha(base, 0.15);
  },

  /**
   * Lighten by 20% (for text variants)
   */
  lighten20: (base: HexColor, mode: ThemeMode): HexColor => {
    return mode === 'light' ? lighten(base, 20) : lighten(base, 15);
  },

  /**
   * Darken by 3% (for subtle background differences)
   */
  darken3: (base: HexColor, _mode: ThemeMode): HexColor => darken(base, 3),
} as const;

/**
 * Transformation rule definition for a single derived token
 */
export interface DerivedTokenRule {
  /** Source token name to derive from */
  source: string;
  /** Transform function to apply */
  transform: keyof typeof transforms;
}

/**
 * Default derivation rules for all auto-generated tokens
 * Maps derived token name to its source and transformation
 */
export const defaultDerivationRules: Record<string, DerivedTokenRule> = {
  // Primary derivatives
  'primary-hover': { source: 'primary', transform: 'hover' },
  'primary-active': { source: 'primary', transform: 'active' },
  'primary-alpha-10': { source: 'primary', transform: 'alpha10' },
  'primary-alpha-20': { source: 'primary', transform: 'alpha20' },

  // Secondary derivatives
  'secondary-hover': { source: 'secondary', transform: 'hover' },
  'secondary-active': { source: 'secondary', transform: 'active' },
  'secondary-alpha-10': { source: 'secondary', transform: 'alpha10' },

  // Danger derivatives
  'danger-hover': { source: 'danger', transform: 'hover' },
  'danger-active': { source: 'danger', transform: 'active' },
  'danger-alpha-20': { source: 'danger', transform: 'alpha20' },
  'danger-lighten-20': { source: 'danger', transform: 'lighten20' },

  // Success derivatives
  'success-hover': { source: 'success', transform: 'hover' },
  'success-active': { source: 'success', transform: 'active' },
  'success-alpha-20': { source: 'success', transform: 'alpha20' },
  'success-lighten-20': { source: 'success', transform: 'lighten20' },

  // Warning derivatives
  'warning-hover': { source: 'warning', transform: 'hover' },
  'warning-active': { source: 'warning', transform: 'active' },

  // Info derivatives
  'info-hover': { source: 'info', transform: 'hover' },
  'info-active': { source: 'info', transform: 'active' },

  // Border derivatives
  'border-hover': { source: 'border', transform: 'hover' },

  // Background derivatives
  'background-muted-darken-3': { source: 'background-muted', transform: 'darken3' },
  'background-subtle-darken-3': { source: 'background-subtle', transform: 'darken3' },

  // Accent light colors (derived from semantic colors)
  'red-light': { source: 'danger', transform: 'light' },
  'green-light': { source: 'success', transform: 'light' },
  'yellow-light': { source: 'warning', transform: 'light' },
  'blue-light': { source: 'info', transform: 'light' },

  // Accent light darken variants
  'red-light-darken-5': { source: 'danger', transform: 'lightDarken5' },
  'green-light-darken-5': { source: 'success', transform: 'lightDarken5' },
  'yellow-light-darken-5': { source: 'warning', transform: 'lightDarken5' },
  'blue-light-darken-5': { source: 'info', transform: 'lightDarken5' },
};

/**
 * Apply a transformation to derive a color
 */
export function applyTransform(
  base: HexColor,
  transformName: keyof typeof transforms,
  mode: ThemeMode
): ColorValue {
  const transformFn = transforms[transformName];
  return transformFn(base, mode);
}
