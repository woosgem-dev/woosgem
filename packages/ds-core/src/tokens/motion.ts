/**
 * Motion Tokens
 * Synced from ds-styles (SCSS is source of truth)
 */

// ===================
// Duration
// ===================

export const duration = {
  fast01: '70ms',
  fast02: '110ms',
  moderate01: '150ms',
  moderate02: '240ms',
  slow01: '400ms',
  slow02: '700ms',
} as const;

export type DurationKey = keyof typeof duration;
export type DurationValue = (typeof duration)[DurationKey];

// ===================
// Easing Functions
// ===================

export const easing = {
  standard: {
    productive: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
    expressive: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
  },
  entrance: {
    productive: 'cubic-bezier(0, 0, 0.38, 0.9)',
    expressive: 'cubic-bezier(0, 0, 0.3, 1)',
  },
  exit: {
    productive: 'cubic-bezier(0.2, 0, 1, 0.9)',
    expressive: 'cubic-bezier(0.4, 0.14, 1, 1)',
  },
} as const;

export type EasingCategory = keyof typeof easing;
export type EasingMode = 'productive' | 'expressive';

// ===================
// Motion Presets
// ===================

export const motion = {
  quick: `${duration.fast02} ${easing.standard.productive}`,
  standard: `${duration.moderate01} ${easing.standard.productive}`,
  deliberate: `${duration.moderate02} ${easing.standard.productive}`,
  slow: `${duration.slow01} ${easing.standard.productive}`,
  enter: `${duration.moderate02} ${easing.entrance.productive}`,
  exit: `${duration.moderate01} ${easing.exit.productive}`,
} as const;

export type MotionKey = keyof typeof motion;
export type MotionValue = (typeof motion)[MotionKey];

// ===================
// Helpers
// ===================

/**
 * Get easing function by category and mode
 */
export function getEasing(category: EasingCategory, mode: EasingMode = 'productive'): string {
  return easing[category][mode];
}

/**
 * Build a transition string
 */
export function buildTransition(
  property: string = 'all',
  durationKey: DurationKey = 'moderate01',
  easingCategory: EasingCategory = 'standard',
  easingMode: EasingMode = 'productive'
): string {
  return `${property} ${duration[durationKey]} ${easing[easingCategory][easingMode]}`;
}
