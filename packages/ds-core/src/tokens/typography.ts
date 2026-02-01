/**
 * Typography Tokens
 * Synced from ds-styles (SCSS is source of truth)
 */

// ===================
// Font Families
// ===================

export const fontFamily = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  serif: 'Georgia, "Times New Roman", serif',
} as const;

export type FontFamilyKey = keyof typeof fontFamily;
export type FontFamilyValue = (typeof fontFamily)[FontFamilyKey];

// ===================
// Type Scale
// ===================

export const typeScale = {
  '01': '0.75rem',    // 12px
  '02': '0.875rem',   // 14px
  '03': '1rem',       // 16px
  '04': '1.125rem',   // 18px
  '05': '1.25rem',    // 20px
  '06': '1.5rem',     // 24px
  '07': '1.75rem',    // 28px
  '08': '2rem',       // 32px
  '09': '2.25rem',    // 36px
  '10': '2.625rem',   // 42px
  '11': '3rem',       // 48px
  '12': '3.375rem',   // 54px
} as const;

export type TypeScaleKey = keyof typeof typeScale;
export type TypeScaleValue = (typeof typeScale)[TypeScaleKey];

// ===================
// Font Weights
// ===================

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type FontWeightKey = keyof typeof fontWeight;
export type FontWeightValue = (typeof fontWeight)[FontWeightKey];

// ===================
// Line Heights
// ===================

export const lineHeight = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 1.75,
} as const;

export type LineHeightKey = keyof typeof lineHeight;
export type LineHeightValue = (typeof lineHeight)[LineHeightKey];

// ===================
// Letter Spacing
// ===================

export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.02em',
  wider: '0.04em',
} as const;

export type LetterSpacingKey = keyof typeof letterSpacing;
export type LetterSpacingValue = (typeof letterSpacing)[LetterSpacingKey];

// ===================
// Semantic Type Tokens
// ===================

export interface TypeStyle {
  fontFamily?: FontFamilyValue;
  fontSize: string;
  fontWeight: FontWeightValue;
  lineHeight: number;
  letterSpacing?: string;
}

// Caption
export const typeCaption01: TypeStyle = {
  fontSize: typeScale['01'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.333,
  letterSpacing: '0.02em',
};

export const typeCaption02: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.286,
  letterSpacing: '0.02em',
};

// Label
export const typeLabel01: TypeStyle = {
  fontSize: typeScale['01'],
  fontWeight: fontWeight.medium,
  lineHeight: 1.333,
  letterSpacing: '0.02em',
};

export const typeLabel02: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.medium,
  lineHeight: 1.286,
  letterSpacing: '0.01em',
};

// Helper
export const typeHelper01: TypeStyle = {
  fontSize: typeScale['01'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.333,
  letterSpacing: '0.02em',
};

export const typeHelper02: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.286,
  letterSpacing: '0.01em',
};

// Body
export const typeBodyCompact01: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.286,
  letterSpacing: '0.01em',
};

export const typeBodyCompact02: TypeStyle = {
  fontSize: typeScale['03'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.375,
};

export const typeBody01: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.429,
  letterSpacing: '0.01em',
};

export const typeBody02: TypeStyle = {
  fontSize: typeScale['03'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.5,
};

// Code
export const typeCode01: TypeStyle = {
  fontFamily: fontFamily.mono,
  fontSize: typeScale['01'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.333,
  letterSpacing: '0.02em',
};

export const typeCode02: TypeStyle = {
  fontFamily: fontFamily.mono,
  fontSize: typeScale['02'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.429,
  letterSpacing: '0.02em',
};

// Headings
export const typeHeadingCompact01: TypeStyle = {
  fontSize: typeScale['02'],
  fontWeight: fontWeight.semibold,
  lineHeight: 1.286,
  letterSpacing: '0.01em',
};

export const typeHeadingCompact02: TypeStyle = {
  fontSize: typeScale['03'],
  fontWeight: fontWeight.semibold,
  lineHeight: 1.375,
};

export const typeHeading03: TypeStyle = {
  fontSize: typeScale['05'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.4,
};

export const typeHeading04: TypeStyle = {
  fontSize: typeScale['07'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.286,
};

export const typeHeading05: TypeStyle = {
  fontSize: typeScale['08'],
  fontWeight: fontWeight.normal,
  lineHeight: 1.25,
};

export const typeHeading06: TypeStyle = {
  fontSize: typeScale['10'],
  fontWeight: fontWeight.light,
  lineHeight: 1.199,
};

export const typeHeading07: TypeStyle = {
  fontSize: typeScale['11'],
  fontWeight: fontWeight.light,
  lineHeight: 1.199,
};

// ===================
// Type Token Map
// ===================

export const typeTokens = {
  'caption-01': typeCaption01,
  'caption-02': typeCaption02,
  'label-01': typeLabel01,
  'label-02': typeLabel02,
  'helper-01': typeHelper01,
  'helper-02': typeHelper02,
  'body-compact-01': typeBodyCompact01,
  'body-compact-02': typeBodyCompact02,
  'body-01': typeBody01,
  'body-02': typeBody02,
  'code-01': typeCode01,
  'code-02': typeCode02,
  'heading-compact-01': typeHeadingCompact01,
  'heading-compact-02': typeHeadingCompact02,
  'heading-03': typeHeading03,
  'heading-04': typeHeading04,
  'heading-05': typeHeading05,
  'heading-06': typeHeading06,
  'heading-07': typeHeading07,
} as const;

export type TypeTokenKey = keyof typeof typeTokens;
