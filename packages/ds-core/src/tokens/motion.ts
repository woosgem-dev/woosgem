/**
 * Motion Token Types
 *
 * Actual values defined as CSS variables in ds-styles */

export const DurationKeys = [
  'fast01',
  'fast02',
  'moderate01',
  'moderate02',
  'slow01',
  'slow02',
] as const;

export type DurationKey = (typeof DurationKeys)[number];

export const EasingCategories = ['standard', 'entrance', 'exit'] as const;
export type EasingCategory = (typeof EasingCategories)[number];

export const EasingModes = ['productive', 'expressive'] as const;
export type EasingMode = (typeof EasingModes)[number];

export const MotionKeys = [
  'quick',
  'standard',
  'deliberate',
  'slow',
  'enter',
  'exit',
] as const;

export type MotionKey = (typeof MotionKeys)[number];
