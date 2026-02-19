/**
 * Typography Token Types
 *
 * Actual values defined as CSS variables in ds-styles */

export const FontFamilyKeys = ['sans', 'mono', 'serif'] as const;

export type FontFamilyKey = (typeof FontFamilyKeys)[number];

export const TypeScaleKeys = [
  '01', '02', '03', '04', '05', '06',
  '07', '08', '09', '10', '11', '12',
] as const;

export type TypeScaleKey = (typeof TypeScaleKeys)[number];

export const FontWeightKeys = [
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
] as const;

export type FontWeightKey = (typeof FontWeightKeys)[number];

export const LineHeightKeys = [
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
] as const;

export type LineHeightKey = (typeof LineHeightKeys)[number];

export const LetterSpacingKeys = [
  'tight',
  'normal',
  'wide',
  'wider',
] as const;

export type LetterSpacingKey = (typeof LetterSpacingKeys)[number];

export const TypeTokenKeys = [
  'caption-01',
  'caption-02',
  'label-01',
  'label-02',
  'helper-01',
  'helper-02',
  'body-compact-01',
  'body-compact-02',
  'body-01',
  'body-02',
  'code-01',
  'code-02',
  'heading-compact-01',
  'heading-compact-02',
  'heading-03',
  'heading-04',
  'heading-05',
  'heading-06',
  'heading-07',
] as const;

export type TypeTokenKey = (typeof TypeTokenKeys)[number];
