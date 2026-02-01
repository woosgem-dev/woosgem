/**
 * Spacing Tokens
 * Synced from ds-styles (SCSS is source of truth)
 */

// ===================
// Spacing Scale (4px base unit)
// ===================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  11: '2.75rem',  // 44px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = (typeof spacing)[SpacingKey];

// ===================
// Border Radius
// ===================

export const radius = {
  none: '0',
  xs: '0.125rem',  // 2px
  sm: '0.25rem',   // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',
} as const;

export type RadiusKey = keyof typeof radius;
export type RadiusValue = (typeof radius)[RadiusKey];

// ===================
// Component Sizes
// ===================

export const size = {
  xs: '1.5rem',   // 24px
  sm: '2rem',     // 32px
  md: '2.5rem',   // 40px
  lg: '3rem',     // 48px
  xl: '4rem',     // 64px
  '2xl': '5rem',  // 80px
} as const;

export type SizeKey = keyof typeof size;
export type SizeValue = (typeof size)[SizeKey];

// ===================
// Icon Sizes
// ===================

export const iconSize = {
  sm: '1rem',     // 16px
  md: '1.25rem',  // 20px
  lg: '1.5rem',   // 24px
} as const;

export type IconSizeKey = keyof typeof iconSize;
export type IconSizeValue = (typeof iconSize)[IconSizeKey];

// ===================
// Z-Index Scale
// ===================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

export type ZIndexKey = keyof typeof zIndex;
export type ZIndexValue = (typeof zIndex)[ZIndexKey];

// ===================
// Breakpoints
// ===================

export const breakpoints = {
  sm: '320px',
  md: '672px',
  lg: '1056px',
  xlg: '1312px',
  max: '1584px',
} as const;

export type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[BreakpointKey];
