/**
 * Color Token Types
 *
 * ?§Ï†ú Í∞íÏ? ds-styles?êÏÑú CSS Î≥Ä?òÎ°ú ?ïÏùò??
 * --wg-global-color-* : Theme/CSPÎ°úÎßå Î≥ÄÍ≤?
 * --wg-{component}-*  : ?∏Îùº???§Î≤Ñ?ºÏù¥??Í∞Ä??
 */

// ===================
// Semantic Color Keys
// ===================

export const SemanticColors = [
  'primary',
  'secondary',
  'danger',
  'success',
  'warning',
  'info',
  'muted',
] as const;

export type SemanticColor = (typeof SemanticColors)[number];

// ===================
// Text Color Keys
// ===================

export const TextColors = [
  'default',
  'muted',
  'subtle',
  'inverse',
  'primary',
  'danger',
  'success',
  'warning',
] as const;

export type TextColor = (typeof TextColors)[number];

// ===================
// Background Color Keys
// ===================

export const BackgroundColors = [
  'default',
  'subtle',
  'muted',
  'inverse',
] as const;

export type BackgroundColor = (typeof BackgroundColors)[number];

// ===================
// Border Color Keys
// ===================

export const BorderColors = [
  'default',
  'hover',
  'focus',
  'error',
] as const;

export type BorderColor = (typeof BorderColors)[number];
