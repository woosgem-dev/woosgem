/**
 * Color Set Protocol (CSP) - Dark Theme Preset
 * WooSGem dark theme with inverted monochrome palette
 */

import type { ColorSetDefinition } from '../schema';

/**
 * Dark theme definition
 * Inverted primary (white) — explicit hover/active required
 * because CSP lighten on pure white has no effect.
 */
export const darkTheme: ColorSetDefinition = {
  id: 'dark',
  name: 'Dark Theme',
  mode: 'dark',

  primary: { base: '#FFFFFF', hover: '#F5F5F5', active: '#C4C4C4' },
  secondary: { base: '#C4C4C4', hover: '#F5F5F5', active: '#FFFFFF' },

  semantic: {
    danger: { base: '#EF4444', hover: '#F87171', active: '#FCA5A5' },
    success: { base: '#22C55E', hover: '#4ADE80', active: '#86EFAC' },
    warning: { base: '#FFB800', hover: '#FCD34D', active: '#FDE68A' },
    info: { base: '#3B82F6', hover: '#60A5FA', active: '#93C5FD' },
  },

  text: { default: '#FFFFFF', muted: '#C4C4C4', subtle: '#8A8A8A', inverse: '#000000' },
  background: { default: '#1A1A1A', subtle: '#0F0F0F', muted: '#121212', elevated: '#252525' },
  border: { default: '#4A4A4A', hover: '#8A8A8A' },
  focusRing: '#3B82F6',
};
