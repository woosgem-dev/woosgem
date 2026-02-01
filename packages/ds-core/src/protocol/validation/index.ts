/**
 * Color Set Protocol (CSP) - Validation Module
 */

export {
  validateColorSetSchema,
  isValidColorSetDefinition,
  ErrorCodes,
  WarningCodes,
} from './schema-validator';

export {
  checkContrast,
  validateDefinitionContrast,
  validateResolvedContrast,
  suggestAccessibleColor,
  WCAG,
  type ContrastValidationResult,
  type ContrastCheckResult,
} from './contrast-validator';

// Zod-based validation
export {
  ColorSetDefinitionSchema,
  HexColorSchema,
  ColorValueSchema,
  ColorWithStatesSchema,
  ThemeModeSchema,
  validateColorSet as validateColorSetWithZod,
  safeValidateColorSet,
  isColorSetDefinition,
  type ColorSetDefinitionInput,
} from './zod-schema';

import type { ColorSetDefinition, ValidationResult, ValidationWarning } from '../schema';
import { validateColorSetSchema } from './schema-validator';
import { validateDefinitionContrast } from './contrast-validator';

/**
 * Comprehensive validation of a color set definition
 * Combines schema validation and contrast checking
 *
 * Note: `valid` reflects schema validity only. Contrast issues are reported
 * as warnings but don't affect the `valid` flag, as some themes may
 * intentionally use lower contrast for aesthetic reasons.
 */
export function validateColorSet(definition: unknown): ValidationResult & {
  contrastWarnings: ValidationWarning[];
  contrastPassed: boolean;
} {
  // First validate schema
  const schemaResult = validateColorSetSchema(definition);

  if (!schemaResult.valid) {
    return {
      ...schemaResult,
      contrastWarnings: [],
      contrastPassed: false,
    };
  }

  // Then validate contrast
  const contrastResult = validateDefinitionContrast(definition as ColorSetDefinition);

  return {
    // Schema validity only - contrast issues are warnings
    valid: schemaResult.valid,
    errors: schemaResult.errors,
    warnings: [...schemaResult.warnings, ...contrastResult.warnings],
    contrastWarnings: contrastResult.warnings,
    contrastPassed: contrastResult.passed,
  };
}
