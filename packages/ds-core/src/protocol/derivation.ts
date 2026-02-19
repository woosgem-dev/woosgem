/**
 * Color Set Protocol (CSP) - Primary-Based Derivation
 * Derives secondary, semantic, and neutral colors from a primary color.
 *
 * Instead of fixed defaults, colors harmonize with the primary —
 * like a Major/Minor relationship in music.
 */

import type { HexColor, ThemeMode } from './schema';
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, mix } from './transformer';

/**
 * Canonical hue definition for a semantic color.
 * Preserves universal meaning (red=danger, green=success) while
 * allowing saturation/lightness to adapt to the primary.
 */
export interface SemanticHueDef {
  hue: number;
  lightL: number;
  darkL: number;
  minSat: number;
}

export const SEMANTIC_HUES = {
  danger: { hue: 0, lightL: 51, darkL: 60, minSat: 50 },
  success: { hue: 142, lightL: 40, darkL: 48, minSat: 50 },
  warning: { hue: 38, lightL: 50, darkL: 52, minSat: 60 },
  info: { hue: 217, lightL: 53, darkL: 60, minSat: 50 },
} as const satisfies Record<string, SemanticHueDef>;

const NEUTRAL_LIGHTNESS = {
  light: { 50: 98, 100: 96, 200: 90, 300: 83, 400: 63, 500: 45, 600: 33, 700: 25, 800: 15, 900: 10, 950: 4 },
  dark: { 50: 10, 100: 15, 200: 25, 300: 33, 400: 45, 500: 63, 600: 83, 700: 90, 800: 96, 900: 98, 950: 100 },
} as const;

export type NeutralStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

/**
 * Derive secondary from primary — same hue, reduced saturation, raised lightness.
 * Lightness stays above 58% to avoid the HSL "brown zone" on warm hues.
 */
export function deriveSecondary(primary: HexColor, mode: ThemeMode): HexColor {
  const hsl = rgbToHsl(hexToRgb(primary));
  return rgbToHex(hslToRgb({
    h: hsl.h,
    s: Math.max(12, Math.round(hsl.s * 0.4)),
    l: mode === 'light' ? 64 : 58,
  }));
}

/**
 * Derive a semantic color from its canonical hue and the primary color.
 * Scales saturation to match primary's energy, mixes 12% of primary for brand cohesion.
 */
export function deriveSemantic(
  def: SemanticHueDef,
  primary: HexColor,
  mode: ThemeMode,
): HexColor {
  const pHsl = rgbToHsl(hexToRgb(primary));
  const sat = Math.max(def.minSat, Math.min(90, Math.round(pHsl.s * 0.65 + 30)));
  const l = mode === 'light' ? def.lightL : def.darkL;
  const base = rgbToHex(hslToRgb({ h: def.hue, s: sat, l }));
  return mix(base, primary, 0.88);
}

/**
 * Derive a neutral step tinted with primary's hue.
 * Apple-style accent tinting — primary hue at 3-5% saturation.
 */
export function deriveNeutralStep(
  step: NeutralStep,
  primary: HexColor,
  mode: ThemeMode,
): HexColor {
  const pHsl = rgbToHsl(hexToRgb(primary));
  const tintSat = Math.min(6, Math.round(pHsl.s * 0.05));
  const l = NEUTRAL_LIGHTNESS[mode][step];
  return rgbToHex(hslToRgb({ h: pHsl.h, s: tintSat, l }));
}
