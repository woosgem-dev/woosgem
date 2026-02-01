/**
 * Color Set Protocol (CSP) - Main Entry Point
 *
 * A standardized protocol for theme interoperability, enabling third-party
 * themes to be easily created and validated with auto-generated color transformations.
 *
 * @example
 * ```typescript
 * import {
 *   ColorSetGenerator,
 *   validateColorSet,
 *   generateThemeCSS
 * } from '@woosgem/core';
 *
 * const myTheme = {
 *   $schema: 'https://woosgem.com/csp/v1.0.json',
 *   id: 'corporate',
 *   name: 'Corporate Theme',
 *   mode: 'light',
 *   primary: { base: '#003366' },
 *   secondary: { base: '#666666' },
 *   semantic: {
 *     danger: { base: '#CC0000' },
 *     success: { base: '#008800' },
 *     warning: { base: '#FF9900' },
 *     info: { base: '#0066CC' },
 *   },
 *   text: { default: '#000000', muted: '#666666', subtle: '#999999', inverse: '#FFFFFF' },
 *   background: { default: '#FFFFFF', subtle: '#F5F5F5', muted: '#EEEEEE', elevated: '#FFFFFF' },
 *   border: { default: '#CCCCCC' },
 *   focusRing: '#0066CC',
 * };
 *
 * // Validate
 * const result = validateColorSet(myTheme);
 * if (!result.valid) throw new Error(result.errors.join('\n'));
 *
 * // Generate all tokens
 * const generator = new ColorSetGenerator();
 * const resolved = generator.generate(myTheme);
 *
 * // Output CSS
 * const css = generateThemeCSS(resolved);
 * ```
 */

// Schema types
export type {
  HexColor,
  ColorValue,
  RgbColor,
  RgbaColor,
  HslColor,
  ColorWithStates,
  SemanticColorDef,
  TextColors,
  BackgroundColors,
  BorderColors,
  SemanticColors,
  ThemeMode,
  ColorSetDefinition,
  ResolvedColorSet,
  ResolvedColorTokens,
  ColorTokenName,
  ColorTransformFn,
  TransformationRule,
  TransformationRules,
  ValidationResult,
  ValidationError,
  ValidationWarning,
  ContrastResult,
  OutputOptions,
} from './schema';

// Color transformer utilities
export {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  darken,
  lighten,
  withAlpha,
  mix,
  luminance,
  contrastRatio,
  saturate,
  desaturate,
  invert,
  complement,
  isLight,
  isDark,
  parseColor,
  isValidHex,
} from './transformer';

// Transformation rules
export {
  transforms,
  defaultDerivationRules,
  applyTransform,
  type TransformFn,
  type DerivedTokenRule,
} from './transformations';

// Generator
export {
  ColorSetGenerator,
  generateColorSet,
  generateColorSets,
  type GeneratorOptions,
} from './generator';

// Validation
export {
  validateColorSet,
  validateColorSetSchema,
  isValidColorSetDefinition,
  checkContrast,
  validateDefinitionContrast,
  validateResolvedContrast,
  suggestAccessibleColor,
  WCAG,
  ErrorCodes,
  WarningCodes,
  type ContrastValidationResult,
  type ContrastCheckResult,
} from './validation/index';

// Output generators
export {
  generateCSSVariables,
  generateThemeCSS,
  generateMultiThemeCSS,
  generateCSSFile,
  generateSCSSMap,
  generateSCSSVariables,
  generateSCSSColorSet,
  generateSCSSFile,
  generateSCSSMixin,
  generateSCSSThemeMixins,
  generateTypeScriptConstants,
  generateTypeScriptObject,
  generateTypeScriptTypes,
  generateTypeScriptModule,
  generateTypeScriptFile,
  generateCSSVarHelper,
} from './output/index';

// Presets
export {
  defaultTheme,
  darkTheme,
  presets,
  getPreset,
  getPresetIds,
} from './presets/index';
