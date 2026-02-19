/**
 * Spacing Token Types
 *
 * Actual values defined as CSS variables in ds-styles */

export const SpacingKeys = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', '10', '11', '12', '14', '16', '20', '24',
] as const;

export type SpacingKey = (typeof SpacingKeys)[number];

export const RadiusKeys = [
  'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full',
] as const;

export type RadiusKey = (typeof RadiusKeys)[number];

export const SizeKeys = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export type SizeKey = (typeof SizeKeys)[number];

export const ZIndexKeys = [
  'dropdown',
  'sticky',
  'fixed',
  'modalBackdrop',
  'modal',
  'popover',
  'tooltip',
] as const;

export type ZIndexKey = (typeof ZIndexKeys)[number];

export const BreakpointKeys = ['sm', 'md', 'lg', 'xlg', 'max'] as const;

export type BreakpointKey = (typeof BreakpointKeys)[number];
