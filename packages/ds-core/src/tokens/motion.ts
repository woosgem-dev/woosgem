/**
 * Motion Token Types
 *
 * 실제 값은 ds-styles에서 CSS 변수로 정의됨
 */

// ===================
// Duration Keys
// ===================

export const DurationKeys = [
  'fast01',
  'fast02',
  'moderate01',
  'moderate02',
  'slow01',
  'slow02',
] as const;

export type DurationKey = (typeof DurationKeys)[number];

// ===================
// Easing Keys
// ===================

export const EasingCategories = ['standard', 'entrance', 'exit'] as const;
export type EasingCategory = (typeof EasingCategories)[number];

export const EasingModes = ['productive', 'expressive'] as const;
export type EasingMode = (typeof EasingModes)[number];

// ===================
// Motion Preset Keys
// ===================

export const MotionKeys = [
  'quick',
  'standard',
  'deliberate',
  'slow',
  'enter',
  'exit',
] as const;

export type MotionKey = (typeof MotionKeys)[number];
