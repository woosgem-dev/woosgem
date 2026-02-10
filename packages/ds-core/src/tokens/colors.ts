/**
 * Color Token Types
 *
 * 실제 값은 ds-styles에서 CSS 변수로 정의됨
 * --wg-global-color-* : Theme/CSP로만 변함
 * --wg-{component}-*  : 프레임워크별 오버라이딩이 가능함
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
