/**
 * Color Set Protocol (CSP) - Default Theme Preset
 * WooSGem light theme with monochrome primary palette
 */

import type { ColorSetDefinition } from '../schema';

/**
 * Default light theme definition
 * Monochrome primary (black) — explicit hover/active required
 * because CSP cannot darken pure black via HSL adjustment.
 */
export const defaultTheme: ColorSetDefinition = {
  id: 'default',
  name: 'Default Light Theme',
  mode: 'light',

  primary: { base: '#000000', hover: '#1A1A1A', active: '#1A1A1A' },
  secondary: { base: '#4A4A4A', hover: '#1A1A1A', active: '#1A1A1A' },

  semantic: {
    danger: { base: '#E63312', hover: '#CC2A0D', active: '#B32209' },
    success: { base: '#00875A', hover: '#006B47', active: '#00533A' },
    warning: { base: '#FFB800', hover: '#E6A500', active: '#CC9500' },
    info: { base: '#0066CC', hover: '#0052A3', active: '#004080' },
  },

  text: { default: '#000000', muted: '#4A4A4A', subtle: '#8A8A8A', inverse: '#FFFFFF' },
  background: { default: '#FFFFFF', subtle: '#F5F5F5', muted: '#F5F5F5', elevated: '#FFFFFF' },
  border: { default: '#C4C4C4', hover: '#8A8A8A' },
  focusRing: '#0066CC',
};
