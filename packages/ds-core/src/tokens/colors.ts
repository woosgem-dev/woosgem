/**
 * Color Token Types
 *
 * Actual values defined as CSS variables in ds-styles
 * --wg-global-color-*: Only changes via Theme/CSP
 * --wg-{component}-*: Can be overridden per framework
 */

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

export const BackgroundColors = [
  'default',
  'subtle',
  'muted',
  'inverse',
] as const;

export type BackgroundColor = (typeof BackgroundColors)[number];

export const BorderColors = [
  'default',
  'hover',
  'focus',
  'error',
] as const;

export type BorderColor = (typeof BorderColors)[number];
